'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { WORLD_COUNTRIES, WORLD_REGIONS } from '@/lib/data/world';

export default function WorldExplorer() {
  const [region, setRegion] = useState<(typeof WORLD_REGIONS)[number]>('All');
  const countries = useMemo(
    () => region === 'All' ? WORLD_COUNTRIES : WORLD_COUNTRIES.filter((country) => country.region === region),
    [region],
  );

  return (
    <>
      <div className="mb-8 flex max-w-full gap-2 overflow-x-auto pb-2" aria-label="Filter country profiles by region">
        {WORLD_REGIONS.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={region === item}
            onClick={() => setRegion(item)}
            className={`shrink-0 rounded-full border px-4 py-2 text-xs font-bold transition ${
              region === item
                ? 'border-brand-emerald-900 bg-brand-emerald-900 text-brand-stone-50'
                : 'border-brand-primary/10 text-brand-primary/45 hover:border-brand-primary/25 hover:text-brand-primary'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {countries.map((country, index) => (
          <Link
            key={country.slug}
            href={`/world/${country.slug}`}
            className="group relative min-h-[330px] overflow-hidden rounded-2xl border border-brand-primary/10 bg-brand-stone-100 p-6 transition hover:-translate-y-1 hover:border-brand-primary/25 sm:p-7"
          >
            <div className="absolute right-5 top-3 select-none font-serif text-[7rem] leading-none opacity-[.055]" style={{ color: country.accent }}>
              {country.code}
            </div>
            <div className="relative flex items-center justify-between">
              <div className="flex flex-wrap items-center gap-2">
                <span className="clinical-label" style={{ color: country.accent }}>{country.region}</span>
                <span className="rounded-full border border-brand-primary/10 px-2 py-1 text-[8px] font-bold uppercase tracking-wider text-brand-primary/35">
                  {country.depth === 'focus' ? 'Historical focus' : 'Deep profile'}
                </span>
              </div>
              <span className="newsreader-display text-2xl text-brand-primary/20">{String(index + 1).padStart(2, '0')}</span>
            </div>
            <h3 className="newsreader-display relative mt-12 text-4xl">{country.name}</h3>
            <p className="relative mt-3 line-clamp-3 text-sm leading-6 text-brand-primary/50">{country.deck}</p>
            <div className="relative mt-7 flex flex-wrap gap-2">
              {country.localNames.slice(0, 3).map((name) => (
                <span key={name} className="rounded-full border border-brand-primary/10 px-3 py-1 text-[9px] font-bold text-brand-primary/35">{name}</span>
              ))}
            </div>
            <div className="absolute inset-x-6 bottom-6 flex items-center justify-between border-t border-brand-primary/10 pt-4 text-xs font-bold sm:inset-x-7">
              <span className="flex items-center gap-2 text-brand-primary/35"><MapPin size={13} /> {country.timeline.length} milestones · {country.sources.length} sources</span>
              <span className="flex items-center gap-2 transition group-hover:translate-x-1" style={{ color: country.accent }}>Open profile <ArrowRight size={14} /></span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
