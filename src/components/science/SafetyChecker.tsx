'use client';

import React, { useState } from 'react';
import { checkDrugInteractions, getCannabisInteractionWarning, InteractionResult } from '@/services/api/openfda';
import { Card } from '@/components/UI';

export default function SafetyChecker() {
  const [medication, setMedication] = useState('');
  const [result, setResult] = useState<InteractionResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    if (!medication) return;
    setLoading(true);
    const data = await checkDrugInteractions(medication);
    setResult(data);
    setLoading(false);
  };

  const generalWarnings = getCannabisInteractionWarning();

  return (
    <Card className="max-w-2xl mx-auto border-red-900/30 mt-8 bg-[#1a0f0f]">
      <h2 className="newsreader-display text-4xl text-red-500 mb-4 flex items-center">
        Prescription Safety Checker
      </h2>
      <p className="text-brand-primary/70 mb-8 font-medium">
        Check if your current pharmaceutical medications might interact with cannabinoids. Powered by OpenFDA.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input 
          type="text" 
          value={medication}
          onChange={(e) => setMedication(e.target.value)}
          placeholder="Enter medication name..."
          className="flex-1 p-4 bg-brand-primary/5 rounded-xl border border-red-500/20 focus:ring-2 focus:ring-red-500 outline-none transition-all text-brand-primary placeholder:text-brand-primary/30 font-bold"
        />
        <button 
          onClick={handleCheck}
          disabled={loading}
          className="bg-red-900/50 hover:bg-red-800 text-red-100 border border-red-500/30 px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-colors disabled:opacity-50 w-full sm:w-auto"
        >
          {loading ? 'Searching...' : 'Check'}
        </button>
      </div>

      {result && (
        <div className="space-y-6 animate-in fade-in zoom-in-95">
          <div className="p-6 bg-red-950/30 rounded-xl border border-red-900/50">
            <h3 className="font-bold text-red-400 mb-2">FDA Label Warnings for {result.drugName}:</h3>
            <p className="text-sm line-clamp-4 text-brand-primary/80 leading-relaxed">{result.warnings}</p>
          </div>

          <div className="p-6 bg-[#2a1a08] rounded-xl border border-[#5c3a18]">
            <h3 className="font-black text-[#d97706] mb-4 uppercase tracking-wider text-xs">Botanical Synergies & Risks</h3>
            <ul className="space-y-3">
              {generalWarnings.map((w, i) => (
                <li key={i} className="flex items-start text-sm font-medium text-brand-primary/90">
                  <span className="mr-3 text-[#d97706] mt-0.5">•</span> {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      
      {!result && !loading && (
        <div className="text-center py-8 text-brand-primary/30 italic text-sm font-medium">
          No data searched yet. Enter a medication to begin.
        </div>
      )}
    </Card>
  );
}

