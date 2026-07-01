'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, Badge, Input } from '@/components/UI';
import { fetchAllStrains, RichStrain } from '@/services/api/strains';
import { Leaf, FlaskConical, MapPin, Zap, Search, Loader2, ArrowUpRight } from 'lucide-react';
import { TerpeneIconMapper } from '@/components/icons/TerpeneIcons';
import Link from 'next/link';
import { TERPENES, CANNABINOIDS } from '@/lib/data/cannabisData';
import { FlavonoidIconMapper } from '@/components/icons/FlavonoidIcons';
import StrainAura from './StrainAura';

export default function StrainGrid() {
  const [strains, setStrains] = useState<RichStrain[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [displayCount, setDisplayCount] = useState(12);
  const [selectedStrain, setSelectedStrain] = useState<RichStrain | null>(null);
  const [selectedTerpene, setSelectedTerpene] = useState<typeof TERPENES.myrcene | null>(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchAllStrains();
      setStrains(data);
      setLoading(false);
    }
    loadData();
  }, []);

  const filteredStrains = useMemo(() => {
    return strains.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.effects.some(e => e.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [strains, searchQuery]);

  const visibleStrains = filteredStrains.slice(0, displayCount);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-40 space-y-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <Loader2 className="text-brand-secondary" size={40} />
        </motion.div>
        <p className="newsreader-display text-xl text-brand-primary/40 italic">Accessing Global Intelligence...</p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
        <div className="w-full md:w-96">
          <Input 
            icon={<Search size={18} />}
            placeholder="Search variety, effect, or type..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary/30">
          Showing {visibleStrains.length} of {filteredStrains.length} Varieties
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleStrains.map((strain) => (
          <Card 
            key={strain.id} 
            interactive 
            onClick={() => setSelectedStrain(strain)}
            className="group"
          >
            <div className="flex justify-between items-start mb-6">
              <Badge variant={strain.type === 'Sativa' ? 'clinical' : 'neutral'}>
                {strain.type}
              </Badge>
              <div className="text-[10px] font-black uppercase tracking-widest text-brand-primary/30">
                {strain.origin.split(',')[0]}
              </div>
            </div>

            <div className="w-full h-32 rounded-xl mb-6 overflow-hidden relative border border-brand-primary/5">
              {/* If we have an image_url, render Next/Image here. Else fallback to Aura */}
              <StrainAura strain={strain} className="w-full h-full opacity-80" />
            </div>

            <h3 className="newsreader-display text-4xl text-brand-primary mb-4 group-hover:text-brand-secondary transition-colors">
              {strain.name}
            </h3>

            <div className="space-y-6 mb-8">
              {/* Terpene Row */}
              <div className="flex items-center gap-4">
                <span className="text-[8px] font-black uppercase tracking-[0.2em] text-brand-primary/20 w-12">Terpenes</span>
                <div className="flex gap-2 flex-wrap">
                  {strain.terpenes.slice(0, 3).map((t, i) => {
                    const Icon = TerpeneIconMapper[t.name];
                    return (
                      <div 
                        key={i}
                        className="w-8 h-8 rounded-lg border border-brand-primary/10 flex items-center justify-center p-1.5 transition-all group-hover:scale-110 group-hover:border-brand-secondary/30"
                        title={t.name}
                        style={{ backgroundColor: `${t.color}10`, color: t.color }}
                      >
                        {Icon && <Icon />}
                      </div>
                    );
                  })}
                  {strain.terpenes.length > 3 && (
                    <span className="text-[8px] font-black text-brand-primary/30 self-center ml-1 uppercase tracking-tighter">+{strain.terpenes.length - 3}</span>
                  )}
                </div>
              </div>

              {/* Flavonoid Row */}
              <div className="flex items-center gap-4">
                <span className="text-[8px] font-black uppercase tracking-[0.2em] text-brand-primary/20 w-12">Flavors</span>
                <div className="flex gap-2 flex-wrap">
                  {strain.flavonoids.slice(0, 3).map((f: { name: string; color: string }, i: number) => {
                    const Icon = FlavonoidIconMapper[f.name];
                    return (
                      <div 
                        key={i}
                        className="w-8 h-8 rounded-lg border border-brand-primary/5 flex items-center justify-center p-1.5 transition-all group-hover:scale-110 group-hover:border-brand-primary/20"
                        title={f.name}
                        style={{ backgroundColor: `${f.color}10`, color: f.color }}
                      >
                        {Icon && <Icon />}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-brand-primary/5 pt-6">
              <div>
                <p className="clinical-label mb-1">Potency</p>
                <p className="text-xl font-bold text-brand-primary/80">{strain.thc} THC</p>
              </div>
              <div>
                <p className="clinical-label mb-1">Secondary</p>
                <p className="text-sm font-bold text-brand-secondary/80">{strain.secondary}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {displayCount < filteredStrains.length && (
        <div className="flex justify-center pt-12">
          <button 
            onClick={() => setDisplayCount(prev => prev + 12)}
            className="newsreader-display text-2xl text-brand-primary/40 hover:text-brand-secondary transition-colors italic flex items-center gap-4"
          >
            [ Load More Intelligence ]
          </button>
        </div>
      )}

      {/* Detail Overlay */}
      <AnimatePresence>
        {selectedStrain && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStrain(null)}
              className="fixed inset-0 bg-brand-stone-50/80 backdrop-blur-md z-50 cursor-zoom-out"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40 }}
              className="fixed inset-2 md:inset-20 glass z-50 rounded-3xl overflow-y-auto md:overflow-hidden flex flex-col md:flex-row border-brand-primary/10 shadow-2xl"
            >
              <div className="w-full md:w-1/3 bg-brand-stone-100 p-6 md:p-12 flex flex-col justify-between shrink-0 border-b md:border-b-0 md:border-r border-brand-primary/5 h-auto md:h-full md:overflow-y-auto">
                <div className="overflow-y-visible md:overflow-y-auto">
                  <div className="flex justify-between items-start mb-8">
                    <Badge variant="clinical">{selectedStrain.type}</Badge>
                    <Link 
                      href={`/strains/${selectedStrain.id}`}
                      className="text-brand-secondary hover:text-brand-primary transition-colors flex items-center gap-2 text-[10px] font-black uppercase tracking-widest"
                    >
                      Full Analysis <ArrowUpRight size={14} />
                    </Link>
                  </div>
                  <h2 className="newsreader-display text-5xl md:text-7xl text-brand-primary mb-4 md:mb-6 leading-none">
                    {selectedStrain.name}
                  </h2>
                  <div className="flex items-center gap-3 text-brand-secondary mb-12">
                    <MapPin size={18} />
                    <span className="text-sm font-bold uppercase tracking-widest">{selectedStrain.origin}</span>
                  </div>
                  <p className="text-lg text-brand-primary/60 font-medium leading-relaxed italic">
                    &quot;{selectedStrain.description}&quot;
                  </p>
                </div>
                
                <button 
                  onClick={() => setSelectedStrain(null)}
                  className="mt-12 text-xs font-black uppercase tracking-[0.3em] text-brand-primary/40 hover:text-brand-secondary transition-colors text-left"
                >
                  [ Close Intelligence ]
                </button>
              </div>

              <div className="flex-1 p-6 md:p-12 h-auto md:h-full overflow-y-visible md:overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                  {/* Cannabinoid Profile */}
                  <div>
                    <h4 className="flex items-center gap-3 clinical-label text-brand-primary/40 mb-8">
                      <FlaskConical size={14} /> Cannabinoid Distribution
                    </h4>
                    <div className="space-y-6">
                      {selectedStrain.detailed_cannabinoids.map((c, i) => {
                        const cannData = Object.values(CANNABINOIDS).find(cd => cd.name === c.name);
                        const color = cannData?.color || '#ccc';
                        return (
                          <div key={i}>
                            <div className="flex justify-between text-sm font-bold mb-2">
                              <span>{c.name}</span>
                              <span>{c.value}</span>
                            </div>
                            <div className="h-1.5 w-full bg-brand-primary/5 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: c.value }}
                                transition={{ duration: 1, delay: i * 0.1 }}
                                className="h-full"
                                style={{ backgroundColor: color }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Terpene Profile */}
                  <div>
                    <h4 className="flex items-center gap-3 clinical-label text-brand-primary/40 mb-8">
                      Molecular Dominance
                    </h4>
                    <div className="grid grid-cols-1 gap-4">
                      {selectedStrain.terpenes.map((t, i) => {
                        const Icon = TerpeneIconMapper[t.name];
                        return (
                          <button 
                            key={i} 
                            onClick={() => setSelectedTerpene(t as typeof TERPENES.myrcene)}
                            className="flex items-center gap-4 p-4 rounded-2xl border border-brand-primary/5 bg-brand-primary/[0.02] hover:bg-brand-primary/[0.04] transition-colors text-left w-full group/terp"
                          >
                            <div 
                              className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg text-brand-secondary transition-transform group-hover/terp:scale-110"
                              style={{ backgroundColor: `${t.color}20` }}
                            >
                              {Icon && <Icon />}
                            </div>
                            <div>
                              <p className="text-sm font-bold text-brand-primary">{t.name}</p>
                              <p className="text-[10px] font-medium text-brand-primary/40 uppercase tracking-widest">{t.aroma}</p>
                            </div>
                            <div className="ml-auto text-[10px] font-bold text-brand-secondary/60">
                              Explore <ArrowUpRight size={10} className="inline ml-1" />
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Effects & Medical */}
                  <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 border-t border-brand-primary/5 pt-12 md:pt-16">
                    <div>
                      <h4 className="flex items-center gap-3 clinical-label text-brand-primary/40 mb-8">
                        <Zap size={14} /> Reported Effects
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedStrain.effects.map((e, i) => (
                          <span key={i} className="px-4 py-2 bg-brand-primary/5 rounded-xl text-sm font-bold border border-brand-primary/5">
                            {e}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="flex items-center gap-3 clinical-label text-brand-primary/40 mb-8">
                        <Leaf size={14} /> Clinical Applications
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedStrain.medical.map((m, i) => (
                          <span key={i} className="px-4 py-2 bg-brand-secondary/5 text-brand-secondary/80 rounded-xl text-sm font-bold border border-brand-secondary/10">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Terpene Detail Modal (Nested for UX flow) */}
      <AnimatePresence>
        {selectedTerpene && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTerpene(null)}
              className="fixed inset-0 bg-brand-stone-50/40 backdrop-blur-sm z-[100] cursor-zoom-out"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg px-4 z-[110]"
            >
              <Card className="border-brand-primary/10 shadow-3xl max-h-[90vh] overflow-y-auto relative p-6 md:p-12 text-center bg-brand-stone-50">
                <button 
                  onClick={() => setSelectedTerpene(null)}
                  className="absolute top-6 right-6 text-brand-primary/20 hover:text-brand-secondary transition-colors"
                >
                  <ArrowUpRight className="rotate-45" size={20} />
                </button>

                <div className="w-20 h-20 text-brand-secondary mx-auto mb-6 drop-shadow-xl">
                  {TerpeneIconMapper[selectedTerpene.name] && React.createElement(TerpeneIconMapper[selectedTerpene.name])}
                </div>
                
                <Badge variant="premium" className="mb-4">{selectedTerpene.formula}</Badge>
                <h3 className="newsreader-display text-5xl text-brand-primary mb-4">{selectedTerpene.name}</h3>
                <p className="text-lg text-brand-primary/70 leading-relaxed mb-8 italic">
                  &quot;{selectedTerpene.description}&quot;
                </p>

                <div className="grid grid-cols-2 gap-6 w-full text-left border-t border-brand-primary/5 pt-8">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-secondary mb-1 block">Aromatic</span>
                    <p className="text-xs font-bold text-brand-primary">{selectedTerpene.aroma}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-secondary mb-1 block">Boiling Point</span>
                    <p className="text-xs font-mono font-bold text-brand-primary/60">{selectedTerpene.boilingPoint}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
