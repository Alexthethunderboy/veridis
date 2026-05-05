'use client';

import React from 'react';
import Link from 'next/link';
import { Home, Microscope, Leaf, BookOpen, Scale, FileText } from 'lucide-react';
import { SidebarItem } from './UI';
import { useQuickExit } from '@/hooks/useQuickExit';

export default function Sidebar() {
  const { triggerQuickExit } = useQuickExit();

  return (
    <aside className="w-64 h-screen fixed top-0 left-0 border-r border-brand-primary/10 bg-brand-stone-50 hidden lg:flex flex-col z-50">
      <div className="p-8">
        <Link href="/" className="newsreader-display text-3xl text-brand-primary flex items-end">
          Veridis<span className="text-brand-secondary text-4xl leading-none">.</span>
        </Link>
        <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-brand-primary/50">
          Veridis Framework
        </p>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto scrollbar-hide">
        <SidebarItem name="Dashboard" href="/" icon={<Home size={18} />} />
        <SidebarItem name="Directory" href="/strains" icon={<Leaf size={18} />} />
        <SidebarItem name="Protocols" href="/science" icon={<Microscope size={18} />} />
        <SidebarItem name="Advocacy" href="/law" icon={<Scale size={18} />} />
        <div className="pt-6 pb-2 px-4 text-[10px] uppercase tracking-widest font-bold text-brand-primary/40">
          Intelligence
        </div>
        <SidebarItem name="Education" href="/edu" icon={<BookOpen size={18} />} />
        <SidebarItem name="Resources" href="/docs" icon={<FileText size={18} />} />
      </nav>

      <div className="p-6 border-t border-brand-primary/10">
        <button 
          onClick={triggerQuickExit}
          className="w-full py-3 px-4 bg-brand-primary text-brand-stone-50 text-xs uppercase tracking-widest font-bold rounded-xl hover:bg-brand-secondary transition-colors shadow-lg flex items-center justify-center group"
        >
          Quick Exit
          <span className="ml-2 opacity-50 group-hover:opacity-100 transition-opacity">Esc × 3</span>
        </button>
      </div>
    </aside>
  );
}
