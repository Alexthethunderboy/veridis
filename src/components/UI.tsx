'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// --- SidebarItem ---
interface SidebarItemProps {
  name: string;
  href: string;
  icon?: React.ReactNode;
}

export function SidebarItem({ name, href, icon }: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className="block w-full">
      <motion.div
        whileHover={{ x: 5, backgroundColor: 'rgba(211, 95, 48, 0.05)' }}
        whileTap={{ scale: 0.98 }}
        className={`flex items-center px-4 py-3 my-1 rounded-xl transition-all duration-300 ${
          isActive 
            ? 'bg-brand-primary text-brand-stone-50 font-bold shadow-lg shadow-brand-primary/10' 
            : 'text-brand-primary/70 hover:text-brand-primary'
        }`}
      >
        {icon && <span className={`mr-3 transition-colors ${isActive ? 'text-brand-stone-50' : 'text-brand-secondary/70'}`}>{icon}</span>}
        <span className="text-xs uppercase tracking-[0.2em]">{name}</span>
        {isActive && (
          <motion.div 
            layoutId="activeIndicator"
            className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-secondary shadow-[0_0_8px_rgba(211,95,48,0.8)]"
          />
        )}
      </motion.div>
    </Link>
  );
}

// --- Card ---
interface CardProps {
  children: React.ReactNode;
  interactive?: boolean;
  hoverZoom?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Card = ({ children, className = '', interactive = false, hoverZoom = false, onClick }: CardProps) => {
  const shouldAnimate = interactive || hoverZoom;
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={shouldAnimate ? { y: -8, scale: hoverZoom ? 1.02 : 1, transition: { duration: 0.3, ease: 'easeOut' } } : {}}
      onClick={onClick}
      className={`glass rounded-3xl p-6 md:p-8 transition-all duration-500 overflow-hidden border border-brand-primary/5 ${
        shouldAnimate ? 'hover:border-brand-secondary/30 hover:shadow-2xl hover:shadow-brand-secondary/5 cursor-pointer' : ''
      } ${className}`}
    >

      {children}
    </motion.div>
  );
}

// --- Badge ---
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'clinical' | 'warning' | 'neutral' | 'premium';
  className?: string;
}

export function Badge({ children, variant = 'neutral', className = '' }: BadgeProps) {
  const variants = {
    clinical: 'bg-brand-emerald-50/10 text-brand-emerald-900 border-brand-emerald-900/30 shadow-[0_0_15px_rgba(136,207,162,0.1)]',
    warning: 'bg-brand-secondary/10 text-brand-secondary border-brand-secondary/30 shadow-[0_0_15px_rgba(211,95,48,0.1)]',
    neutral: 'bg-brand-primary/5 text-brand-primary/70 border-brand-primary/10',
    premium: 'bg-brand-primary text-brand-stone-50 border-transparent shadow-xl',
  };

  return (
    <motion.span 
      whileHover={{ scale: 1.05 }}
      className={`inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.25em] border ${variants[variant]} ${className}`}
    >
      {children}
    </motion.span>
  );
}

// --- Section Header ---
export function SectionHeader({ title, subtitle, badge }: { title: string; subtitle?: string; badge?: string }) {
  return (
    <div className="mb-12 md:mb-16">
      {badge && <Badge variant="clinical" className="mb-6">{badge}</Badge>}
      <h2 className="newsreader-display text-4xl md:text-5xl lg:text-7xl text-brand-primary mb-6 leading-none">
        {title}
      </h2>
      {subtitle && <p className="text-lg md:text-xl text-brand-primary/50 font-medium max-w-2xl leading-relaxed">{subtitle}</p>}
    </div>
  );
}

// --- Input ---
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export function Input({ icon, className = '', ...props }: InputProps) {
  return (
    <div className="relative w-full">
      {icon && <div className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-primary/20">{icon}</div>}
      <input 
        className={`w-full bg-brand-primary/[0.02] border border-brand-primary/10 rounded-2xl py-4 ${icon ? 'pl-12' : 'pl-6'} pr-6 text-brand-primary placeholder:text-brand-primary/20 focus:outline-none focus:border-brand-secondary/40 transition-colors newsreader-display text-lg ${className}`}
        {...props}
      />
    </div>
  );
}
