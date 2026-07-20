'use client';

import { useMemo, useSyncExternalStore } from 'react';
import { Award, Printer } from 'lucide-react';

const KEY='efifya-learning-state-v1';
type State=Record<string,{completed?:boolean;bookmarked?:boolean;assessmentAnswer?:number}>;

export default function CourseCompletionSummary({courseTitle,lessonSlugs}:{courseTitle:string;lessonSlugs:string[]}){
  const raw=useSyncExternalStore((notify)=>{window.addEventListener('efifya-learning-state',notify);window.addEventListener('storage',notify);return()=>{window.removeEventListener('efifya-learning-state',notify);window.removeEventListener('storage',notify)}},()=>localStorage.getItem(KEY)??'{}',()=>'{}');
  const state=useMemo(()=>{try{return JSON.parse(raw) as State}catch{return {}}},[raw]);
  const completed=lessonSlugs.filter((slug)=>state[slug]?.completed).length;
  const bookmarked=lessonSlugs.filter((slug)=>state[slug]?.bookmarked).length;
  const finished=completed===lessonSlugs.length;
  return <section className={`rounded-2xl border p-6 ${finished?'border-brand-secondary/25 bg-brand-secondary/[.06]':'border-brand-primary/10 bg-brand-stone-100'}`}><Award className={finished?'text-brand-secondary':'text-brand-primary/25'}/><p className="clinical-label mt-6 text-brand-secondary">Course summary</p><h2 className="newsreader-display mt-2 text-2xl">{courseTitle}</h2><p className="mt-3 text-xs leading-5 text-brand-primary/50">{completed} of {lessonSlugs.length} lessons completed · {bookmarked} bookmarked</p>{finished?<><p className="mt-4 text-sm font-bold text-brand-emerald-900">Course complete on this device.</p><button onClick={()=>window.print()} className="mt-4 inline-flex items-center gap-2 rounded-xl border border-brand-secondary/25 px-4 py-2 text-xs font-bold text-brand-secondary"><Printer size={13}/> Print completion summary</button></>:<p className="mt-4 text-xs leading-5 text-brand-primary/40">Complete every lesson to unlock a printable completion summary. This is educational recognition, not professional certification.</p>}</section>;
}
