import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, BookOpen, ExternalLink, FileSearch, Globe2, Landmark, Layers3, MapPin, MessageCircleQuestion, Route, Scale, Sprout, UsersRound, Waypoints } from 'lucide-react';
import { getConnectedCountries, getWorldCountry, WORLD_COUNTRIES } from '@/lib/data/world';

type Props = { params: Promise<{ country: string }> };

export function generateStaticParams() {
  return WORLD_COUNTRIES.map((country) => ({ country: country.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country: slug } = await params;
  const country = getWorldCountry(slug);
  return country ? {
    title: `${country.name}: Cannabis History & Culture | Efifya`,
    description: country.deck,
  } : {};
}

export default async function CountryPage({ params }: Props) {
  const { country: slug } = await params;
  const country = getWorldCountry(slug);
  if (!country) notFound();
  const connected = getConnectedCountries(country);
  const hasPolicyReview = country.policy.length > 0;
  const paragraphCount = country.narrativeChapters?.reduce((total, chapter) => total + chapter.paragraphs.length, 0) ?? 0;

  return (
    <main className="page-shell">
      <Link href="/world" className="mb-7 inline-flex items-center gap-2 text-xs font-bold text-brand-primary/45 hover:text-brand-primary"><ArrowLeft size={14} /> World atlas</Link>

      <header className="relative isolate overflow-hidden rounded-[2rem] border border-brand-primary/10 bg-brand-stone-100 px-6 py-10 sm:px-10 lg:px-14 lg:py-16">
        <div className="absolute -right-8 -top-16 select-none font-serif text-[18rem] leading-none opacity-[.045]" style={{ color: country.accent }}>{country.code}</div>
        <div className="absolute right-[8%] top-[18%] h-56 w-56 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: country.accent }} />
        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <p className="clinical-label flex items-center gap-2" style={{ color: country.accent }}><Globe2 size={14} /> {country.region} · {country.depth === 'focus' ? 'Historical focus' : 'Deep profile'}</p>
            <h1 className="newsreader-display mt-5 text-6xl leading-[.85] sm:text-8xl">{country.name}</h1>
            <p className="newsreader-display mt-5 max-w-3xl text-2xl leading-tight text-brand-primary/70 sm:text-3xl">{country.headline}</p>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-brand-primary/50">{country.deck}</p>
          </div>
          <div className="rounded-2xl border border-brand-primary/10 bg-brand-stone-50/55 p-6 backdrop-blur">
            <p className="clinical-label text-brand-primary/30">Names you may encounter</p>
            <div className="mt-4 flex flex-wrap gap-2">{country.localNames.map((name) => <span key={name} className="rounded-full border border-brand-primary/10 px-3 py-1.5 text-xs font-bold" style={{ color: country.accent }}>{name}</span>)}</div>
            <div className="mt-7 border-t border-brand-primary/10 pt-5">
              <p className="text-xs font-bold text-brand-primary/40">Editorial lens</p>
              <p className="mt-2 text-sm leading-6 text-brand-primary/55">{country.editorialLens}</p>
            </div>
            <dl className="mt-6 grid grid-cols-4 gap-3 border-t border-brand-primary/10 pt-5">
              <DossierStat value={country.timeline.length} label="Milestones" />
              <DossierStat value={country.themes.length} label="Study lenses" />
              <DossierStat value={paragraphCount} label="Reader paragraphs" />
              <DossierStat value={country.sources.length} label="Sources" />
            </dl>
          </div>
        </div>
      </header>

      <div className="mt-10 grid gap-10 xl:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="hidden xl:block">
          <nav aria-label={`${country.name} profile contents`} className="sticky top-8 rounded-2xl border border-brand-primary/10 bg-brand-stone-100 p-5">
            <p className="clinical-label text-brand-primary/30">On this page</p>
            <div className="mt-4 space-y-1">
              {[
                ['Orientation', '#orientation'],
                ['Long-form reader', '#reader'],
                ['Timeline', '#timeline'],
                ['Living histories', '#themes'],
                ['Evidence guide', '#evidence'],
                ...(hasPolicyReview ? [['Policy', '#policy']] : []),
                ['Places', '#places'],
                ['Questions', '#questions'],
                ['Sources', '#sources'],
              ].map(([label, href]) => <a key={href} href={href} className="block rounded-lg px-3 py-2 text-xs font-bold text-brand-primary/45 hover:bg-brand-primary/5 hover:text-brand-primary">{label}</a>)}
            </div>
          </nav>
        </aside>

        <div className="min-w-0">
          <section id="orientation" className="scroll-mt-8 grid gap-4 lg:grid-cols-[1.15fr_.85fr]" aria-labelledby="orientation-title">
            <article className="rounded-2xl border border-brand-primary/10 bg-brand-stone-100 p-7 sm:p-9">
              <p className="clinical-label" style={{ color: country.accent }}>60-second orientation</p>
              <h2 id="orientation-title" className="newsreader-display mt-4 text-4xl">Begin with the whole relationship</h2>
              <p className="mt-5 text-base leading-8 text-brand-primary/60">{country.orientation}</p>
            </article>
            <article className="rounded-2xl border border-brand-emerald-900/15 bg-brand-emerald-900/[.045] p-7 sm:p-9">
              <Sprout className="text-brand-emerald-900" />
              <p className="clinical-label mt-8 text-brand-emerald-900">Learning outcomes</p>
              <p className="mt-4 text-sm leading-7 text-brand-primary/55">By the end of this dossier, you should be able to:</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-brand-primary/55">
                <li className="flex gap-3"><span className="font-bold text-brand-emerald-900">01</span> Trace major transitions without projecting modern borders backward.</li>
                <li className="flex gap-3"><span className="font-bold text-brand-emerald-900">02</span> Distinguish fibre, seed, food, flower, resin, medicine and ritual evidence.</li>
                <li className="flex gap-3"><span className="font-bold text-brand-emerald-900">03</span> Connect local practice with migration, trade, empire and regional exchange.</li>
                <li className="flex gap-3"><span className="font-bold text-brand-emerald-900">04</span> Evaluate what each source can establish—and what it cannot.</li>
              </ul>
            </article>
          </section>

          {country.narrativeChapters && (
            <section id="reader" className="mt-24 scroll-mt-8" aria-labelledby="reader-title">
              <div className="rounded-[2rem] border border-brand-primary/10 bg-brand-stone-100 px-6 py-8 sm:px-9 sm:py-10">
                <div className="grid gap-6 border-b border-brand-primary/10 pb-10 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
                  <div>
                    <p className="clinical-label text-brand-secondary">Long-form country reader</p>
                    <h2 id="reader-title" className="newsreader-display mt-3 text-4xl sm:text-6xl">{country.name}, in depth</h2>
                  </div>
                  <p className="max-w-2xl text-sm leading-7 text-brand-primary/50 lg:justify-self-end">Ten connected chapters turn the evidence into a readable narrative. Country-specific milestones lead; regional interpretation is used to explain movement and context, never to invent a local fact.</p>
                </div>
                <div>
                  {country.narrativeChapters.map((chapter, index) => (
                    <article key={chapter.title} className="grid gap-7 border-b border-brand-primary/10 py-12 last:border-0 last:pb-2 lg:grid-cols-[.38fr_.62fr] lg:gap-12">
                      <div>
                        <span className="newsreader-display text-6xl leading-none text-brand-primary/10">{String(index + 1).padStart(2, '0')}</span>
                        <p className="clinical-label mt-5" style={{ color: country.accent }}>{chapter.eyebrow}</p>
                        <h3 className="newsreader-display mt-3 text-3xl leading-tight sm:text-4xl">{chapter.title}</h3>
                      </div>
                      <div className="space-y-6">
                        {chapter.paragraphs.map((paragraph, paragraphIndex) => (
                          <p
                            key={`${chapter.title}-${paragraphIndex}`}
                            className={`text-base leading-8 text-brand-primary/60 sm:text-[1.05rem] sm:leading-9 ${paragraphIndex === 0 ? 'first-letter:mr-1 first-letter:font-serif first-letter:text-5xl first-letter:leading-[.8] first-letter:text-brand-emerald-900' : ''}`}
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          )}

          <section id="timeline" className="mt-24 scroll-mt-8" aria-labelledby="timeline-title">
            <div className="mb-8"><p className="clinical-label text-brand-secondary">Evidence-linked timeline</p><h2 id="timeline-title" className="newsreader-display mt-3 text-4xl sm:text-5xl">How the relationship changed</h2></div>
            <ol className="relative space-y-4 before:absolute before:bottom-10 before:left-[22px] before:top-10 before:w-px before:bg-brand-primary/10 sm:before:left-[78px]">
              {country.timeline.map((item) => {
                const source = item.sourceIndex !== undefined ? country.sources[item.sourceIndex] : undefined;
                return (
                  <li key={`${item.date}-${item.title}`} className="relative grid grid-cols-[45px_1fr] gap-4 sm:grid-cols-[155px_1fr]">
                    <div className="relative z-10 flex items-start gap-3 pt-5 sm:justify-end">
                      <span className="hidden pt-0.5 text-right text-[10px] font-bold uppercase tracking-wider text-brand-primary/35 sm:block">{item.date}</span>
                      <span className="mt-0.5 h-3 w-3 shrink-0 rounded-full border-2 border-brand-stone-50" style={{ backgroundColor: country.accent }} />
                    </div>
                    <article className="rounded-2xl border border-brand-primary/10 bg-brand-stone-100 p-5 sm:p-6">
                      <p className="text-[10px] font-bold uppercase tracking-wider sm:hidden" style={{ color: country.accent }}>{item.date}</p>
                      <h3 className="newsreader-display text-2xl">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-brand-primary/50">{item.body}</p>
                      {source && <a href={source.href} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold text-brand-primary/35 hover:text-brand-secondary">Source: {source.publisher} <ExternalLink size={11} /></a>}
                    </article>
                  </li>
                );
              })}
            </ol>
          </section>

          <section id="themes" className="mt-24 scroll-mt-8" aria-labelledby="themes-title">
            <div className="mb-8"><p className="clinical-label" style={{ color: country.accent }}>Living histories</p><h2 id="themes-title" className="newsreader-display mt-3 text-4xl sm:text-5xl">Beyond a legal timeline</h2></div>
            <div className={`grid gap-4 ${country.themes.length > 2 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'}`}>
              {country.themes.map((theme, index) => (
                <article key={theme.title} className="flex min-h-[330px] flex-col rounded-2xl border border-brand-primary/10 bg-brand-stone-100 p-6">
                  <div className="flex items-center justify-between"><span className="clinical-label" style={{ color: country.accent }}>{theme.eyebrow}</span><span className="newsreader-display text-3xl text-brand-primary/15">0{index + 1}</span></div>
                  <h3 className="newsreader-display mt-14 text-3xl">{theme.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-brand-primary/50">{theme.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="evidence" className="mt-24 scroll-mt-8" aria-labelledby="evidence-title">
            <div className="mb-8 grid gap-4 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="clinical-label text-brand-emerald-900">Evidence guide</p>
                <h2 id="evidence-title" className="newsreader-display mt-3 text-4xl sm:text-5xl">How to investigate {country.name}</h2>
              </div>
              <p className="text-sm leading-7 text-brand-primary/45 lg:justify-self-end">No single evidence type can establish origin, prevalence, cultural meaning, therapeutic value and legal status at once.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <EvidenceCard
                icon={Layers3}
                label="Material evidence"
                title="Plants, objects and landscapes"
                body={`Archaeobotany, pollen, residues, fibre, tools, containers and cultivation landscapes can establish material presence in ${country.name}. They rarely identify exact experience, intention or modern chemical composition on their own.`}
              />
              <EvidenceCard
                icon={FileSearch}
                label="Written archive"
                title="Medicine, agriculture, media and law"
                body={`Pharmacopoeias, crop records, newspapers, court files and statutes can date institutional change. In ${country.name}, ask who wrote the record, for what purpose, and whose knowledge was translated or excluded.`}
              />
              <EvidenceCard
                icon={Waypoints}
                label="Language and routes"
                title={country.localNames.join(' · ')}
                body="Vocabulary, recipes, songs, shipping, labor and migration can reveal connected histories. Similar words can suggest movement, but linguistic resemblance alone does not prove one route or point of origin."
              />
              <EvidenceCard
                icon={UsersRound}
                label="Living knowledge"
                title="Community experience is evidence"
                body="Growers, patients, healers, families, artists and spiritual communities can explain practice and meaning that official records omit. Participation, consent, attribution and benefit-sharing determine whether that research is ethical."
              />
            </div>
            <div className="mt-4 rounded-2xl border border-brand-secondary/15 bg-brand-secondary/[.04] p-6">
              <p className="clinical-label text-brand-secondary">Interpretive rule</p>
              <p className="mt-3 text-sm leading-7 text-brand-primary/55">A source describing seizure, arrest or eradication measures enforcement activity—not the size of a community, the value of a practice or the prevalence of use. A clinical trial evaluates a defined intervention—not every cultivar, preparation or lived experience.</p>
            </div>
          </section>

          {hasPolicyReview ? <section id="policy" className="mt-24 scroll-mt-8" aria-labelledby="policy-title">
            <div className="mb-8 grid gap-4 lg:grid-cols-2 lg:items-end">
              <div><p className="clinical-label text-brand-secondary">Policy snapshot</p><h2 id="policy-title" className="newsreader-display mt-3 text-4xl sm:text-5xl">Four separate questions</h2></div>
              <p className="text-xs leading-6 text-brand-primary/40 lg:justify-self-end">Descriptive legal context—not moral judgment, endorsement of prohibition or individualized legal advice.</p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-brand-primary/10">
              {country.policy.map((facet) => (
                <article key={facet.label} className="grid gap-4 border-b border-brand-primary/10 bg-brand-stone-100 p-6 last:border-0 sm:grid-cols-[190px_120px_1fr] sm:items-center">
                  <h3 className="font-bold">{facet.label}</h3>
                  <span className={`w-fit rounded-full border px-3 py-1 text-[9px] font-bold uppercase tracking-wider ${policyColor(facet.status)}`}>{facet.status}</span>
                  <p className="text-sm leading-6 text-brand-primary/50">{facet.detail}</p>
                </article>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-brand-secondary/15 bg-brand-secondary/[.04] p-5"><p className="text-sm leading-7 text-brand-primary/55">{country.policySummary}</p></div>
          </section> : (
            <section className="mt-24 rounded-2xl border border-brand-primary/10 bg-brand-stone-100 p-7 sm:p-9" aria-labelledby="policy-review-title">
              <p className="clinical-label text-brand-secondary">Research boundary</p>
              <h2 id="policy-review-title" className="newsreader-display mt-3 text-3xl sm:text-4xl">History first; current law requires its own review</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-brand-primary/50">{country.policySummary} This keeps a changing legal question from being presented as a timeless cultural fact.</p>
            </section>
          )}

          <section id="places" className="mt-24 scroll-mt-8 grid gap-4 lg:grid-cols-[.8fr_1.2fr]" aria-labelledby="places-title">
            <article className="rounded-2xl border border-brand-primary/10 bg-brand-stone-100 p-7 sm:p-9">
              <MapPin style={{ color: country.accent }} />
              <p className="clinical-label mt-8 text-brand-primary/30">Places to keep visible</p>
              <h2 id="places-title" className="newsreader-display mt-3 text-3xl">A country is not one culture</h2>
              <p className="mt-3 text-sm leading-7 text-brand-primary/50">These are starting points for regional reporting and community review—not a complete cultural map.</p>
            </article>
            <div className="grid gap-3 sm:grid-cols-2">
              {country.places.map((place, index) => <div key={place} className="flex min-h-32 items-end rounded-2xl border border-brand-primary/10 bg-[linear-gradient(145deg,rgba(20,36,28,.96),rgba(12,25,19,.96))] p-6"><span className="mr-4 newsreader-display text-3xl opacity-30" style={{ color: country.accent }}>0{index + 1}</span><p className="font-bold">{place}</p></div>)}
            </div>
          </section>

          <section id="questions" className="mt-24 scroll-mt-8 rounded-[2rem] border border-brand-primary/10 bg-brand-stone-100 p-7 sm:p-10" aria-labelledby="questions-title">
            <div className="grid gap-8 lg:grid-cols-[.65fr_1.35fr]">
              <div><MessageCircleQuestion style={{ color: country.accent }} /><p className="clinical-label mt-8 text-brand-primary/30">Community research agenda</p><h2 id="questions-title" className="newsreader-display mt-3 text-4xl">Questions this page should keep asking</h2></div>
              <ol className="space-y-3">
                {country.fieldQuestions.map((question, index) => <li key={question} className="grid grid-cols-[40px_1fr] gap-3 rounded-xl border border-brand-primary/10 p-5"><span className="newsreader-display text-2xl" style={{ color: country.accent }}>0{index + 1}</span><p className="text-sm font-bold leading-6 text-brand-primary/60">{question}</p></li>)}
              </ol>
            </div>
          </section>

          <section id="sources" className="mt-24 scroll-mt-8" aria-labelledby="sources-title">
            <div className="mb-8"><p className="clinical-label text-brand-emerald-900">Source desk</p><h2 id="sources-title" className="newsreader-display mt-3 text-4xl sm:text-5xl">Read the evidence and its limits</h2></div>
            <div className="overflow-hidden rounded-2xl border border-brand-primary/10">
              {country.sources.map((source) => (
                <a key={source.title} href={source.href} target="_blank" rel="noreferrer" className="group grid gap-4 border-b border-brand-primary/10 bg-brand-stone-100 p-6 last:border-0 hover:bg-brand-primary/[.025] sm:grid-cols-[minmax(0,1fr)_150px] sm:items-center">
                  <div>
                    <div className="mb-3 flex flex-wrap gap-2"><Pill>{source.type}</Pill><Pill>{source.year}</Pill></div>
                    <h3 className="font-bold group-hover:text-brand-emerald-900">{source.title}</h3>
                    <p className="mt-1 text-xs font-bold text-brand-primary/30">{source.publisher}</p>
                    <p className="mt-3 text-xs leading-6 text-brand-primary/45"><strong>Known limit:</strong> {source.note}</p>
                  </div>
                  <span className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-primary/10 px-4 py-3 text-xs font-bold text-brand-primary/55">Open source <ExternalLink size={13} /></span>
                </a>
              ))}
            </div>
          </section>

          <section className="mt-24 border-t border-brand-primary/10 pt-12" aria-labelledby="continue-title">
            <div className="mb-7 flex items-center justify-between gap-4"><div><p className="clinical-label text-brand-secondary">Continue the journey</p><h2 id="continue-title" className="newsreader-display mt-3 text-4xl">Connected histories</h2></div><Route className="text-brand-primary/20" size={32} /></div>
            <div className="grid gap-4 md:grid-cols-3">
              {connected.map((item) => <Link key={item.slug} href={`/world/${item.slug}`} className="group rounded-2xl border border-brand-primary/10 bg-brand-stone-100 p-6 hover:border-brand-primary/25"><span className="clinical-label" style={{ color: item.accent }}>{item.region}</span><h3 className="newsreader-display mt-8 text-3xl">{item.name}</h3><p className="mt-2 line-clamp-2 text-xs leading-5 text-brand-primary/40">{item.headline}</p><span className="mt-5 inline-flex items-center gap-2 text-xs font-bold group-hover:text-brand-emerald-900">Open profile <ArrowRight size={13} /></span></Link>)}
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Link href="/edu/courses/history-culture-and-society" className="flex items-center gap-4 rounded-2xl border border-brand-primary/10 p-5 text-sm font-bold text-brand-primary/60 hover:text-brand-primary"><BookOpen className="text-brand-emerald-900" /> Continue in the history curriculum <ArrowRight className="ml-auto" size={14} /></Link>
              <Link href="/docs" className="flex items-center gap-4 rounded-2xl border border-brand-primary/10 p-5 text-sm font-bold text-brand-primary/60 hover:text-brand-primary"><Landmark className="text-brand-secondary" /> Browse the research library <ArrowRight className="ml-auto" size={14} /></Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function policyColor(status: string) {
  if (status === 'Regulated' || status === 'Licensed') return 'border-brand-emerald-900/20 bg-brand-emerald-900/[.06] text-brand-emerald-900';
  if (status === 'Prohibited') return 'border-brand-primary/10 text-brand-primary/40';
  return 'border-brand-secondary/20 bg-brand-secondary/[.05] text-brand-secondary';
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full border border-brand-primary/10 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-brand-primary/35">{children}</span>;
}

function DossierStat({ value, label }: { value: number; label: string }) {
  return <div><dd className="newsreader-display text-2xl">{value}</dd><dt className="mt-1 text-[8px] font-bold uppercase tracking-wider text-brand-primary/30">{label}</dt></div>;
}

function EvidenceCard({ icon: Icon, label, title, body }: { icon: typeof Layers3; label: string; title: string; body: string }) {
  return (
    <article className="rounded-2xl border border-brand-primary/10 bg-brand-stone-100 p-6 sm:p-7">
      <div className="flex items-center justify-between"><Icon size={20} className="text-brand-emerald-900" /><span className="clinical-label text-brand-primary/25">{label}</span></div>
      <h3 className="newsreader-display mt-10 text-3xl">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-brand-primary/50">{body}</p>
    </article>
  );
}
