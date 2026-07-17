export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  url: string;
  source: string;
  publishedAt: string;
  fetchedAt: string;
  region: 'nigeria' | 'africa' | 'global';
  countries: string[];
  topics: NewsTopic[];
  relevanceScore: number;
}

export type NewsTopic = 'policy' | 'enforcement' | 'medical' | 'industry' | 'research';

export interface LegalMilestone {
  id: string;
  country: string;
  status: string;
  summary: string;
  date: string;
  impact: 'positive' | 'neutral' | 'caution';
  sourceUrl: string;
  sourceName: string;
  verifiedAt: string;
}

export interface AdvocacyData {
  articles: NewsArticle[];
  milestones: LegalMilestone[];
  lastRefreshedAt: string | null;
  refreshStatus: 'fresh' | 'cached' | 'unconfigured' | 'error';
}

let request: Promise<AdvocacyData> | null = null;

export async function fetchAdvocacyData(): Promise<AdvocacyData> {
  request ??= fetch('/api/advocacy', { headers: { accept: 'application/json' } })
    .then(async response => {
      if (!response.ok) throw new Error(`Advocacy feed returned ${response.status}`);
      return response.json() as Promise<AdvocacyData>;
    })
    .finally(() => { request = null; });
  return request;
}

export async function fetchNigerianAdvocacyNews(): Promise<NewsArticle[]> {
  return (await fetchAdvocacyData()).articles;
}

export async function getGlobalLegalMilestones(): Promise<LegalMilestone[]> {
  return (await fetchAdvocacyData()).milestones;
}
