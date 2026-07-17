'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Search, Loader2, ArrowUpRight, BookOpen, Newspaper, Leaf } from 'lucide-react';
import { SectionHeader, Card, Badge, Input } from '@/components/UI';
import { SEARCH_REGISTRY } from '@/lib/data/searchRegistry';
import { fetchAllStrains, RichStrain } from '@/services/api/strains';
import { fetchNigerianAdvocacyNews, getGlobalLegalMilestones, NewsArticle, LegalMilestone } from '@/services/api/advocacy';

export default function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  
  const [query, setQuery] = useState(initialQuery);
  const [debouncedQuery, setDebouncedQuery] = useState(initialQuery);
  
  // Data State
  const [strains, setStrains] = useState<RichStrain[]>([]);
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [milestones, setMilestones] = useState<LegalMilestone[]>([]);
  const [loading, setLoading] = useState(true);

  // Debounce input
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 300);
    return () => clearTimeout(timer);
  }, [query]);

  // Load all data once on mount
  useEffect(() => {
    async function loadData() {
      try {
        const [strainsData, newsData, milestonesData] = await Promise.all([
          fetchAllStrains(),
          fetchNigerianAdvocacyNews(),
          getGlobalLegalMilestones()
        ]);
        setStrains(strainsData);
        setNews(newsData);
        setMilestones(milestonesData);
      } catch (error) {
        console.error('Error loading search data:', error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // Compute Results
  const { matchedPages, matchedStrains, matchedIntel } = useMemo(() => {
    const term = debouncedQuery.toLowerCase().trim();
    if (!term) return { matchedPages: [], matchedStrains: [], matchedIntel: [] };

    // 1. Filter Registry (Pages)
    const matchedPages = SEARCH_REGISTRY.filter(page => 
      page.title.toLowerCase().includes(term) ||
      page.description.toLowerCase().includes(term) ||
      page.keywords.some(kw => kw.includes(term))
    );

    // 2. Filter Strains
    const matchedStrains = strains.filter(s => 
      s.name.toLowerCase().includes(term) ||
      s.type.toLowerCase().includes(term) ||
      s.effects.some(e => e.toLowerCase().includes(term)) ||
      s.medical.some(m => m.toLowerCase().includes(term))
    );

    // 3. Filter Intelligence (News & Milestones)
    const filteredNews = news.filter(n => 
      n.title.toLowerCase().includes(term) ||
      n.description?.toLowerCase().includes(term)
    ).map(n => ({ ...n, type: 'news' as const }));

    const filteredMilestones = milestones.filter(m => 
      m.country.toLowerCase().includes(term) ||
      m.status.toLowerCase().includes(term)
    ).map(m => ({ ...m, type: 'milestone' as const }));

    const matchedIntel = [...filteredNews, ...filteredMilestones];

    return { matchedPages, matchedStrains, matchedIntel };
  }, [debouncedQuery, strains, news, milestones]);

  const hasResults = matchedPages.length > 0 || matchedStrains.length > 0 || matchedIntel.length > 0;

  return (
    <main className="min-h-screen pt-32 pb-40 px-6 md:px-8 max-w-7xl mx-auto">
      <SectionHeader 
        badge="Global App Search"
        title="Intelligence Lookup"
        subtitle="Search across botanical directories, educational frameworks, and global policy databases."
      />

      <div className="mt-12 mb-20 max-w-2xl">
        <Input 
          icon={<Search size={18} />}
          placeholder="Search for strains, policy, science, or concepts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-40 space-y-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Loader2 className="text-brand-secondary" size={40} />
          </motion.div>
          <p className="newsreader-display text-xl text-brand-primary/40 italic">Aggregating global intelligence...</p>
        </div>
      ) : !debouncedQuery ? (
        <div className="text-center py-40 border border-dashed border-brand-primary/10 rounded-3xl bg-brand-primary/[0.02]">
          <Search size={48} className="mx-auto text-brand-primary/20 mb-6" />
          <p className="text-lg font-bold text-brand-primary/40">Enter a query to begin your search.</p>
        </div>
      ) : !hasResults ? (
        <div className="text-center py-40 border border-dashed border-red-500/20 rounded-3xl bg-red-500/5">
          <p className="text-lg font-bold text-red-500/60 mb-2">No matching intelligence found.</p>
          <p className="text-sm text-brand-primary/40">Try broader terms like &quot;Sativa&quot;, &quot;Policy&quot;, or &quot;Education&quot;.</p>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-24"
        >
          {/* Section: Pages & Core Frameworks */}
          {matchedPages.length > 0 && (
            <section>
              <h3 className="flex items-center gap-3 clinical-label text-brand-primary/40 mb-8 border-b border-brand-primary/5 pb-4">
                <BookOpen size={14} /> Core Platforms & Tools
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {matchedPages.map((page, i) => (
                  <Link key={i} href={page.path} className="group block h-full">
                    <Card interactive className="h-full p-8 border-brand-primary/10 bg-brand-primary/[0.02]">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="newsreader-display text-3xl text-brand-primary group-hover:text-brand-secondary transition-colors">{page.title}</h4>
                        <ArrowUpRight className="text-brand-primary/20 group-hover:text-brand-secondary transition-colors" size={20} />
                      </div>
                      <p className="text-sm font-medium text-brand-primary/60 leading-relaxed">{page.description}</p>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Section: Strains Catalogue */}
          {matchedStrains.length > 0 && (
            <section>
              <h3 className="flex items-center gap-3 clinical-label text-brand-primary/40 mb-8 border-b border-brand-primary/5 pb-4">
                <Leaf size={14} /> Botanical Varieties
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {matchedStrains.map((strain) => (
                  <Link key={strain.id} href={`/strains?q=${encodeURIComponent(strain.name)}`} className="group block">
                    <Card interactive className="p-6">
                      <Badge variant={strain.type === 'Sativa' ? 'clinical' : 'neutral'} className="mb-4">
                        {strain.type}
                      </Badge>
                      <h4 className="text-xl font-bold text-brand-primary group-hover:text-brand-emerald-900 transition-colors mb-2">{strain.name}</h4>
                      <p className="text-xs font-black uppercase tracking-widest text-brand-primary/30 truncate">{strain.origin}</p>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Section: Intelligence & Policy */}
          {matchedIntel.length > 0 && (
            <section>
              <h3 className="flex items-center gap-3 clinical-label text-brand-primary/40 mb-8 border-b border-brand-primary/5 pb-4">
                <Newspaper size={14} /> Global Intelligence
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {matchedIntel.map((item, i) => (
                  <Link key={i} href="/law" className="group block">
                    <Card interactive className="h-full p-6 bg-brand-emerald-900/5 border-brand-emerald-900/10 hover:border-brand-emerald-900/30">
                      <Badge variant="clinical" className="mb-4">
                        {item.type === 'news' ? 'Live Feed' : 'Policy Shift'}
                      </Badge>
                      <h4 className="text-lg font-bold text-brand-primary group-hover:text-brand-emerald-900 transition-colors mb-2 leading-snug">
                        {item.type === 'news' ? (item as NewsArticle).title : `${(item as LegalMilestone).country}: ${(item as LegalMilestone).status}`}
                      </h4>
                      {item.type === 'news' && (item as NewsArticle).description && (
                        <p className="text-sm font-medium text-brand-primary/50 line-clamp-2">{(item as NewsArticle).description}</p>
                      )}
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </motion.div>
      )}
    </main>
  );
}
