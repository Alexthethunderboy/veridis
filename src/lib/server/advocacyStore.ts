import 'server-only';
import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import type { AdvocacyData, LegalMilestone, NewsArticle, NewsTopic } from '@/services/api/advocacy';

const archivePath = path.join(process.cwd(), 'src/lib/data/advocacyArchive.json');
const refreshInterval = 6 * 60 * 60 * 1000;
const maxArticles = 250;
const blockedHosts = ['biztoc.com', 'slashdot.org', 'globenewswire.com', 'prnewswire.com', 'naturalnews.com', 'gothamgal.com', 'newser.com'];

interface Archive { lastRefreshedAt: string | null; articles: NewsArticle[]; milestones: LegalMilestone[] }
interface NewsApiArticle { title?: string; description?: string; url?: string; publishedAt?: string; source?: { name?: string } }
type Region = NewsArticle['region'];

const fallback: Archive = { lastRefreshedAt: null, articles: [], milestones: [] };

async function readArchive(): Promise<Archive> {
  try { return JSON.parse(await readFile(archivePath, 'utf8')) as Archive; }
  catch { return fallback; }
}

function cleanUrl(value: string) {
  const url = new URL(value);
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(key => url.searchParams.delete(key));
  url.hash = '';
  return url.toString();
}

function isRelevantHeadline(title: string) {
  const value = title.toLowerCase();
  const namesCannabis = /\b(cannabis|marijuana|hemp|weed|cbd|thc|pot)\b/.test(value);
  const signalsPolicy = /\b(law|legal|policy|regulat|legislat|decriminal|reschedul|licen|government|court|parliament|ban|bill|act|rules?|arrest|seiz|ndlea)\b/.test(value);
  return namesCannabis && signalsPolicy;
}

function isAllowedUrl(value: string) {
  try {
    const host = new URL(value).hostname.replace(/^www\./, '');
    return !blockedHosts.some(blocked => host === blocked || host.endsWith(`.${blocked}`));
  } catch { return false; }
}

const countryMatchers: Array<[string, RegExp]> = [
  ['Nigeria', /\b(nigeria|nigerian|lagos|abuja|ondo|ndlea|nafdac)\b/i],
  ['South Africa', /\b(south africa|south african)\b/i], ['Ghana', /\bghana|ghanaian\b/i],
  ['Kenya', /\bkenya|kenyan\b/i], ['Zimbabwe', /\bzimbabwe|zimbabwean\b/i],
  ['Morocco', /\bmorocco|moroccan\b/i], ['Malawi', /\bmalawi|malawian\b/i],
  ['Zambia', /\bzambia|zambian\b/i], ['Lesotho', /\blesotho\b/i],
];

function classify(article: Pick<NewsArticle, 'title' | 'description' | 'source' | 'url'>, hint?: Region) {
  const text = `${article.title} ${article.description} ${article.source} ${article.url}`;
  const countries = countryMatchers.filter(([, matcher]) => matcher.test(text)).map(([country]) => country);
  const nigeria = countries.includes('Nigeria');
  const africa = countries.some(country => country !== 'Nigeria') || /\bafrica|african\b/i.test(text);
  const region: Region = nigeria ? 'nigeria' : africa ? 'africa' : hint === 'nigeria' ? 'nigeria' : hint === 'africa' ? 'africa' : 'global';
  const topics: NewsTopic[] = [];
  if (/\b(law|legal|policy|regulat|legislat|decriminal|reschedul|court|parliament|bill|act|ban)\b/i.test(text)) topics.push('policy');
  if (/\b(arrest|seiz|raid|enforcement|ndlea|police|customs|traffick)\b/i.test(text)) topics.push('enforcement');
  if (/\b(medical|patient|health|clinical|prescri|treatment)\b/i.test(text)) topics.push('medical');
  if (/\b(industry|business|market|farm|cultivat|licen|export|investment)\b/i.test(text)) topics.push('industry');
  if (/\b(research|study|scient|trial|evidence|university)\b/i.test(text)) topics.push('research');
  if (!topics.length) topics.push('policy');
  let relevanceScore = region === 'nigeria' ? 60 : region === 'africa' ? 35 : 15;
  if (/\b(nigeria|nigerian|ndlea|nafdac|lagos|abuja|ondo)\b/i.test(article.title)) relevanceScore += 30;
  if (/\b(cannabis|marijuana|hemp)\b/i.test(article.title)) relevanceScore += 10;
  if (topics.includes('policy') || topics.includes('medical')) relevanceScore += 5;
  return { region, countries: countries.length ? countries : region === 'nigeria' ? ['Nigeria'] : [], topics, relevanceScore };
}

