import { defineTerm } from '@/lib/data/glossary';

export default function GlossaryTerms({terms}:{terms:string[]}){
  return <section className="mt-16 border-t border-brand-primary/10 pt-9"><p className="clinical-label mb-4 text-brand-primary/35">Interactive glossary</p><div className="grid gap-2 sm:grid-cols-2">{terms.map((term)=><details key={term} className="group rounded-xl border border-brand-primary/10 bg-brand-stone-100 p-4"><summary className="cursor-pointer list-none text-sm font-bold text-brand-primary/65 marker:hidden">{term}<span className="float-right text-brand-secondary transition group-open:rotate-45">+</span></summary><p className="mt-3 border-t border-brand-primary/10 pt-3 text-xs leading-5 text-brand-primary/50">{defineTerm(term)}</p></details>)}</div></section>;
}
