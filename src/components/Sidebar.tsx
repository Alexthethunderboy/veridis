'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Home, Microscope, Leaf, BookOpen, Scale, FileText, ChevronRight } from 'lucide-react';
import { SidebarItem } from './UI';
import { useQuickExit } from '@/hooks/useQuickExit';
import { motion } from 'motion/react';

export default function Sidebar() {
  const { triggerQuickExit } = useQuickExit();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.aside 
      initial={false}
      animate={{ width: isHovered ? 256 : 80 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-screen fixed top-0 left-0 border-r border-brand-primary/5 bg-brand-stone-100/80 backdrop-blur-3xl hidden lg:flex flex-col z-50 overflow-hidden transition-all duration-300 shadow-[20px_0_40px_rgba(0,0,0,0.5)]"
    >
      <div className="p-6 flex items-center h-24 whitespace-nowrap">
        {isHovered ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col">
            <Link href="/" className="newsreader-display text-3xl text-brand-primary flex items-end">
              Veridis<span className="text-brand-emerald-900 text-4xl leading-none">.</span>
            </Link>
            <p className="mt-1 text-[9px] font-bold uppercase tracking-widest text-brand-primary/40">
              Veridis Framework
            </p>
          </motion.div>
        ) : (
          <div className="newsreader-display text-3xl text-brand-emerald-900 mx-auto">
            V.
          </div>
        )}
      </div>

      <nav className="flex-1 px-3 py-4 space-y-2 overflow-y-auto scrollbar-hide flex flex-col items-center">
        <SidebarItem name={isHovered ? "Dashboard" : ""} href="/" icon={<Home size={20} />} />
        <SidebarItem name={isHovered ? "Directory" : ""} href="/strains" icon={<Leaf size={20} />} />
        <SidebarItem name={isHovered ? "Protocols" : ""} href="/science" icon={<Microscope size={20} />} />
        <SidebarItem name={isHovered ? "Advocacy" : ""} href="/law" icon={<Scale size={20} />} />
        
        {isHovered && (
          <div className="pt-6 pb-2 px-4 w-full text-[10px] uppercase tracking-widest font-bold text-brand-primary/40">
            Intelligence
          </div>
        )}
        
        <SidebarItem name={isHovered ? "Education" : ""} href="/edu" icon={<BookOpen size={20} />} />
        <SidebarItem name={isHovered ? "Resources" : ""} href="/docs" icon={<FileText size={20} />} />
      </nav>

      <div className="p-4 border-t border-brand-primary/5">
        <button 
          onClick={triggerQuickExit}
          className={`w-full py-3 ${isHovered ? 'px-4' : 'px-0 flex justify-center'} bg-brand-primary/5 text-brand-stone-50 border border-brand-emerald-900/30 text-xs uppercase tracking-widest font-bold rounded-xl hover:bg-brand-emerald-900/20 hover:text-brand-primary hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all flex items-center justify-center group overflow-hidden`}
        >
          {isHovered ? (
            <>
              <span className="text-brand-primary">Quick Exit</span>
              <span className="ml-2 text-[10px] opacity-50 group-hover:opacity-100 transition-opacity text-brand-emerald-900">Esc × 3</span>
            </>
          ) : (
            <span className="text-brand-emerald-900 group-hover:text-brand-primary transition-colors font-serif italic text-lg">E</span>
          )}
        </button>
      </div>
    </motion.aside>
  );
}
