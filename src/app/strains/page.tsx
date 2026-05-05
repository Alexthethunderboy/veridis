'use client';

import React from 'react';
import { SectionHeader } from '@/components/UI';
import StrainGrid from '@/components/strains/StrainGrid';
import TerpeneLegend from '@/components/strains/TerpeneLegend';
import FlavonoidLegend from '@/components/strains/FlavonoidLegend';
import { motion } from 'motion/react';

export default function StrainsPage() {
  return (
    <main className="min-h-screen pt-40 pb-40 px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <SectionHeader 
          badge="Global Strain Directory"
          title="Botanical Intelligence"
          subtitle="Explore the chemical architecture and genetic lineage of the world's most iconic cannabis varieties, from West African landraces to global hybrids."
        />
      </motion.div>

      {/* Terpene Classification Guide */}
      <div className="mb-16">
        <div className="flex items-baseline gap-4 mb-6">
          <h3 className="clinical-label text-brand-primary/40">Terpene Classification Guide</h3>
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-primary/20">Click to Explore</span>
        </div>
        <TerpeneLegend />
      </div>

      {/* Flavonoid Classification Guide */}
      <div className="mb-20">
        <div className="flex items-baseline gap-4 mb-6">
          <h3 className="clinical-label text-brand-primary/40">Flavonoid Classification Guide</h3>
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-primary/20">The Hidden Pillar · Click to Explore</span>
        </div>
        <FlavonoidLegend />
      </div>

      <div className="mb-12 flex justify-between items-end border-b border-brand-primary/5 pb-8">
        <h3 className="newsreader-display text-4xl text-brand-primary">The Catalogue</h3>
        <div className="text-[10px] font-black uppercase tracking-widest text-brand-primary/30">
          Updated with Global Profiles
        </div>
      </div>

      <StrainGrid />
    </main>
  );
}
