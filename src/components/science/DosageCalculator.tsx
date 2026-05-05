'use client';

import React, { useState } from 'react';
import { Card } from '@/components/UI';

export default function DosageCalculator() {
  const [weight, setWeight] = useState<number>(0);
  const [thcPct, setThcPct] = useState<number>(15);
  const [oilAmount, setOilAmount] = useState<number>(100);
  const [decarbDone, setDecarbDone] = useState<boolean>(true);

  // Simple dosage calculation logic
  // mg = weight (g) * (THC% / 100) * 1000 * 0.8 (efficiency factor)
  const calculateTotalMg = () => {
    if (!decarbDone) return 0;
    return weight * (thcPct / 100) * 1000 * 0.8;
  };

  const totalMg = calculateTotalMg();
  const mgPerMl = oilAmount > 0 ? (totalMg / oilAmount).toFixed(2) : 0;

  return (
    <Card className="max-w-2xl mx-auto border-brand-primary/10 mt-8">
      <h2 className="newsreader-display text-4xl text-brand-primary mb-4">Tincture Dosage Calculator</h2>
      <p className="text-brand-primary/70 mb-8 font-medium">
        Calculate the potency of your homemade medicinal oil. Remember the 240°F (115°C) for 40 minutes rule for activation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-brand-primary/80 mb-1">Flower Weight (grams)</label>
            <input 
              type="number" 
              value={weight} 
              onChange={(e) => setWeight(Number(e.target.value))}
              className="w-full p-3 bg-brand-primary/5 rounded-lg border border-brand-primary/10 focus:ring-2 focus:ring-brand-primary outline-none transition-all text-brand-primary placeholder:text-brand-primary/30"
              placeholder="e.g. 7"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-brand-primary/80 mb-1">Estimated THC %</label>
            <input 
              type="number" 
              value={thcPct} 
              onChange={(e) => setThcPct(Number(e.target.value))}
              className="w-full p-3 bg-brand-primary/5 rounded-lg border border-brand-primary/10 focus:ring-2 focus:ring-brand-primary outline-none transition-all text-brand-primary placeholder:text-brand-primary/30"
              placeholder="Nigerian Silk is approx 15%"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-brand-primary/80 mb-1">Carrier Oil (ml)</label>
            <input 
              type="number" 
              value={oilAmount} 
              onChange={(e) => setOilAmount(Number(e.target.value))}
              className="w-full p-3 bg-brand-primary/5 rounded-lg border border-brand-primary/10 focus:ring-2 focus:ring-brand-primary outline-none transition-all text-brand-primary placeholder:text-brand-primary/30"
              placeholder="e.g. 100"
            />
          </div>
          <div className="flex items-center space-x-3 h-full pt-6">
            <input 
              type="checkbox" 
              checked={decarbDone} 
              onChange={(e) => setDecarbDone(e.target.checked)}
              className="w-5 h-5 accent-brand-secondary"
            />
            <span className="text-sm font-bold text-brand-primary/80">Decarboxylated?</span>
          </div>
        </div>
      </div>

      <div className="mt-10 p-8 bg-brand-primary/5 rounded-2xl border border-brand-primary/10 text-center">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <span className="clinical-label text-brand-primary/50">Total Potency</span>
            <p className="font-mono text-4xl font-black text-brand-primary tracking-tighter mt-2">{totalMg.toFixed(0)} <span className="text-xl">mg</span></p>
          </div>
          <div>
            <span className="clinical-label text-brand-secondary">Concentration</span>
            <p className="font-mono text-4xl font-black text-brand-secondary tracking-tighter mt-2">{mgPerMl} <span className="text-xl">mg/ml</span></p>
          </div>
        </div>
        {!decarbDone && (
          <p className="mt-6 text-red-500 font-bold animate-pulse text-sm">
            Warning: Without decarboxylation, the medicine remains inactive!
          </p>
        )}
      </div>
    </Card>
  );
}

