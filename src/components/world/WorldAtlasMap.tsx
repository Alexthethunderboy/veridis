import Link from 'next/link';
import Image from 'next/image';
import { WORLD_COUNTRIES } from '@/lib/data/world';

export default function WorldAtlasMap({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`relative isolate overflow-hidden rounded-[2rem] border border-brand-primary/10 bg-[radial-gradient(circle_at_52%_46%,rgba(98,198,139,.08),transparent_42%),#08150f] ${compact ? 'min-h-[360px]' : 'min-h-[520px]'}`}>
      <div className="absolute inset-0 opacity-30" aria-hidden="true" style={{ backgroundImage: 'linear-gradient(rgba(245,243,234,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(245,243,234,.045) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      <div className="absolute left-6 top-6 z-20 max-w-44">
        <p className="clinical-label text-brand-emerald-900">{WORLD_COUNTRIES.length} documented histories</p>
        {!compact && <p className="mt-2 text-xs leading-5 text-brand-primary/40">Country markers use representative latitude and longitude on an equirectangular map.</p>}
      </div>
      <div className="absolute left-1/2 top-1/2 aspect-[2/1] w-[94%] -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/world-map-equirectangular.png"
          alt=""
          fill
          sizes={compact ? '(min-width: 1024px) 50vw, 94vw' : '(min-width: 1024px) 58vw, 94vw'}
          className="object-contain opacity-70 brightness-125 contrast-125"
          aria-hidden="true"
        />
        <div className="absolute inset-0 border-y border-brand-primary/[.035]" aria-hidden="true" />
        <div className="absolute inset-x-0 top-1/2 border-t border-brand-primary/[.06]" aria-hidden="true" />
        {WORLD_COUNTRIES.map((country) => {
          const isDeep = country.depth !== 'focus';
          return (
            <Link
              key={country.slug}
              href={`/world/${country.slug}`}
              aria-label={`Explore cannabis history in ${country.name}`}
              className={`group absolute -translate-x-1/2 -translate-y-1/2 ${isDeep ? 'z-20' : 'z-10'}`}
              style={{ left: `${country.mapPosition.x}%`, top: `${country.mapPosition.y}%` }}
            >
              <span className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-md transition group-hover:opacity-80 group-focus-visible:opacity-80 ${isDeep ? 'h-8 w-8' : 'h-5 w-5'}`} style={{ backgroundColor: country.accent }} />
              <span
                className={`relative grid place-items-center rounded-full border-brand-stone-50 bg-brand-stone-100 font-black tracking-wider shadow-xl transition group-hover:scale-150 group-focus-visible:scale-150 ${
                  isDeep ? 'h-7 w-7 border-2 text-[8px]' : 'h-2.5 w-2.5 border text-[0px]'
                }`}
                style={{ color: country.accent, backgroundColor: isDeep ? undefined : country.accent }}
              >
                {isDeep ? country.code : ''}
              </span>
              <span className={`pointer-events-none absolute left-1/2 z-30 hidden -translate-x-1/2 whitespace-nowrap rounded-lg border border-brand-primary/10 bg-brand-stone-100 px-3 py-2 text-[10px] font-bold text-brand-primary shadow-xl group-hover:block group-focus-visible:block ${isDeep ? 'top-9' : 'top-5'}`}>
                {country.name} · {isDeep ? 'deep profile' : 'historical focus'}
              </span>
            </Link>
          );
        })}
      </div>
      <a href="https://commons.wikimedia.org/wiki/File:BlankMap-Equirectangular.svg" target="_blank" rel="noreferrer" className="absolute bottom-5 left-6 z-20 text-[8px] font-bold uppercase tracking-[.12em] text-brand-primary/20 hover:text-brand-primary/45">Natural Earth · CC0 map</a>
      <div className="absolute bottom-5 right-6 z-20 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[.13em] text-brand-primary/30">
        <span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-brand-emerald-900" /> Historical focus</span>
        <span className="flex items-center gap-1.5"><i className="grid h-5 w-5 place-items-center rounded-full bg-brand-stone-100 text-[7px] not-italic text-brand-emerald-900">NG</i> Deep profile</span>
      </div>
    </div>
  );
}
