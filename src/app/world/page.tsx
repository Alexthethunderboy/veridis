import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookMarked, GitCompareArrows, Globe2, Languages, Map, Route, Scale, Sparkles } from 'lucide-react';
import WorldAtlasMap from '@/components/world/WorldAtlasMap';
import WorldExplorer from '@/components/world/WorldExplorer';
import { WORLD_COUNTRIES, WORLD_REGIONS } from '@/lib/data/world';

export const metadata: Metadata = {
  title: 'Cannabis Around the World | Efifya',
  description: `Explore cannabis histories, cultures, local knowledge and evolving policy across ${WORLD_COUNTRIES.length} countries.`,
};

const threads = [
  {
    icon: Route,
    label: 'Movement',
    title: 'Plants, words and practices travelled together',
    body: 'Follow ganja from South Asia into the Caribbean, cannabis knowledge across Africa, and hashish routes linking the Rif with European markets.',
    links: ['india', 'jamaica', 'morocco', 'netherlands'],
  },
  {
    icon: Scale,
    label: 'Power',
    title: 'Prohibition was built across borders',
    body: 'Colonial statutes, international treaties and racialized enforcement travelled too. Country pages show how those systems were translated locally.',
    links: ['nigeria', 'south-africa', 'united-states'],
  },
  {
    icon: Sparkles,
    label: 'Reform',
    title: 'Regulation is not one universal model',
    body: 'Compare Uruguay’s registered pathways, Canada’s federal framework, Dutch toleration and Jamaica’s sacramental recognition without flattening their differences.',
    links: ['uruguay', 'canada', 'netherlands', 'jamaica'],
  },
];

const timeline = [
  { era: 'Ancient', title: 'Material and ritual evidence', body: 'Fibre, seed, residue and textual evidence reveal several relationships with cannabis—not one simple origin story.', countries: ['China', 'India'] },
  { era: '1500s–1800s', title: 'African and Atlantic movement', body: 'Farmers, healers, sailors, enslaved people and migrants moved plant knowledge through trade and empire.', countries: ['South Africa', 'Nigeria', 'Jamaica'] },
  { era: '1900s', title: 'The century of prohibition', body: 'Law increasingly classified cannabis through colonial, racial and international drug-control systems.', countries: ['Morocco', 'United States', 'Canada'] },
  { era: '2000s–present', title: 'Many routes out of prohibition', body: 'Courts, patients, growers, spiritual communities and reform movements produced sharply different policy models.', countries: ['Uruguay', 'Canada', 'South Africa'] },
];

