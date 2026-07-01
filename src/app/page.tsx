'use client';

import React from 'react';
import Link from 'next/link';
import { Card, Badge, SectionHeader } from '@/components/UI';
import { Search, BookOpen, Leaf, Scale, ShieldAlert, ChevronRight, Activity } from 'lucide-react';
import { motion, Variants } from 'motion/react';
import { useRouter } from 'next/navigation';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
};

export default function Home() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const router = useRouter();

  return (
    <main className="min-h-screen bg-transparent selection:bg-brand-emerald-900 selection:text-brand-stone-50 overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-emerald-900/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-secondary/5 blur-[120px] rounded-full"></div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 md:pt-48 pb-20 md:pb-32 px-6 md:px-8 max-w-7xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Badge variant="clinical" pulse>Intelligence-Driven Advocacy</Badge>
          <h1 className="newsreader-display text-6xl md:text-8xl lg:text-[10rem] text-brand-primary mt-8 md:mt-12 mb-8 md:mb-10 leading-[0.85] md:leading-[0.8] tracking-tight">
            Stigma to <span className="text-brand-emerald-900 text-glow-emerald">Science.</span>
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
          className="max-w-3xl mx-auto glass-panel rounded-3xl p-2 md:p-3 border border-brand-primary/10 mb-20 md:mb-40 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              if (searchQuery.trim()) {
                router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
              } else {
                router.push('/search');
              }
            }}
            className="flex flex-col md:flex-row items-center"
          >
            <div className="flex items-center w-full md:w-auto">
              <Search className="ml-4 md:ml-6 text-brand-primary/30" size={24} />
              <input 
                type="text" 
                placeholder="Search strains..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 p-4 md:p-5 bg-transparent outline-none text-brand-primary placeholder:text-brand-primary/30 font-bold text-base md:text-lg focus:ring-0"
              />
            </div>
            <button type="submit" className="w-full md:w-auto bg-brand-emerald-900 text-brand-stone-50 px-8 md:px-12 py-4 md:py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-brand-primary hover:text-brand-stone-100 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
              Query
            </button>
          </form>
        </motion.div>
      </section>

      {/* Bento Grid Navigation */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-40">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[700px]"
        >
          {/* Main Feature: Strain Directory */}
          <Link href="/strains" className="md:col-span-8 group block h-full">
            <motion.div variants={itemVariants} className="h-full">
              <Card interactive hoverZoom className="h-full bg-brand-stone-100 p-10 md:p-16 flex flex-col justify-end relative">
                <div className="absolute top-[-5%] right-[-5%] p-4 md:p-8 opacity-[0.02] text-[8rem] md:text-[15rem] font-black group-hover:scale-105 transition-transform newsreader-display italic text-brand-primary">Botany</div>
                <Leaf className="mb-6 md:mb-10 text-brand-emerald-900 group-hover:text-brand-secondary transition-colors drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]" size={64} />
                <div className="relative z-10">
                  <h2 className="newsreader-display text-5xl md:text-7xl text-brand-primary mb-4 md:mb-6">Strain Directory</h2>
                  <p className="text-lg md:text-xl text-brand-primary/50 font-medium max-w-md leading-relaxed">
                    Deep intelligence on chemical profiles, terpene maps, and the genetic lineage of global and landrace varieties.
                  </p>
                </div>
              </Card>
            </motion.div>
          </Link>

          <div className="md:col-span-4 grid grid-rows-2 gap-8 h-full">
            {/* Education */}
            <Link href="/edu" className="group block h-full">
              <motion.div variants={itemVariants} className="h-full">
                <Card interactive hoverZoom className="h-full p-10 flex flex-col justify-between">
                  <BookOpen className="text-brand-primary/40 group-hover:text-brand-secondary drop-shadow-md transition-colors" size={40} />
                  <div>
                    <h3 className="newsreader-display text-4xl text-brand-primary mb-4">Learn Hub</h3>
                    <p className="text-sm text-brand-primary/40 font-bold uppercase tracking-widest leading-relaxed">Botanical Foundations & Cultivation</p>
                  </div>
                </Card>
              </motion.div>
            </Link>

            {/* Advocacy */}
            <Link href="/law" className="group block h-full">
              <motion.div variants={itemVariants} className="h-full">
                <Card interactive hoverZoom className="h-full p-10 flex flex-col justify-between bg-brand-emerald-900/5 border-brand-emerald-900/10">
                  <Scale className="text-brand-primary/40 group-hover:text-brand-emerald-900 drop-shadow-md transition-colors" size={40} />
                  <div>
                    <h3 className="newsreader-display text-4xl text-brand-primary mb-4">Policy Intel</h3>
                    <p className="text-sm text-brand-primary/40 font-bold uppercase tracking-widest leading-relaxed">Global Legalization Tracking</p>
                  </div>
                </Card>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Intelligence Summary */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pb-40">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <SectionHeader 
            badge="Current Intelligence"
            title="Policy Frameworks"
            subtitle="Real-time updates on legislative shifts and clinical breakthroughs."
          />
          <Link href="/law" className="group flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-brand-secondary pb-4 hover:text-brand-primary transition-colors">
            Full Archive <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
            <motion.div variants={itemVariants} className="h-full">
              <Card interactive className="p-10 border-brand-emerald-900/20 h-full bg-brand-emerald-900/5">
                <Activity className="text-brand-emerald-900 mb-8 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" size={32} />
                <h4 className="clinical-label mb-4 text-brand-emerald-900/80">Pilot Success</h4>
                <p className="text-xl font-bold leading-snug text-brand-primary/90">
                  Ondo State reports 40% reduction in illicit trade since Alternative Development launch.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="h-full">
              <Card interactive className="p-10 border-brand-secondary/20 h-full bg-brand-secondary/5">
                <Scale className="text-brand-secondary mb-8 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" size={32} />
                <h4 className="clinical-label mb-4 text-brand-secondary/80">Legislative Milestone</h4>
                <p className="text-xl font-bold leading-snug text-brand-primary/90">
                  Medical Cannabis Framework successfully passed 3rd Reading at National Assembly.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="h-full">
              <Card interactive className="p-10 border-red-500/20 bg-red-500/10 h-full">
                <ShieldAlert className="text-red-500 mb-8 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" size={32} />
                <h4 className="clinical-label mb-4 text-red-500/80">Public Health</h4>
                <p className="text-xl font-bold leading-snug text-brand-primary/90">
                  Surge in &quot;Colorado&quot; synthetic poisoning cases requires immediate educational intervention.
                </p>
              </Card>
            </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-20 md:py-32 border-t border-brand-primary/5 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-emerald-900/5 to-transparent pointer-events-none" />
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="newsreader-display text-4xl md:text-6xl text-brand-primary mb-8 md:mb-12 cursor-default relative z-10"
        >
          Veridis<span className="text-brand-emerald-900 text-5xl md:text-7xl leading-none">.</span>
        </motion.div>
        <p className="text-[10px] font-black uppercase tracking-[1em] md:tracking-[1.5em] text-brand-primary/30 max-w-lg mx-auto leading-relaxed relative z-10">
          SCIENCE-BASED ADVOCACY FOR A BOTANICAL FUTURE
        </p>
      </footer>
    </main>
  );
}
