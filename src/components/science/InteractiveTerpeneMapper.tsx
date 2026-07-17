'use client';

import React, { useState } from 'react';
import { Card, Badge } from '@/components/UI';
import { TERPENES } from '@/lib/data/cannabisData';
import { TerpeneIconMapper } from '@/components/icons/TerpeneIcons';
import { motion, AnimatePresence } from 'motion/react';

export default function InteractiveTerpeneMapper() {
  const terpeneList = Object.values(TERPENES);
  const [selected, setSelected] = useState<typeof terpeneList[0]>(terpeneList[0]);

  const SelectedIcon = TerpeneIconMapper[selected.name];

  return (
    <div className="space-y-12">
      {/* Selection Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {terpeneList.map((t) => {
          const Icon = TerpeneIconMapper[t.name];
          const isActive = selected.name === t.name;
          
          return (
            <motion.button
              key={t.name}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelected(t)}
              className={`relative flex flex-col items-center justify-center p-4 rounded-2xl border transition-all duration-500 ${
                isActive 
                  ? 'bg-brand-primary text-brand-stone-50 border-transparent shadow-2xl shadow-brand-primary/20 scale-105 z-10' 
                  : 'bg-brand-primary/[0.02] border-brand-primary/5 text-brand-primary/60 hover:border-brand-secondary/30 hover:bg-brand-secondary/[0.02]'
              }`}
            >
              <div 
                className="w-8 h-8 mb-3 transition-transform duration-500"
                style={{ color: isActive ? '#fff' : t.color }}
              >
                {Icon && <Icon />}
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-center leading-tight">
                {t.name}
              </span>
              {isActive && (
                <motion.div 
                  layoutId="active-ring"
                  className="absolute -inset-1 rounded-[1.25rem] border-2 pointer-events-none"
                  style={{ borderColor: t.color }}
                  initial={false}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Detailed Insight Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <Card className="overflow-hidden border-brand-primary/10 shadow-2xl">
            <div className="grid md:grid-cols-12 gap-12">
              {/* Visual Side */}
              <div className="md:col-span-4 flex flex-col items-center justify-center p-8 bg-brand-primary/[0.03] rounded-3xl border border-brand-primary/5">
                <div className="w-32 h-32 text-brand-secondary mb-8 drop-shadow-2xl">
                  {SelectedIcon && <SelectedIcon />}
                </div>
                <Badge variant="premium" className="mb-4">{selected.formula}</Badge>
                <div className="text-center">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-primary/30 block mb-1">Boiling Point</span>
                  <p className="newsreader-display text-2xl text-brand-primary">{selected.boilingPoint}</p>
                </div>
              </div>

              {/* Info Side */}
              <div className="md:col-span-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="newsreader-display text-5xl text-brand-primary">{selected.name}</h3>
                  <div 
                    className="w-4 h-4 rounded-full shadow-[0_0_15px_currentColor]" 
                    style={{ color: selected.color, backgroundColor: selected.color }} 
                  />
                </div>
                
                <p className="text-xl text-brand-primary/70 leading-relaxed mb-8">
                  {selected.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-secondary mb-3 block">Medicinal Benefits</span>
                    <p className="text-lg font-bold text-brand-primary leading-tight">{selected.benefits}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-secondary mb-3 block">Primary Effects</span>
                    <div className="flex flex-wrap gap-2">
                      {selected.effects.map(effect => (
                        <span key={effect} className="text-sm font-medium px-3 py-1 bg-brand-primary/5 rounded-lg border border-brand-primary/10 text-brand-primary/80">
                          {effect}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-secondary mb-3 block">Flavor Profile</span>
                    <div className="flex flex-wrap gap-2">
                      {selected.flavors.map(flavor => (
                        <span key={flavor} className="text-sm font-medium px-3 py-1 bg-brand-secondary/5 rounded-lg border border-brand-secondary/10 text-brand-secondary">
                          {flavor}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-secondary mb-3 block">Also Found In</span>
                    <div className="flex flex-wrap gap-2">
                      {('foundIn' in selected ? (selected as { foundIn: string[] }).foundIn : [])?.map((source: string) => (
                        <span key={source} className="text-sm font-medium px-3 py-1 bg-brand-primary/5 rounded-lg border border-brand-primary/10 text-brand-primary/80">
                          {source}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-brand-primary/5">
                  <p className="text-xs italic text-brand-primary/40 font-medium">
                    * Scientific data sourced from the Efifya Laboratory. Terpene concentration varies by cultivar and local environmental factors like soil pH and UV intensity.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