export default function WorldPage() {
  const milestones = WORLD_COUNTRIES.reduce((total, country) => total + country.timeline.length, 0);
  const policyReviewedCountries = WORLD_COUNTRIES.filter((country) => country.policy.length === 4);

  return (
    <main className="page-shell overflow-hidden">
      <header className="grid gap-8 lg:grid-cols-[minmax(0,.8fr)_minmax(520px,1.2fr)] lg:items-center">
        <div className="relative z-10 py-4 lg:py-10">
          <p className="clinical-label flex items-center gap-2 text-brand-emerald-900"><Globe2 size={14} /> Cannabis around the world</p>
          <h1 className="newsreader-display mt-6 text-6xl leading-[.86] sm:text-8xl">One plant.<br /><span className="text-brand-emerald-900">Many histories.</span></h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-brand-primary/60 sm:text-lg">Explore how communities cultivated, named, healed with, celebrated, regulated and resisted around cannabis. Nigeria is our home lens—not the limit of the story.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="#countries" className="inline-flex items-center gap-2 rounded-xl bg-brand-emerald-900 px-6 py-4 text-sm font-bold text-brand-stone-50">Explore {WORLD_COUNTRIES.length} countries <ArrowRight size={16} /></Link>
            <Link href="#timeline" className="inline-flex items-center gap-2 rounded-xl border border-brand-primary/15 px-6 py-4 text-sm font-bold text-brand-primary/70">Open global timeline</Link>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-brand-primary/10 pt-6">
            <Stat value={String(WORLD_COUNTRIES.length)} label="Country profiles" />
            <Stat value={String(milestones)} label="Documented milestones" />
            <Stat value={String(WORLD_REGIONS.length - 1)} label="World regions" />
          </dl>
        </div>
        <WorldAtlasMap />
      </header>

      <section className="mt-24 border-y border-brand-primary/10 py-20" aria-labelledby="principle-title">
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
          <div>
            <p className="clinical-label text-brand-secondary">Editorial principle</p>
            <h2 id="principle-title" className="newsreader-display mt-4 text-4xl sm:text-6xl">The law is context.<br />It is not the whole culture.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Principle icon={Languages} title="Use local vocabulary" body="Bhang, dagga, ganja, kif and igbo carry histories that the word cannabis alone cannot hold." />
            <Principle icon={BookMarked} title="Name the evidence" body="Archaeology, oral history, community knowledge, statutes and clinical studies answer different questions." />
            <Principle icon={Map} title="Avoid national flattening" body="Regions, peoples and municipalities can have different practices even when they share one flag." />
            <Principle icon={Scale} title="Interrogate prohibition" body="Government records document policy, but communities explain what enforcement, stigma and reform meant in lived experience." />
          </div>
        </div>
      </section>

      <section id="countries" className="scroll-mt-8 pt-24" aria-labelledby="countries-title">
        <div className="mb-10 grid gap-5 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="clinical-label text-brand-emerald-900">Launch collection</p>
            <h2 id="countries-title" className="newsreader-display mt-3 text-4xl sm:text-6xl">{WORLD_COUNTRIES.length} country histories</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-brand-primary/50 lg:justify-self-end">The ten deep profiles have fuller source and policy review. Historical-focus profiles widen the atlas with country-specific timelines, themes and reading paths while clearly marking where local archives and legal review should go deeper.</p>
        </div>
        <WorldExplorer />
      </section>

      <section className="mt-28" aria-labelledby="threads-title">
        <div className="mb-9">
          <p className="clinical-label text-brand-secondary">Transnational threads</p>
          <h2 id="threads-title" className="newsreader-display mt-3 text-4xl sm:text-6xl">Country borders cannot contain the story</h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {threads.map(({ icon: Icon, label, title, body, links }) => (
            <article key={title} className="rounded-2xl border border-brand-primary/10 bg-brand-stone-100 p-7">
              <div className="flex items-center justify-between"><Icon className="text-brand-secondary" /><span className="clinical-label text-brand-primary/25">{label}</span></div>
              <h3 className="newsreader-display mt-10 text-3xl">{title}</h3>
              <p className="mt-3 min-h-24 text-sm leading-7 text-brand-primary/50">{body}</p>
              <div className="mt-6 flex flex-wrap gap-2 border-t border-brand-primary/10 pt-5">
                {links.map((slug) => {
                  const country = WORLD_COUNTRIES.find((item) => item.slug === slug);
                  return country ? <Link key={slug} href={`/world/${slug}`} className="rounded-full border border-brand-primary/10 px-3 py-1.5 text-[10px] font-bold text-brand-primary/45 hover:text-brand-primary">{country.name}</Link> : null;
                })}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="timeline" className="mt-28 scroll-mt-8 rounded-[2rem] border border-brand-primary/10 bg-brand-stone-100 p-6 sm:p-10 lg:p-12" aria-labelledby="timeline-title">
        <div className="grid gap-8 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <p className="clinical-label text-brand-emerald-900">Global timeline</p>
            <h2 id="timeline-title" className="newsreader-display mt-4 text-4xl sm:text-5xl">History moves in overlapping waves</h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-brand-primary/50">Dates anchor documented change. They do not imply that one era ended neatly when another began.</p>
          </div>
          <ol className="relative space-y-3 before:absolute before:bottom-5 before:left-[18px] before:top-5 before:w-px before:bg-brand-primary/10">
            {timeline.map((item) => (
              <li key={item.era} className="relative grid grid-cols-[38px_1fr] gap-4">
                <span className="relative z-10 mt-5 h-3 w-3 justify-self-center rounded-full border-2 border-brand-stone-100 bg-brand-secondary" />
                <div className="rounded-xl border border-brand-primary/10 bg-brand-primary/[.018] p-5">
                  <p className="clinical-label text-brand-secondary">{item.era}</p>
                  <h3 className="mt-2 font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-brand-primary/50">{item.body}</p>
                  <p className="mt-3 text-[10px] font-bold text-brand-primary/25">{item.countries.join(' · ')}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mt-28" aria-labelledby="compare-title">
        <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div><p className="clinical-label text-brand-secondary">Policy comparison</p><h2 id="compare-title" className="newsreader-display mt-3 text-4xl sm:text-5xl">More precise than legal or illegal</h2></div>
          <div className="flex items-center gap-2 text-xs font-bold text-brand-primary/35"><GitCompareArrows size={15} /> Source review: 19 July 2026</div>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-brand-primary/10">
          <table className="w-full min-w-[860px] border-collapse text-left">
            <thead className="bg-brand-primary/[.035] text-[10px] font-bold uppercase tracking-[.14em] text-brand-primary/35">
              <tr><th className="p-4">Country</th><th className="p-4">Adult use</th><th className="p-4">Home cultivation</th><th className="p-4">Medical access</th><th className="p-4">Hemp & industry</th></tr>
            </thead>
            <tbody>
              {policyReviewedCountries.map((country) => (
                <tr key={country.slug} className="border-t border-brand-primary/10 bg-brand-stone-100 hover:bg-brand-primary/[.025]">
                  <th className="p-4"><Link href={`/world/${country.slug}`} className="font-bold hover:text-brand-emerald-900">{country.name}</Link></th>
                  {country.policy.map((facet) => <td key={facet.label} className="p-4"><PolicyStatus status={facet.status} /></td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs leading-5 text-brand-primary/35">This matrix contains only the {policyReviewedCountries.length} profiles whose four policy fields have received primary-source review. It is orientation, not legal advice; historical-focus pages do not guess at current law.</p>
      </section>

      <section className="mt-28 overflow-hidden rounded-[2rem] border border-brand-emerald-900/20 bg-[radial-gradient(circle_at_80%_0%,rgba(98,198,139,.16),transparent_30%),#0c1913] p-7 sm:p-10 lg:p-14">
        <div className="max-w-3xl"><p className="clinical-label text-brand-emerald-900">Start from home</p><h2 className="newsreader-display mt-4 text-4xl sm:text-6xl">Nigeria belongs inside the world story—not outside it.</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-brand-primary/55">Open the Nigerian profile to follow African plant movement, the language of “Indian hemp,” cultivation under prohibition and the knowledge questions a locally governed cannabis future would need to answer.</p><Link href="/world/nigeria" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-emerald-900 px-5 py-3 text-sm font-bold text-brand-stone-50">Explore Nigeria <ArrowRight size={15} /></Link></div>
      </section>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return <div><dd className="newsreader-display text-3xl">{value}</dd><dt className="mt-1 text-[9px] font-bold uppercase tracking-wider text-brand-primary/35">{label}</dt></div>;
}

function Principle({ icon: Icon, title, body }: { icon: typeof Languages; title: string; body: string }) {
  return <article className="rounded-2xl border border-brand-primary/10 bg-brand-stone-100 p-6"><Icon size={20} className="text-brand-emerald-900" /><h3 className="mt-7 font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-brand-primary/45">{body}</p></article>;
}

function PolicyStatus({ status }: { status: string }) {
  const color = status === 'Regulated' || status === 'Licensed' ? 'text-brand-emerald-900 border-brand-emerald-900/20 bg-brand-emerald-900/[.06]' : status === 'Prohibited' ? 'text-brand-primary/40 border-brand-primary/10' : 'text-brand-secondary border-brand-secondary/20 bg-brand-secondary/[.05]';
  return <span className={`inline-flex rounded-full border px-3 py-1 text-[9px] font-bold uppercase tracking-wider ${color}`}>{status}</span>;
}
