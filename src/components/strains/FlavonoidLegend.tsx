'use client';

import React, { useState } from 'react';
import { FLAVONOIDS } from '@/lib/data/cannabisData';
import { FlavonoidIconMapper } from '@/components/icons/FlavonoidIcons';
import { motion, AnimatePresence } from 'motion/react';
import { Card, Badge } from '@/components/UI';
import { X, Leaf } from 'lucide-react';

export default function FlavonoidLegend() {
  const [selected, setSelected] = useState<typeof FLAVONOIDS.apigenin | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-4">
        {Object.values(FLAVONOIDS).map((f, i) => {
          const Icon = FlavonoidIconMapper[f.name];
          return (
            <motion.button
              key={i}
              whileHover={{ y: -4, backgroundColor: `${f.color}12`, borderColor: `${f.color}40` }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelected(f)}
              className="p-4 rounded-2xl border border-brand-primary/5 bg-brand-stone-100/50 flex flex-col items-center text-center transition-all hover:shadow-xl group"
            >
              <div
                className="w-10 h-10 mb-3 transition-transform group-hover:scale-110"
                style={{ color: f.color }}
              >
                {Icon && <Icon />}
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-brand-primary mb-1 leading-tight">
                {f.name}
              </p>
              <p className="text-[8px] font-medium text-brand-primary/40 uppercase tracking-tighter">
                {f.role.split(' ')[0]}
              </p>
            </motion.button>
          );
        })}
      </div>

      {/* Flavonoid Detail Modal */}
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
              className="fixed inset-2 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[620px] z-[70] pointer-events-none"
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

                <div className="flex flex-col items-center text-center p-6 md:p-8">
                  <div
                    className="w-20 h-20 mb-6 drop-shadow-xl"
                    style={{ color: selected.color }}
                  >
                    {FlavonoidIconMapper[selected.name] && React.createElement(FlavonoidIconMapper[selected.name])}
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="clinical">{selected.formula}</Badge>
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-primary/30">Flavonoid Pillar</span>
                  </div>
                  <h3 className="newsreader-display text-4xl md:text-5xl text-brand-primary mb-2">{selected.name}</h3>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] mb-6" style={{ color: selected.color }}>{selected.role}</p>

                  <p className="text-lg text-brand-primary/70 leading-relaxed mb-8 italic">
                    &quot;{selected.description}&quot;
                  </p>

                  <div className="grid grid-cols-2 gap-6 w-full text-left border-t border-brand-primary/5 pt-8">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-secondary mb-2 block">Primary Benefit</span>
                      <p className="text-xs font-bold text-brand-primary leading-tight">{selected.benefits}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-secondary mb-2 block">
                        <Leaf size={10} className="inline mr-1" />Also Found In
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {selected.foundIn.map(s => (
                          <span key={s} className="text-[10px] font-bold px-2 py-0.5 bg-brand-primary/5 rounded border border-brand-primary/10 text-brand-primary/70">
                            {s}
                          </span>
                        ))}
                      </div>
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
