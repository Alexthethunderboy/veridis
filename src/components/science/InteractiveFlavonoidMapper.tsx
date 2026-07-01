'use client';

import React, { useState } from 'react';
import { FLAVONOIDS } from '@/lib/data/cannabisData';
import { FlavonoidIconMapper } from '@/components/icons/FlavonoidIcons';
import { motion, AnimatePresence } from 'motion/react';
import { Card, Badge } from '@/components/UI';
import { ShieldAlert, Sparkles, Zap } from 'lucide-react';

export default function InteractiveFlavonoidMapper() {
  const [selected, setSelected] = useState(Object.values(FLAVONOIDS)[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Selection Grid */}
      <div className="lg:col-span-4 grid grid-cols-2 gap-4">
        {Object.values(FLAVONOIDS).map((f) => {
          const Icon = FlavonoidIconMapper[f.name];
          const isActive = selected.name === f.name;

          return (
            <motion.button
              key={f.name}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelected(f)}
              className={`relative p-6 rounded-[1.5rem] border transition-all duration-500 text-left overflow-hidden ${
                isActive 
                ? 'bg-brand-stone-100 border-brand-primary/20 shadow-xl' 
                : 'bg-white/50 border-brand-primary/5 hover:bg-brand-stone-50'
              }`}
            >
              {isActive && (
                <motion.div 
                  layoutId="active-ring-flav"
                  className="absolute -inset-1 rounded-[1.6rem] border-2 pointer-events-none"
                  style={{ borderColor: f.color }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <div 
                className="w-10 h-10 mb-4 transition-transform duration-500"
                style={{ color: f.color }}
              >
                {Icon && <Icon />}
              </div>
              <h4 className="text-xs font-black uppercase tracking-widest text-brand-primary/80 leading-tight">
                {f.name}
              </h4>
            </motion.button>
          );
        })}
      </div>

      {/* Detail Card */}
      <div className="lg:col-span-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Card className="p-6 md:p-12 border-brand-primary/10 shadow-2xl relative overflow-hidden bg-white/40 backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none" style={{ color: selected.color }}>
                {FlavonoidIconMapper[selected.name] && React.createElement(FlavonoidIconMapper[selected.name])}
              </div>

              <div className="flex flex-wrap items-center gap-4 mb-8">
                <Badge variant="clinical" className="px-4 py-1">{selected.formula}</Badge>
                <Badge variant="neutral" className="px-4 py-1 text-[10px] uppercase tracking-widest font-black">Flavonoid Pillar</Badge>
              </div>

              <h3 className="newsreader-display text-7xl text-brand-primary mb-6 leading-none">
                {selected.name}
              </h3>

              <p className="text-2xl text-brand-primary/60 font-medium leading-relaxed italic mb-12 max-w-2xl">
                &quot;{selected.description}&quot;
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <h5 className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary mb-4">
                      <Zap size={14} /> Biological Role
                    </h5>
                    <p className="text-lg font-bold text-brand-primary">{selected.role}</p>
                  </div>
                  <div>
                    <h5 className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary mb-4">
                      <ShieldAlert size={14} /> Primary Benefit
                    </h5>
                    <p className="text-lg font-bold text-brand-primary">{selected.benefits}</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h5 className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary mb-4">
                      <Sparkles size={14} /> Common Botanical Sources
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {selected.foundIn.map(source => (
                        <span key={source} className="px-3 py-1 bg-brand-primary/5 rounded-full text-xs font-bold text-brand-primary/70 border border-brand-primary/5">
                          {source}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
