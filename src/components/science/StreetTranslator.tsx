'use client';

import React, { useState } from 'react';
import { translateStreetTerm, ScienceMapping, STREET_TO_SCIENCE_MAP } from '@/lib/logic/streetToScience';
import { Card, Badge } from '@/components/UI';

export default function StreetTranslator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<ScienceMapping | null>(null);

  const handleTranslate = () => {
    const translation = translateStreetTerm(input);
    setResult(translation || null);
  };

  return (
    <Card className="max-w-2xl mx-auto border-brand-secondary/20 mt-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 p-4 opacity-5 text-6xl font-black rotate-12 text-brand-secondary">NAIJA</div>
      
      <h2 className="newsreader-display text-5xl text-brand-secondary mb-2 relative z-10">Street-to-Science</h2>
      <p className="clinical-label text-brand-primary/70 mb-8 relative z-10">The Truth Behind the Names</p>

      <div className="flex flex-col space-y-4 mb-8 relative z-10">
        <div className="flex space-x-4">
          <input 
            type="text" 
            list="street-terms"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search street term (e.g. Colorado, Loud...)"
            className="flex-1 p-4 bg-brand-primary/5 rounded-xl border border-brand-secondary/20 focus:ring-2 focus:ring-brand-secondary outline-none transition-all text-brand-primary placeholder:text-brand-primary/40 font-bold"
          />
          <datalist id="street-terms">
            {Object.keys(STREET_TO_SCIENCE_MAP).map(term => <option key={term} value={term} />)}
          </datalist>
          <button 
            onClick={handleTranslate}
            className="bg-brand-secondary hover:bg-brand-secondary/90 text-brand-stone-50 px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all shadow-lg hover:shadow-brand-secondary/20"
          >
            UNLEARN
          </button>
        </div>
      </div>

      {result && (
        <div className={`p-8 rounded-2xl border animate-in slide-in-from-right-8 duration-500 relative z-10 ${
          result.warningLevel === 'CRITICAL' 
            ? 'bg-red-950/30 border-red-500/50 text-red-100' 
            : 'bg-brand-emerald-900/10 border-brand-emerald-900/30 text-brand-primary'
        }`}>
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="newsreader-display text-5xl mb-2">{result.term}</h3>
              <p className="clinical-label opacity-70">{result.chemicalReality}</p>
            </div>
            <Badge variant={result.warningLevel === 'CRITICAL' ? 'warning' : 'clinical'}>
              {result.warningLevel === 'CRITICAL' ? 'URGENT CAUTION' : 'PLANT PROFILE'}
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="clinical-label mb-3 opacity-50">Botanical Reality</h4>
              <p className="text-sm font-medium leading-relaxed opacity-90">{result.description}</p>
            </div>
            <div>
              <h4 className="clinical-label mb-3 opacity-50">Local Dialect Mode</h4>
              <p className="text-lg font-bold italic leading-tight text-brand-secondary">&quot;{result.pidginSummary}&quot;</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-current/10">
            <h4 className="clinical-label mb-4 opacity-50">{result.warningLevel === 'CRITICAL' ? 'Possible emergency signs' : 'Commonly reported effects'}</h4>
            <div className="flex flex-wrap gap-2">
              {result.primaryRisks.map((risk, i) => (
                <span key={i} className="px-3 py-1 bg-current/10 rounded-lg text-xs font-bold">{risk}</span>
              ))}
            </div>
          </div>

          {result.warningLevel === 'CRITICAL' && (
            <div className="mt-8 p-4 bg-red-900/80 border border-red-500/50 rounded-xl text-red-100 font-bold tracking-widest text-sm text-center animate-pulse uppercase">
              ⚠️ UNKNOWN SYNTHETIC PRODUCT: SEEK URGENT HELP FOR SEVERE SYMPTOMS
            </div>
          )}
        </div>
      )}
    </Card>
  );
}
