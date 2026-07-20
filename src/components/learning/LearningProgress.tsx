'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const STORAGE_KEY='efifya-learning-state-v1';
type State=Record<string,{completed?:boolean;bookmarked?:boolean}>;

export default function LearningProgress({lessons}:{lessons:{slug:string;title:string;href:string}[]}){
  const [state,setState]=useState<State>({});
  useEffect(()=>{const sync=()=>{try{setState(JSON.parse(localStorage.getItem(STORAGE_KEY)??'{}'))}catch{setState({})}};sync();window.addEventListener('efifya-learning-state',sync);window.addEventListener('storage',sync);return()=>{window.removeEventListener('efifya-learning-state',sync);window.removeEventListener('storage',sync)}},[]);
  const completed=lessons.filter((lesson)=>state[lesson.slug]?.completed).length;
  const next=lessons.find((lesson)=>!state[lesson.slug]?.completed)??lessons[0];
  const percent=lessons.length?Math.round(completed/lessons.length*100):0;
  return <div className="rounded-2xl border border-brand-emerald-900/20 bg-brand-emerald-900/[.05] p-6"><div className="flex items-end justify-between"><div><p className="clinical-label text-brand-emerald-900">Your progress</p><strong className="newsreader-display mt-2 block text-4xl">{completed}/{lessons.length}</strong></div><span className="text-xs font-bold text-brand-primary/40">{percent}% complete</span></div><div className="mt-4 h-2 overflow-hidden rounded-full bg-brand-primary/10"><div className="h-full rounded-full bg-brand-emerald-900 transition-all" style={{width:`${percent}%`}}/></div>{next&&<Link href={next.href} className="mt-5 flex items-center justify-between rounded-xl border border-brand-primary/10 bg-brand-stone-100 p-4 text-sm font-bold"><span>{completed?'Continue':'Begin'}: {next.title}</span><ArrowRight size={14}/></Link>}</div>;
}
