'use client';

import React, { useState } from 'react';
import { CANNABINOIDS } from '@/lib/data/cannabisData';
import { CannabinoidIconMapper } from '@/components/icons/CannabinoidIcons';
import { motion, AnimatePresence } from 'motion/react';
import { Card, Badge } from '@/components/UI';
import { Activity, Brain, Heart } from 'lucide-react';

export default function InteractiveCannabinoidMapper() {
  const [selected, setSelected] = useState(Object.values(CANNABINOIDS)[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Selection Grid */}
      <div className="lg:col-span-4 grid grid-cols-2 gap-4">
        {Object.values(CANNABINOIDS).map((c) => {
          const Icon = CannabinoidIconMapper[c.name];
          const isActive = selected.name === c.name;

          return (
            <motion.button
              key={c.name}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelected(c)}
              className={`relative p-6 rounded-[1.5rem] border transition-all duration-500 text-left overflow-hidden ${
                isActive 
                ? 'bg-brand-stone-100 border-brand-primary/20 shadow-xl' 
                : 'bg-white/50 border-brand-primary/5 hover:bg-brand-stone-50'
              }`}
            >
              {isActive && (
                <motion.div 
                  layoutId="active-ring-cann"
                  className="absolute -inset-1 rounded-[1.6rem] border-2 pointer-events-none"
                  style={{ borderColor: c.color }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <div 
                className="w-10 h-10 mb-4 transition-transform duration-500"
                style={{ color: c.color }}
              >
                {Icon && <Icon />}
              </div>
              <h4 className="text-xs font-black uppercase tracking-widest text-brand-primary/80 leading-tight">
                {c.name}
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
            <Card className="p-12 border-brand-primary/10 shadow-2xl relative overflow-hidden bg-white/40 backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none" style={{ color: selected.color }}>
                {CannabinoidIconMapper[selected.name] && React.createElement(CannabinoidIconMapper[selected.name])}
              </div>

              <div className="flex flex-wrap items-center gap-4 mb-8">
                <Badge variant="clinical" className="px-4 py-1">{selected.formula}</Badge>
                <Badge variant="neutral" className="px-4 py-1 text-[10px] uppercase tracking-widest font-black">Systemic Driver</Badge>
              </div>

              <h3 className="newsreader-display text-7xl text-brand-primary mb-2 leading-none">
                {selected.name}
              </h3>
              <p className="text-xs font-black uppercase tracking-[0.4em] text-brand-secondary mb-8">
                {selected.fullName}
              </p>

              <p className="text-2xl text-brand-primary/60 font-medium leading-relaxed italic mb-12 max-w-2xl">
                &quot;{selected.description}&quot;
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <h5 className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary mb-4">
                      <Brain size={14} /> Neurological Role
                    </h5>
                    <p className="text-lg font-bold text-brand-primary">{selected.role}</p>
                  </div>
                  <div>
                    <h5 className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary mb-4">
                      <Activity size={14} /> Reported Effects
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {selected.effects.map(effect => (
                        <span key={effect} className="px-3 py-1 bg-brand-primary/5 rounded-full text-xs font-bold text-brand-primary/70 border border-brand-primary/5">
                          {effect}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="p-6 rounded-2xl bg-brand-primary/5 border border-brand-primary/5">
                    <h5 className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-brand-secondary mb-4">
                      <Heart size={14} /> Therapeutic Index
                    </h5>
                    <p className="text-sm font-medium leading-relaxed text-brand-primary/70">
                      Interacts primarily with the <strong className="text-brand-primary">CB1</strong> and <strong className="text-brand-primary">CB2</strong> receptors 
                      to maintain homeostasis across the nervous and immune systems.
                    </p>
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