function normalize(article: NewsApiArticle, fetchedAt: string, hint: Region): NewsArticle | null {
  if (!article.title || !article.url || !article.publishedAt || !article.source?.name) return null;
  if (!isRelevantHeadline(article.title) || !isAllowedUrl(article.url)) return null;
  const published = new Date(article.publishedAt);
  if (Number.isNaN(published.valueOf()) || published > new Date()) return null;
  try {
    const url = cleanUrl(article.url);
    const normalized = {
      id: createHash('sha256').update(url).digest('hex').slice(0, 16),
      title: article.title.replace(/\s+-\s+[^-]+$/, '').trim(),
      description: (article.description ?? 'Open the source for the full report.').trim(),
      url,
      source: article.source.name.trim(),
      publishedAt: published.toISOString(),
      fetchedAt,
    };
    return { ...normalized, ...classify(normalized, hint) };
  } catch { return null; }
}

async function fetchNewsQuery(apiKey: string, fetchedAt: string, query: string, hint: Region) {
  const url = new URL('https://newsapi.org/v2/everything');
  url.searchParams.set('q', query);
  url.searchParams.set('language', 'en');
  url.searchParams.set('sortBy', 'publishedAt');
  url.searchParams.set('pageSize', '100');
  url.searchParams.set('searchIn', 'title,description');
  const response = await fetch(url, { headers: { 'X-Api-Key': apiKey }, signal: AbortSignal.timeout(12_000) });
  if (!response.ok) throw new Error(`News provider returned ${response.status}`);
  const body = await response.json() as { status?: string; articles?: NewsApiArticle[]; message?: string };
  if (body.status !== 'ok') throw new Error(body.message ?? 'News provider error');
  return (body.articles ?? []).map(item => normalize(item, fetchedAt, hint)).filter((item): item is NewsArticle => item !== null);
}

async function fetchCurrentNews(apiKey: string, fetchedAt: string) {
  const queries: Array<[string, Region]> = [
    ['(cannabis OR marijuana OR hemp) AND (Nigeria OR Nigerian OR NDLEA OR NAFDAC OR Lagos OR Abuja OR Ondo)', 'nigeria'],
    ['(cannabis OR marijuana OR hemp) AND (Africa OR Ghana OR "South Africa" OR Kenya OR Zimbabwe OR Morocco OR Malawi OR Zambia OR Lesotho)', 'africa'],
    ['(cannabis OR marijuana OR hemp) AND (law OR legalization OR policy OR regulation OR rescheduling OR medical)', 'global'],
  ];
  const results = await Promise.allSettled(queries.map(([query, hint]) => fetchNewsQuery(apiKey, fetchedAt, query, hint)));
  const fulfilled = results.filter((result): result is PromiseFulfilledResult<NewsArticle[]> => result.status === 'fulfilled');
  if (!fulfilled.length) throw new Error('All news-provider queries failed');
  return fulfilled.flatMap(result => result.value);
}

function newestFirst<T extends { date?: string; publishedAt?: string }>(items: T[]) {
  return [...items].sort((a, b) => new Date(b.publishedAt ?? b.date ?? 0).valueOf() - new Date(a.publishedAt ?? a.date ?? 0).valueOf());
}

export async function getAdvocacyArchive(force = false): Promise<AdvocacyData> {
  const archive = await readArchive();
  archive.articles = archive.articles
    .filter(article => isRelevantHeadline(article.title) && isAllowedUrl(article.url))
    .map(article => ({ ...article, ...classify(article, article.region) }));
  const apiKey = process.env.NEWS_API_KEY || process.env.NEXT_PUBLIC_NEWS_API_KEY;
  const stale = !archive.lastRefreshedAt || Date.now() - new Date(archive.lastRefreshedAt).valueOf() >= refreshInterval;
  let status: AdvocacyData['refreshStatus'] = 'cached';

  if (!apiKey) status = 'unconfigured';
  else if (force || stale) {
    const fetchedAt = new Date().toISOString();
    try {
      const incoming = await fetchCurrentNews(apiKey, fetchedAt);
      const merged = new Map(archive.articles.map(item => [item.id, item]));
      incoming.forEach(item => merged.set(item.id, item));
      archive.articles = newestFirst([...merged.values()]).slice(0, maxArticles);
      archive.lastRefreshedAt = fetchedAt;
      await writeFile(archivePath, `${JSON.stringify(archive, null, 2)}\n`, 'utf8');
      status = 'fresh';
    } catch (error) {
      console.error('Advocacy refresh failed; serving saved archive.', error);
      status = 'error';
    }
  }

  const articles = [...archive.articles].sort((a, b) => b.relevanceScore - a.relevanceScore || new Date(b.publishedAt).valueOf() - new Date(a.publishedAt).valueOf());
  return { articles, milestones: newestFirst(archive.milestones), lastRefreshedAt: archive.lastRefreshedAt, refreshStatus: status };
}
