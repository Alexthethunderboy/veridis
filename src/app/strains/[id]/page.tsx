'use client';

import React, { useState, useEffect } from 'react';
import { notFound, useParams } from 'next/navigation';
import { fetchAllStrains, RichStrain } from '@/services/api/strains';
import { Card, Badge } from '@/components/UI';
import { Microscope, Wind, Droplets, Zap, ShieldCheck, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';
import { TerpeneIconMapper } from '@/components/icons/TerpeneIcons';
import { FlavonoidIconMapper } from '@/components/icons/FlavonoidIcons';
import StrainAura from '@/components/strains/StrainAura';
import Image from 'next/image';

export default function StrainDeepDive() {
  const params = useParams();
  const [strain, setStrain] = useState<RichStrain | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const all = await fetchAllStrains();
      const match = all.find(s => s.id === params.id);
      setStrain(match || null);
      setLoading(false);
    }
    loadData();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <Loader2 className="text-brand-secondary" size={40} />
        </motion.div>
        <p className="newsreader-display text-xl text-brand-primary/40 italic">Decoding Genetic Architecture...</p>
      </div>
    );
  }

  if (!strain) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-transparent p-8 md:p-24 pt-40">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="max-w-3xl">
            <Badge variant="clinical">{strain.type}</Badge>
            <h1 className="newsreader-display text-7xl md:text-9xl text-brand-primary mt-6 mb-6 leading-none">
              {strain.name}
            </h1>
            <p className="text-2xl text-brand-primary/60 font-medium leading-relaxed italic">
              &quot;{strain.description}&quot;
            </p>
          </div>
          
          {/* Leafly-style Shape Branding -> Aura Migration */}
          <div className="relative group w-64 h-64 rounded-full overflow-hidden border-4 border-brand-primary/10 shadow-2xl flex-shrink-0">
            {strain.image_url ? (
              <Image src={strain.image_url} alt={`${strain.name} strain`} fill sizes="256px" className="object-cover" />
            ) : (
              <StrainAura strain={strain} className="w-full h-full" />
            )}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-4xl font-black text-brand-stone-50 drop-shadow-lg">{strain.dominant}</span>
            </div>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-8 text-center opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
               <p className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-primary/60">Molecular Aura / {strain.dominant}</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
          {/* Column 1: Chemical Profile */}
          <section className="lg:col-span-2 space-y-12">
            <Card className="bg-brand-stone-100 border-brand-primary/10 p-12">
               <h2 className="newsreader-display text-4xl text-brand-primary mb-12 flex items-center gap-4">
                 <Microscope className="text-brand-secondary" /> Cannabinoid Profile
               </h2>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                 {strain.detailed_cannabinoids.map((can, i) => (
                    <div key={i} className="text-center p-6 bg-brand-primary/5 rounded-3xl border border-brand-primary/5">
                       <span className="clinical-label text-brand-primary/40 block mb-2">{can.name}</span>
                       <span className="text-4xl font-black font-mono text-brand-primary tracking-tighter">{can.value}</span>
                    </div>
                 ))}
               </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <Card className="border-brand-primary/10 p-10">
                  <h3 className="newsreader-display text-3xl text-brand-primary mb-6 flex items-center gap-4">
                    <Zap className="text-brand-secondary" /> Effects
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {strain.effects.map(e => <Badge key={e} variant="neutral">{e}</Badge>)}
                  </div>
               </Card>
               <Card className="border-brand-secondary/20 bg-brand-secondary/5 p-10">
                  <h3 className="newsreader-display text-3xl text-brand-secondary mb-6 flex items-center gap-4">
                    <ShieldCheck /> Medical Application
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {strain.medical.map(m => <Badge key={m} variant="clinical">{m}</Badge>)}
                  </div>
               </Card>
            </div>
          </section>

          {/* Column 2: Sensory Profile */}
          <aside className="space-y-8">
             <Card className="bg-brand-stone-100 border-brand-primary/10 p-10">
                <h3 className="clinical-label text-brand-secondary mb-8">Aromatics & Flavors</h3>
                <div className="space-y-8">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary/40 block mb-4 flex items-center gap-2">
                      <Wind size={14} /> Aroma Profile
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {strain.aromatics.map(a => <span key={a} className="px-3 py-1 bg-brand-primary/5 rounded-lg text-xs font-bold text-brand-primary">{a}</span>)}
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary/40 block mb-4 flex items-center gap-2">
                      <Droplets size={14} /> Taste Profile
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {strain.flavors.map(f => <span key={f} className="px-3 py-1 bg-brand-secondary/10 rounded-lg text-xs font-bold text-brand-secondary">{f}</span>)}
                    </div>
                  </div>
                </div>
             </Card>

             <Card className="border-brand-primary/10 p-10">
                <h3 className="clinical-label text-brand-primary mb-8">Flavonoid Intelligence</h3>
                <p className="text-xs text-brand-primary/50 font-medium mb-6 leading-relaxed italic italic">
                  The &quot;hidden&quot; third pillar. These compounds provide the vibrant pigmentation and deep anti-inflammatory benefits.
                </p>
                <div className="space-y-4">
                   {strain.flavonoids && Array.isArray(strain.flavonoids) && strain.flavonoids.length > 0 ? (
                     strain.flavonoids.map((f: { name: string; role: string; color: string }, i: number) => {
                       const Icon = FlavonoidIconMapper[f.name];
                       return (
                        <div key={i} className="flex items-center gap-4 p-4 bg-brand-primary/5 rounded-2xl border border-brand-primary/5 group/flav transition-all hover:bg-brand-primary/10">
                            <div 
                              className="w-10 h-10 transition-transform group-hover/flav:scale-110"
                              style={{ color: f.color }}
                            >
                              {Icon && <Icon />}
                            </div>
                            <div>
                               <p className="text-sm font-bold text-brand-primary leading-tight">{f.name}</p>
                               <p className="text-[10px] font-black uppercase tracking-widest text-brand-secondary">{f.role.split(' ')[0]}</p>
                            </div>
                        </div>
                       );
                     })
                   ) : (
                     <p className="text-xs font-bold text-brand-primary/20 italic">Scientific audit in progress...</p>
                   )}
                </div>
             </Card>
          </aside>
        </div>

        {/* Terpene Deep Dive Section */}
        <section className="mb-32">
           <div className="flex items-center justify-between mb-12">
             <h2 className="newsreader-display text-5xl text-brand-primary">Terpene Intelligence</h2>
             <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-primary/30 hidden md:block">Molecular Analysis v2.0</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {strain.terpenes.map((terp, i) => {
                const Icon = TerpeneIconMapper[terp.name];
                return (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 glass rounded-[2.5rem] border border-brand-primary/5 hover:border-brand-secondary/30 transition-all group relative overflow-hidden"
                  >
                    {/* Background Formula Decoration */}
                    <div className="absolute top-4 right-6 text-[10px] font-mono font-black text-brand-primary/5 select-none uppercase tracking-widest">
                      {terp.formula}
                    </div>

                    <div className="w-16 h-16 mb-8 text-brand-secondary transition-transform group-hover:scale-110 duration-500">
                       {Icon && <Icon />}
                    </div>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <h4 className="newsreader-display text-3xl text-brand-primary">{terp.name}</h4>
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: terp.color }}></div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-secondary block mb-1">Aromatic Notes</span>
                        <p className="text-sm font-bold text-brand-primary leading-tight">{terp.aroma}</p>
                      </div>
                      
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-secondary block mb-1">Boiling Point</span>
                        <p className="text-sm font-mono text-brand-primary/60">{terp.boilingPoint}</p>
                      </div>

                      <div className="pt-4 border-t border-brand-primary/5">
                        <p className="text-sm text-brand-primary/70 leading-relaxed font-medium italic">
                          &quot;{terp.description}&quot;
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
           </div>
        </section>
      </div>
    </main>
  );
}
