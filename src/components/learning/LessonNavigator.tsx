'use client';

import { useEffect, useState } from 'react';
import { List } from 'lucide-react';

export default function LessonNavigator({items}:{items:{id:string;title:string}[]}){
  const [progress,setProgress]=useState(0);
  useEffect(()=>{const update=()=>{const max=document.documentElement.scrollHeight-window.innerHeight;setProgress(max>0?Math.min(100,Math.max(0,window.scrollY/max*100)):0)};update();window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);return()=>{window.removeEventListener('scroll',update);window.removeEventListener('resize',update)}},[]);
  return <><div className="fixed left-0 right-0 top-0 z-50 h-1 bg-transparent"><div className="h-full bg-brand-secondary transition-[width]" style={{width:`${progress}%`}}/></div><details className="sticky top-3 z-40 mx-5 mt-4 rounded-xl border border-brand-primary/10 bg-brand-stone-50/95 p-3 shadow-lg backdrop-blur lg:hidden"><summary className="flex cursor-pointer list-none items-center gap-2 text-xs font-bold"><List size={15}/> Lesson contents <span className="ml-auto text-brand-secondary">{Math.round(progress)}%</span></summary><nav className="mt-3 max-h-72 space-y-1 overflow-y-auto border-t border-brand-primary/10 pt-3">{items.map((item)=><a key={item.id} href={`#${item.id}`} className="block rounded-lg px-3 py-2 text-xs leading-5 text-brand-primary/55 hover:bg-brand-primary/5">{item.title}</a>)}</nav></details></>;
}
