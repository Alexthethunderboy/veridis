'use client';

import React from 'react';
import Link from 'next/link';
import { Card, Badge, SectionHeader } from '@/components/UI';
import { Search, BookOpen, Leaf, Scale, ShieldAlert, ChevronRight, Activity } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent selection:bg-brand-secondary selection:text-brand-stone-50 overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-secondary/5 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-emerald-50/5 blur-[120px] rounded-full"></div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 md:pt-48 pb-20 md:pb-32 px-6 md:px-8 max-w-7xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="clinical">Intelligence-Driven Advocacy</Badge>
          <h1 className="newsreader-display text-6xl md:text-8xl lg:text-[10rem] text-brand-primary mt-8 md:mt-12 mb-8 md:mb-10 leading-[0.8] md:leading-[0.75] tracking-tight">
            Stigma to <span className="text-brand-secondary text-glow">Science.</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-brand-primary/60 font-medium leading-relaxed max-w-3xl mx-auto mb-12 md:mb-20">
            The definitive platform for global botanical intelligence, clinical protocols, and evidence-based policy.
          </p>
        </motion.div>
        
        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto glass rounded-3xl p-2 md:p-3 border border-brand-primary/10 mb-20 md:mb-40 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex items-center w-full md:w-auto">
              <Search className="ml-4 md:ml-6 text-brand-primary/20" size={24} />
              <input 
                type="text" 
                placeholder="Search strains..." 
                className="flex-1 p-4 md:p-5 bg-transparent outline-none text-brand-primary placeholder:text-brand-primary/20 font-bold text-base md:text-lg"
              />
            </div>
            <button className="w-full md:w-auto bg-brand-primary text-brand-stone-50 px-8 md:px-12 py-4 md:py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-brand-secondary transition-all shadow-xl hover:shadow-brand-secondary/20">
              Query
            </button>
          </div>
        </motion.div>
      </section>

      {/* Bento Grid Navigation */}
      <section className="max-w-7xl mx-auto px-8 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[700px]">
          {/* Main Feature: Strain Directory */}
          <Link href="/strains" className="md:col-span-8 group">
            <Card interactive className="h-full bg-brand-stone-100 p-10 md:p-16 flex flex-col justify-end relative overflow-hidden">
              <div className="absolute top-[-5%] right-[-5%] p-4 md:p-8 opacity-[0.03] text-[8rem] md:text-[15rem] font-black group-hover:scale-105 transition-transform newsreader-display italic">Botany</div>
              <Leaf className="mb-6 md:mb-10 text-brand-secondary" size={64} />
              <div className="relative z-10">
                <h2 className="newsreader-display text-5xl md:text-7xl text-brand-primary mb-4 md:mb-6">Strain Directory</h2>
                <p className="text-lg md:text-xl text-brand-primary/50 font-medium max-w-md leading-relaxed">
                  Deep intelligence on chemical profiles, terpene maps, and the genetic lineage of global and landrace varieties.
                </p>
              </div>
            </Card>
          </Link>

          <div className="md:col-span-4 grid grid-rows-2 gap-8 h-full">
            {/* Education */}
            <Link href="/edu" className="group">
              <Card interactive className="h-full p-10 flex flex-col justify-between">
                <BookOpen className="text-brand-primary/40 group-hover:text-brand-secondary transition-colors" size={40} />
                <div>
                  <h3 className="newsreader-display text-4xl text-brand-primary mb-4">Learn Hub</h3>
                  <p className="text-sm text-brand-primary/40 font-bold uppercase tracking-widest leading-relaxed">Botanical Foundations & Cultivation</p>
                </div>
              </Card>
            </Link>

            {/* Advocacy */}
            <Link href="/law" className="group">
              <Card interactive className="h-full p-10 flex flex-col justify-between bg-brand-emerald-50/5">
                <Scale className="text-brand-primary/40 group-hover:text-brand-emerald-900 transition-colors" size={40} />
                <div>
                  <h3 className="newsreader-display text-4xl text-brand-primary mb-4">Policy Intel</h3>
                  <p className="text-sm text-brand-primary/40 font-bold uppercase tracking-widest leading-relaxed">Global Legalization Tracking</p>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Intelligence Summary */}
      <section className="max-w-7xl mx-auto px-8 pb-40">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <SectionHeader 
            badge="Current Intelligence"
            title="Policy Frameworks"
            subtitle="Real-time updates on legislative shifts and clinical breakthroughs."
          />
          <Link href="/law" className="group flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-brand-secondary pb-4">
            Full Archive <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-10 border-brand-emerald-900/10">
              <Activity className="text-brand-emerald-900 mb-8" size={32} />
              <h4 className="clinical-label mb-4 text-brand-emerald-900/80">Pilot Success</h4>
              <p className="text-xl font-bold leading-snug text-brand-primary/80">
                Ondo State reports 40% reduction in illicit trade since Alternative Development launch.
              </p>
            </Card>

            <Card className="p-10 border-brand-secondary/10">
              <Scale className="text-brand-secondary mb-8" size={32} />
              <h4 className="clinical-label mb-4 text-brand-secondary/80">Legislative Milestone</h4>
              <p className="text-xl font-bold leading-snug text-brand-primary/80">
                Medical Cannabis Framework successfully passed 3rd Reading at National Assembly.
              </p>
            </Card>

            <Card className="p-10 border-red-500/10 bg-red-500/5">
              <ShieldAlert className="text-red-500 mb-8" size={32} />
              <h4 className="clinical-label mb-4 text-red-500/80">Public Health</h4>
              <p className="text-xl font-bold leading-snug text-brand-primary/80">
                Surge in &quot;Colorado&quot; synthetic poisoning cases requires immediate educational intervention.
              </p>
            </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 md:py-32 border-t border-brand-primary/5 text-center px-6">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="newsreader-display text-4xl md:text-6xl text-brand-primary mb-8 md:mb-12 cursor-default"
        >
          Veridis<span className="text-brand-secondary text-5xl md:text-7xl leading-none">.</span>
        </motion.div>
        <p className="text-[10px] font-black uppercase tracking-[1em] md:tracking-[1.5em] text-brand-primary/20 max-w-lg mx-auto leading-relaxed">
          SCIENCE-BASED ADVOCACY FOR A BOTANICAL FUTURE
        </p>
      </footer>
    </main>
  );
}
