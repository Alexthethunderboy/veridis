'use client';

import React, { useEffect, useState } from 'react';
import { Card, SectionHeader } from '@/components/UI';
import { fetchNigerianAdvocacyNews, getGlobalLegalMilestones, type NewsArticle, type LegalMilestone } from '@/services/api/advocacy';
import { Globe, Newspaper, ExternalLink } from 'lucide-react';

export default function LawPage() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [milestones, setMilestones] = useState<LegalMilestone[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const [newsData, milestonesData] = await Promise.all([
        fetchNigerianAdvocacyNews(),
        getGlobalLegalMilestones()
      ]);
      setNews(newsData);
      setMilestones(milestonesData);
      setLoading(false);
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
          <div className="flex items-center gap-3 clinical-label text-brand-primary/40 mb-8">
            <Globe size={14} /> Global Policy Shifts
          </div>
          <div className="space-y-4">
            {milestones.map((m, i) => (
              <Card key={i} className="p-6 border-brand-primary/5 hover:border-brand-secondary/20 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-secondary">{m.country}</span>
                  <span className="text-[10px] font-bold text-brand-primary/30">{m.date}</span>
                </div>
                <p className="text-sm font-bold text-brand-primary/80 leading-snug">{m.status}</p>
                <div className={`mt-3 w-1.5 h-1.5 rounded-full ${
                  m.impact === 'positive' ? 'bg-brand-emerald-900' : 
                  m.impact === 'caution' ? 'bg-brand-secondary' : 'bg-brand-primary/20'
                }`} />
              </Card>
            ))}
          </div>
        </div>

        {/* Intelligence Feed */}
        <div className="lg:col-span-8">
          <div className="flex items-center gap-3 clinical-label text-brand-primary/40 mb-8">
            <Newspaper size={14} /> Live Intelligence Feed
          </div>
          
          {loading ? (
            <div className="space-y-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-40 w-full glass rounded-2xl animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {news.length > 0 ? news.map((article, i) => (
                <Card key={i} interactive className="p-8 group">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary/30">
                      {article.source} • {new Date(article.publishedAt).toLocaleDateString()}
                    </span>
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-brand-primary/20 group-hover:text-brand-secondary transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  <h3 className="newsreader-display text-3xl text-brand-primary mb-4 group-hover:text-brand-secondary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-brand-primary/50 font-medium leading-relaxed line-clamp-2">
                    {article.description}
                  </p>
                </Card>
              )) : (
                <Card className="p-20 text-center border-dashed border-brand-primary/10">
                  <p className="text-brand-primary/40 font-bold uppercase tracking-widest text-xs">Intelligence feed currently offline</p>
                  <p className="text-sm text-brand-primary/20 mt-2">Connecting to global policy nodes...</p>
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
