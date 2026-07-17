'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Card, SectionHeader } from '@/components/UI';
import { fetchAdvocacyData, type NewsArticle, type LegalMilestone, type AdvocacyData, type NewsTopic } from '@/services/api/advocacy';
import { Globe, Newspaper, ExternalLink, Database, Clock3 } from 'lucide-react';

export default function LawPage() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [milestones, setMilestones] = useState<LegalMilestone[]>([]);
  const [loading, setLoading] = useState(true);
  const [feedMeta, setFeedMeta] = useState<Pick<AdvocacyData, 'lastRefreshedAt' | 'refreshStatus'>>({ lastRefreshedAt: null, refreshStatus: 'cached' });
  const [region, setRegion] = useState<'nigeria' | 'africa' | 'global' | 'all'>('nigeria');
  const [topic, setTopic] = useState<NewsTopic | 'all'>('all');

  const filteredNews = useMemo(() => news
    .filter(article => region === 'all' || article.region === region)
    .filter(article => topic === 'all' || article.topics.includes(topic))
    .sort((a, b) => region === 'nigeria'
      ? b.relevanceScore - a.relevanceScore || new Date(b.publishedAt).valueOf() - new Date(a.publishedAt).valueOf()
      : new Date(b.publishedAt).valueOf() - new Date(a.publishedAt).valueOf()), [news, region, topic]);

  const regionCounts = useMemo(() => ({
    nigeria: news.filter(article => article.region === 'nigeria').length,
    africa: news.filter(article => article.region === 'africa').length,
    global: news.filter(article => article.region === 'global').length,
    all: news.length,
  }), [news]);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchAdvocacyData();
        setNews(data.articles);
        setMilestones(data.milestones);
        setFeedMeta({ lastRefreshedAt: data.lastRefreshedAt, refreshStatus: data.refreshStatus });
      } finally { setLoading(false); }
    }
    loadData();
  }, []);

  return (
    <main className="min-h-screen pt-32 md:pt-40 pb-32 md:pb-40 px-6 md:px-8 max-w-7xl mx-auto">
      <SectionHeader 
        badge="Policy Intelligence"
        title="Advocacy & Law"
        subtitle="Tracking the global shift from prohibition to evidence-based regulation, with a focused lens on West African legislative evolution."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-20">
        {/* Global Milestones Timeline */}
        <div className="lg:col-span-4 space-y-8">
          <div className="mb-8">
            <div className="flex items-center gap-3 clinical-label text-brand-primary/60">
              <Globe size={14} /> Global Policy Shifts
            </div>
            <p className="mt-2 text-xs text-brand-primary/35">Newest verified event first · primary sources</p>
          </div>

          <div className="space-y-4">
            {milestones.map((m) => (
              <Card key={m.id} className="p-6 border-brand-primary/5 hover:border-brand-secondary/20 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-secondary">{m.country}</span>
                  <time dateTime={m.date} className="text-[10px] font-bold text-brand-primary/40">{new Date(`${m.date}T00:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</time>
                </div>
                <p className="text-sm font-bold text-brand-primary/80 leading-snug">{m.status}</p>
                <p className="mt-3 text-xs leading-relaxed text-brand-primary/50">{m.summary}</p>
                <div className={`mt-3 w-1.5 h-1.5 rounded-full ${
                  m.impact === 'positive' ? 'bg-brand-emerald-900' : 
                  m.impact === 'caution' ? 'bg-brand-secondary' : 'bg-brand-primary/20'
                }`} />
                <a href={m.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-secondary hover:text-brand-primary">
                  {m.sourceName} <ExternalLink size={12} />
                </a>
              </Card>
            ))}
          </div>
        </div>

        {/* Intelligence Feed */}
        <div className="lg:col-span-8">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-3 clinical-label text-brand-primary/60"><Newspaper size={14} /> Cannabis Policy News Archive</div>
              <p className="mt-2 text-xs text-brand-primary/35">Newest publication first · deduplicated and saved locally</p>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-brand-primary/35">
              {feedMeta.lastRefreshedAt ? <><Clock3 size={12} /> Updated {new Date(feedMeta.lastRefreshedAt).toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' })}</> : <><Database size={12} /> Awaiting first refresh</>}
            </div>
          </div>

          {!loading && <div className="mb-8 space-y-4" aria-label="News filters">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4" role="group" aria-label="Filter news by region">
              {(['nigeria', 'africa', 'global', 'all'] as const).map(value => (
                <button key={value} onClick={() => setRegion(value)} aria-pressed={region === value} className={`rounded-xl border px-4 py-3 text-left text-xs font-bold capitalize transition-colors ${region === value ? 'border-brand-emerald-900/40 bg-brand-emerald-900/10 text-brand-emerald-900' : 'border-brand-primary/10 text-brand-primary/50 hover:text-brand-primary'}`}>
                  {value}<span className="ml-2 text-[10px] opacity-50">{regionCounts[value]}</span>
                </button>
              ))}
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide" role="group" aria-label="Filter news by topic">
              {(['all', 'policy', 'enforcement', 'medical', 'industry', 'research'] as const).map(value => (
                <button key={value} onClick={() => setTopic(value)} aria-pressed={topic === value} className={`shrink-0 rounded-full border px-3 py-1.5 text-[10px] font-bold capitalize ${topic === value ? 'border-brand-secondary/40 bg-brand-secondary/10 text-brand-secondary' : 'border-brand-primary/10 text-brand-primary/40'}`}>{value}</button>
              ))}
            </div>
          </div>}
          
          {loading ? (
            <div className="space-y-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-40 w-full glass rounded-2xl animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredNews.length > 0 ? filteredNews.map((article) => (
                <Card key={article.id} interactive className="p-8 group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-wrap items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-primary/35">
                      <span className={article.region === 'nigeria' ? 'text-brand-emerald-900' : ''}>{article.region}</span><span>·</span><span>{article.source}</span><span>·</span><time dateTime={article.publishedAt}>{new Date(article.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</time>
                    </div>
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-brand-primary/20 group-hover:text-brand-secondary transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  <a href={article.url} target="_blank" rel="noopener noreferrer"><h3 className="newsreader-display text-3xl text-brand-primary mb-4 group-hover:text-brand-secondary transition-colors">{article.title}</h3></a>
                  <p className="text-sm text-brand-primary/50 font-medium leading-relaxed line-clamp-2">
                    {article.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">{article.topics.map(value => <span key={value} className="rounded-full bg-brand-primary/5 px-2.5 py-1 text-[9px] font-bold capitalize text-brand-primary/40">{value}</span>)}</div>
                </Card>
              )) : (
                <Card className="p-20 text-center border-dashed border-brand-primary/10">
                  <p className="text-brand-primary/50 font-bold uppercase tracking-widest text-xs">No matching saved articles</p>
                  <p className="text-sm text-brand-primary/30 mt-2">Try another region or topic. New matching reports will appear after the next refresh.</p>
                </Card>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Historical Context */}
      <div className="mt-20 md:mt-40 pt-16 md:pt-24 border-t border-brand-primary/5">
        <h3 className="newsreader-display text-4xl md:text-5xl text-brand-primary mb-12">Nigerian Legislative Timeline</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { year: '1935', title: 'Dangerous Drugs Act', desc: 'The colonial-era foundation of prohibition.' },
            { year: '1966', title: 'Indian Hemp Decree', desc: 'Introduced extreme penalties for cultivation.' },
            { year: '1989', title: 'NDLEA Act', desc: 'Established the primary enforcement body.' },
            { year: 'PILOT', title: 'Ondo State Pilot', desc: 'A shift toward Alternative Development models.' },
          ].map((item, i) => (
            <div key={i} className="relative pl-8 border-l border-brand-primary/10">
              <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-brand-secondary" />
              <span className="text-[10px] font-black tracking-widest text-brand-secondary mb-2 block">{item.year}</span>
              <h4 className="text-lg font-bold text-brand-primary/80 mb-2">{item.title}</h4>
              <p className="text-sm text-brand-primary/40 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
