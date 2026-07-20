'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, FileText, Globe2, Leaf, LogOut, Menu, Microscope, Scale, X } from 'lucide-react';
import { EfifyaLogo, EfifyaMark } from './BrandLogo';
import { useQuickExit } from '@/hooks/useQuickExit';

const mainItems = [
  { name: 'Home', href: '/', icon: EfifyaMark },
  { name: 'Learn', href: '/edu', icon: BookOpen },
  { name: 'World', href: '/world', icon: Globe2 },
  { name: 'Strains', href: '/strains', icon: Leaf },
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { triggerQuickExit } = useQuickExit();

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);

  return <>
    <header className="fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between border-b border-brand-primary/10 bg-brand-stone-100/95 px-5 backdrop-blur-xl lg:hidden">
      <Link href="/" aria-label="Efifya home"><EfifyaLogo className="[&>svg]:h-8 [&>svg]:w-8 [&>span]:text-2xl"/></Link>
      <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-xl border border-brand-primary/10 text-brand-primary/70" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X size={20}/> : <Menu size={20}/>}</button>
    </header>

    {open && <div className="fixed inset-0 z-40 bg-brand-stone-50/75 backdrop-blur-sm lg:hidden" onClick={() => setOpen(false)} aria-hidden="true"/>}
    <section className={`fixed inset-x-3 bottom-24 z-50 origin-bottom rounded-3xl border border-brand-primary/15 bg-brand-stone-100 p-4 shadow-2xl transition duration-200 lg:hidden ${open ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'}`} aria-label="More navigation" aria-hidden={!open}>
      <div className="mb-3 px-2"><p className="clinical-label text-brand-primary/35">More from Efifya</p><p className="mt-1 text-xs text-brand-primary/45">Explore policy, sources and practical tools.</p></div>
      <div className="grid grid-cols-2 gap-2">
        <MobileMenuLink href="/science" icon={<Microscope size={19}/>} label="Science" onNavigate={() => setOpen(false)}/>
        <MobileMenuLink href="/law" icon={<Scale size={19}/>} label="Policy & law" onNavigate={() => setOpen(false)}/>
        <MobileMenuLink href="/docs" icon={<FileText size={19}/>} label="Resources" onNavigate={() => setOpen(false)}/>
      </div>
      <button onClick={triggerQuickExit} className="mt-3 flex w-full items-center gap-3 rounded-xl border border-brand-secondary/20 bg-brand-secondary/[.05] px-4 py-3 text-left text-xs font-bold text-brand-secondary"><LogOut size={17}/> Quick exit <span className="ml-auto text-[10px] font-medium opacity-60">Leave discreetly</span></button>
    </section>

    <nav aria-label="Primary navigation" className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-5 rounded-2xl border border-brand-primary/15 bg-brand-stone-100/95 p-2 shadow-2xl backdrop-blur-xl lg:hidden">
      {mainItems.map(({ name, href, icon: Icon }) => { const active = pathname === href || (href !== '/' && pathname.startsWith(href)); return <Link onClick={() => setOpen(false)} key={href} href={href} aria-current={active ? 'page' : undefined} className={`flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl text-[10px] font-bold ${active ? 'bg-brand-emerald-900/12 text-brand-emerald-900' : 'text-brand-primary/55'}`}><Icon size={19}/><span>{name}</span></Link>; })}
      <button onClick={() => setOpen(!open)} className={`flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl text-[10px] font-bold ${open ? 'bg-brand-secondary/10 text-brand-secondary' : 'text-brand-primary/55'}`} aria-expanded={open}><Menu size={19}/><span>More</span></button>
    </nav>
  </>;
}

function MobileMenuLink({href, icon, label, onNavigate}:{href:string;icon:React.ReactNode;label:string;onNavigate:()=>void}) {
  return <Link href={href} onClick={onNavigate} className="flex items-center gap-3 rounded-xl border border-brand-primary/10 bg-brand-primary/[.025] px-4 py-4 text-sm font-bold text-brand-primary/70">{icon}{label}</Link>;
}
