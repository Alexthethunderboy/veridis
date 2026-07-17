'use client';

import React from 'react';
import StreetTranslator from '@/components/science/StreetTranslator';

import { Card } from '@/components/UI';

const FEATURED_DOCS = [
  { 
    title: 'The &quot;Colorado&quot; Warning: Chemical Realities', 
    category: 'Safety', 
    time: '5 min read',
    icon: '⚠️',
    href: '/compendium#3-the-colorado-crisis-a-global-threat-with-local-names'
  },
  { 
    title: 'Nigerian Landrace Genetics: Authenticity Audit', 
    category: 'Botany', 
    time: '12 min read',
    icon: '🌿',
    href: '/compendium#1-botanical--genetic-heritage-the-global-tree-and-the-nigerian-root'
  },
  { 
    title: 'SCD Crisis: Whole-Plant vs Isolates', 
    category: 'Science', 
    time: '8 min read',
    icon: '🔬',
    href: '/compendium#4-medical-science-the-sickle-cell-pain-protocol-2026'
  },
];

export default function UnlearnPage() {
  return (
    <main className="min-h-screen bg-transparent">
      <div className="bg-brand-emerald-900 text-brand-stone-50 py-32 px-8 text-center mb-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none overflow-hidden">
          <div className="text-[20rem] font-black absolute -top-20 -left-20 rotate-12 leading-none text-brand-stone-50">SCIENCE</div>
        </div>
        <h1 className="newsreader-display text-8xl mb-4 relative z-10">Unlearn Hub</h1>
        <p className="text-xl font-medium text-brand-secondary uppercase tracking-[0.5em] relative z-10">Decolonizing Botanical Intelligence</p>
      </div>

      <div className="max-w-7xl mx-auto px-8 pb-32">
        <section className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="newsreader-display text-5xl text-brand-primary">Featured Research</h2>
              <p className="clinical-label mt-2 text-brand-primary/60">Verified Truths from the Efifya Compendium</p>
            </div>
            <a href="/compendium" className="text-brand-secondary font-bold text-sm uppercase tracking-widest border-b-2 border-brand-secondary pb-1 hover:text-brand-primary hover:border-brand-primary transition-all">
              View Full Compendium
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {FEATURED_DOCS.map((doc, i) => (
              <a key={i} href={doc.href} className="group block h-full">
                <Card hoverZoom className="h-full flex flex-col bg-brand-stone-100 border-brand-primary/10">
                  <div className="aspect-square w-16 bg-brand-primary/10 rounded-2xl mb-8 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                    {doc.icon}
                  </div>
                  <span className="clinical-label text-brand-secondary">{doc.category}</span>
                  <h3 className="newsreader-display text-3xl text-brand-primary mt-4 leading-tight group-hover:text-brand-secondary transition-colors">{doc.title}</h3>
                  <div className="mt-auto pt-8 flex items-center justify-between">
                    <p className="clinical-label">{doc.time}</p>
                    <span className="text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity font-black text-xl">→</span>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <div className="p-1 glass rounded-[3rem] border border-brand-secondary/10 overflow-hidden">
             <StreetTranslator />
          </div>
        </section>

        <section className="p-6 md:p-12 glass rounded-3xl border border-brand-primary/10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-brand-secondary"></div>
          <h2 className="newsreader-display text-4xl text-brand-primary mb-4">The Substack Feed</h2>
          <p className="text-brand-primary/70 mb-8 max-w-xl mx-auto">
            Stay updated with the &quot;Unlearn Naija&quot; newsletter. Real-time insights into extraction, botany, and legal trends.
          </p>
          <div className="flex max-w-md mx-auto gap-4">
            <input type="email" placeholder="Enter your email" className="flex-1 p-4 rounded-xl border border-brand-primary/10 bg-brand-stone-100 outline-none focus:ring-2 focus:ring-brand-primary text-brand-primary placeholder:text-brand-primary/40 font-bold" />
            <button className="bg-brand-primary text-brand-stone-50 px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-brand-secondary transition-colors">JOIN</button>
          </div>
        </section>
      </div>
    </main>
  );
}
