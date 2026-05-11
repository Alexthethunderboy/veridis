'use client';

import React, { useState } from 'react';
import { TERPENES } from '@/lib/data/cannabisData';
import { TerpeneIconMapper } from '@/components/icons/TerpeneIcons';
import { motion, AnimatePresence } from 'motion/react';
import { Card, Badge } from '@/components/UI';
import { X } from 'lucide-react';

export default function TerpeneLegend() {
  const [selected, setSelected] = useState<typeof TERPENES.myrcene | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 mb-12 md:mb-16">
        {Object.values(TERPENES).map((t, i) => {
          const Icon = TerpeneIconMapper[t.name];
          return (
            <motion.button 
              key={i}
              whileHover={{ y: -4, backgroundColor: `${t.color}12`, borderColor: `${t.color}40` }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelected(t as any)}
              className="p-4 rounded-2xl border border-brand-primary/5 bg-brand-stone-100/50 flex flex-col items-center text-center transition-all hover:shadow-xl group"
              style={{ '--hover-shadow': t.color } as React.CSSProperties}
            >
              <div 
                className="w-10 h-10 mb-3 transition-transform group-hover:scale-110"
                style={{ color: t.color }}
              >
                {Icon && <Icon />}
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-brand-primary mb-1">
                {t.name}
              </p>
              <p className="text-[8px] font-medium text-brand-primary/40 uppercase tracking-tighter">
                {t.aroma.split(',')[0]}
              </p>
            </motion.button>
          );
        })}
      </div>

      {/* Terpene Detail Modal */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 bg-brand-stone-50/60 backdrop-blur-md z-[60] cursor-zoom-out"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-2 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[600px] z-[70] pointer-events-none"
            >
              <Card className="pointer-events-auto border-brand-primary/10 shadow-3xl overflow-hidden relative">
                {/* Unique color identity stripe */}
                <div className="h-1 w-full" style={{ backgroundColor: selected.color }} />

                <button 
                  onClick={() => setSelected(null)}
                  className="absolute top-7 right-6 text-brand-primary/20 hover:text-brand-secondary transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="flex flex-col items-center text-center p-4">
                  <div 
                    className="w-20 h-20 mb-6 drop-shadow-xl"
                    style={{ color: selected.color }}
                  >
                    {TerpeneIconMapper[selected.name] && React.createElement(TerpeneIconMapper[selected.name])}
                  </div>
                  
                  <Badge variant="premium" className="mb-4">{selected.formula}</Badge>
                  <h3 className="newsreader-display text-4xl md:text-5xl text-brand-primary mb-4">{selected.name}</h3>
                  
                  <p className="text-lg text-brand-primary/70 leading-relaxed mb-8 italic">
                    &quot;{selected.description}&quot;
                  </p>

                  <div className="grid grid-cols-2 gap-6 w-full text-left border-t border-brand-primary/5 pt-8">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-secondary mb-2 block">Primary Effects</span>
                      <div className="flex flex-wrap gap-1.5">
                        {selected.effects.map(e => (
                          <span key={e} className="text-[10px] font-bold px-2 py-0.5 bg-brand-primary/5 rounded border border-brand-primary/10 text-brand-primary/70">
                            {e}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-secondary mb-2 block">Medicinal Benefits</span>
                      <p className="text-xs font-bold text-brand-primary leading-tight">{selected.benefits}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-secondary mb-2 block">Aromatic Profile</span>
                      <p className="text-xs font-bold text-brand-primary leading-tight">{selected.aroma}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-secondary mb-2 block">Boiling Point</span>
                      <p className="text-[10px] md:text-xs font-mono font-bold text-brand-primary/60">{selected.boilingPoint}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
