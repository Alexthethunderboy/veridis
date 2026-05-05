'use client';

import React from 'react';
import InteractiveTerpeneMapper from '@/components/science/InteractiveTerpeneMapper';
import InteractiveFlavonoidMapper from '@/components/science/InteractiveFlavonoidMapper';
import InteractiveCannabinoidMapper from '@/components/science/InteractiveCannabinoidMapper';
import DosageCalculator from '@/components/science/DosageCalculator';
import SafetyChecker from '@/components/science/SafetyChecker';
import { Card, SectionHeader } from '@/components/UI';
import { motion } from 'motion/react';

export default function SciencePage() {
  return (
    <main className="min-h-screen pt-40 pb-40 px-8 max-w-7xl mx-auto">
      <SectionHeader 
        badge="Clinical Protocols"
        title="Botanical Science"
        subtitle="Evidence-based research for a safer, more effective medicinal approach. Referencing the CRISP Study on Sickle Cell and Nano-emulsified Bioavailability."
      />

      <div className="space-y-40 mt-20">
        {/* Pillar 1: Cannabinoids */}
        <section>
          <div className="mb-16">
            <h2 className="newsreader-display text-6xl text-brand-primary mb-6">Cannabinoid Intelligence</h2>
            <p className="text-xl text-brand-primary/40 font-medium max-w-3xl italic">
              The primary chemical compounds of the plant. Cannabinoids like THC and CBD interact with your body&apos;s 
              endocannabinoid system to regulate mood, pain, and sleep.
            </p>
          </div>
          <InteractiveCannabinoidMapper />
        </section>

        {/* Pillar 2: Terpenes */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="newsreader-display text-5xl text-brand-primary mb-8">Terpene Intelligence</h2>
              <p className="text-xl leading-relaxed text-brand-primary/60 mb-8 font-medium">
                If flavonoids are the plant&apos;s color and immune system, <strong className="text-brand-secondary">terpenes are the steering wheel</strong>. 
                They dictate exactly how a cannabinoid profile will affect your mind and body.
              </p>
              <Card className="bg-brand-secondary/5 border-brand-secondary/20 p-10">
                <h4 className="clinical-label text-brand-secondary mb-4">The Steering Effect</h4>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-2 shrink-0" />
                    <p className="text-sm font-bold text-brand-primary/80">
                      <span className="text-brand-secondary">The Brake:</span> Terpenes like Linalool or Myrcene can &quot;tame&quot; the heart-racing anxiety of high-THC strains.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-2 shrink-0" />
                    <p className="text-sm font-bold text-brand-primary/80">
                      <span className="text-brand-secondary">The Accelerator:</span> Terpenes like Limonene or Pinene can sharpen a high, making it more cerebral and focused.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
            <div className="lg:col-span-1">
              <InteractiveTerpeneMapper />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <Card className="p-10 border-brand-primary/10">
                <h4 className="clinical-label text-brand-primary/40 mb-6 uppercase tracking-widest">01. Biological Shield</h4>
                <p className="text-sm font-medium text-brand-primary/70 leading-relaxed italic italic">
                  Produced in the trichomes, terpenes act as the plant&apos;s defense system—repelling herbivores, protecting against disease, and attracting pollinators.
                </p>
             </Card>
             <Card className="p-10 border-brand-primary/10">
                <h4 className="clinical-label text-brand-primary/40 mb-6 uppercase tracking-widest">02. Volatility Control</h4>
                <p className="text-sm font-medium text-brand-primary/70 leading-relaxed italic italic">
                  Terpenes are highly volatile. That skunky scent when you open a jar is the &quot;medicine&quot; escaping into the air. Preservation is critical.
                </p>
             </Card>
             <Card className="p-10 bg-brand-primary border-transparent text-brand-stone-50">
                <h4 className="clinical-label text-brand-stone-50/40 mb-6 uppercase tracking-widest">03. Thermal Preservation</h4>
                <p className="text-sm font-bold leading-relaxed italic italic">
                  Standard lighters destroy delicate terpenes. Dry herb vaporizers at 160°C–190°C are the gold standard for experiencing true therapeutic benefits.
                </p>
             </Card>
          </div>
        </section>

        {/* Pillar 3: Flavonoids */}
        <section>
          <div className="mb-16">
            <h2 className="newsreader-display text-6xl text-brand-primary mb-6">Flavonoid Intelligence</h2>
            <p className="text-xl text-brand-primary/40 font-medium max-w-3xl italic">
              The &quot;hidden&quot; third pillar of cannabis chemistry. Beyond smell and high, flavonoids provide the color, 
              flavor, and deep-tissue therapeutic effects like the unique Cannflavins.
            </p>
          </div>
          <InteractiveFlavonoidMapper />
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="newsreader-display text-4xl text-brand-primary mb-8 border-b border-brand-primary/5 pb-4">Prescription Safety</h2>
            <SafetyChecker />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="newsreader-display text-4xl text-brand-primary mb-8 border-b border-brand-primary/5 pb-4">Precision Dosing</h2>
            <DosageCalculator />
          </motion.div>
        </section>
      </div>
    </main>
  );
}
