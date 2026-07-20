'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BookOpen, ChevronLeft, ChevronRight, FileText, Globe2, Home, Leaf, LogOut, Microscope, Scale } from 'lucide-react';
import { useQuickExit } from '@/hooks/useQuickExit';
import { SidebarItem } from './UI';
import { EfifyaLogo, EfifyaMark } from './BrandLogo';

export default function Sidebar() {
  const { triggerQuickExit } = useQuickExit();
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    const next = !collapsed;
    setCollapsed(next);
    document.documentElement.dataset.sidebar = next ? 'collapsed' : 'expanded';
  };

  return (
    <aside className="fixed inset-y-0 left-0 z-50 hidden w-[var(--sidebar-width)] flex-col border-r border-brand-primary/10 bg-brand-stone-100 transition-[width] duration-300 ease-out lg:flex">
      <div className={`relative border-b border-brand-primary/10 ${collapsed ? 'px-4 py-6' : 'px-7 py-7'}`}>
        <Link href="/" aria-label="Efifya home" className="block overflow-hidden">{collapsed ? <EfifyaMark className="mx-auto h-10 w-10 text-brand-emerald-900"/> : <EfifyaLogo />}</Link>
        {!collapsed && <p className="mt-3 text-[10px] font-bold uppercase tracking-[.18em] text-brand-primary/45">Rooted here. Connected worldwide.</p>}
        <button onClick={toggle} className="absolute -right-3 bottom-5 grid h-7 w-7 place-items-center rounded-full border border-brand-primary/15 bg-brand-stone-200 text-brand-primary/60 shadow-lg hover:border-brand-emerald-900/40 hover:text-brand-emerald-900" aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}>{collapsed ? <ChevronRight size={14}/> : <ChevronLeft size={14}/>}</button>
      </div>
      <nav aria-label="Primary navigation" className={`flex-1 space-y-1 py-6 ${collapsed ? 'px-3' : 'px-4'}`}>
        <SidebarItem compact={collapsed} name="Overview" href="/" icon={<Home size={18} />} />
        <SidebarItem compact={collapsed} name="Strain directory" href="/strains" icon={<Leaf size={18} />} />
        <SidebarItem compact={collapsed} name="Botanical science" href="/science" icon={<Microscope size={18} />} />
        <SidebarItem compact={collapsed} name="Policy & law" href="/law" icon={<Scale size={18} />} />
        <SidebarItem compact={collapsed} name="World atlas" href="/world" icon={<Globe2 size={18} />} />
        {!collapsed && <div className="px-3 pb-2 pt-7 text-[10px] font-bold uppercase tracking-[.18em] text-brand-primary/35">Library</div>}
        {collapsed && <div className="mx-auto my-4 h-px w-7 bg-brand-primary/10"/>}
        <SidebarItem compact={collapsed} name="Learn" href="/edu" icon={<BookOpen size={18} />} />
        <SidebarItem compact={collapsed} name="Resources" href="/docs" icon={<FileText size={18} />} />
      </nav>
      <div className={`border-t border-brand-primary/10 ${collapsed ? 'p-3' : 'p-4'}`}>
        <button onClick={triggerQuickExit} title={collapsed ? 'Quick exit' : undefined} className={`flex w-full items-center rounded-xl border border-brand-primary/10 py-3 text-left text-xs font-bold text-brand-primary/60 transition-colors hover:border-brand-secondary/40 hover:text-brand-secondary ${collapsed ? 'justify-center px-2' : 'gap-3 px-4'}`} aria-label="Quick exit; press Escape three times">
          <LogOut size={17} /> {!collapsed && <>Quick exit <kbd className="ml-auto text-[9px] opacity-60">ESC ×3</kbd></>}
        </button>
      </div>
    </aside>
  );
}
