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
  compact?: boolean;
}

export function SidebarItem({ name, href, icon, compact = false }: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} title={compact ? name : undefined} className={`flex w-full items-center rounded-xl px-3 py-3 text-sm transition-colors ${compact ? 'justify-center' : ''} ${
          isActive 
            ? 'border border-brand-emerald-900/25 bg-brand-emerald-900/10 font-semibold text-brand-emerald-900'
            : 'border border-transparent text-brand-primary/65 hover:bg-brand-primary/5 hover:text-brand-primary'
        }`} aria-current={isActive ? 'page' : undefined}>
        {icon && <span className={compact ? '' : 'mr-3'}>{icon}</span>}<span className={compact ? 'sr-only' : ''}>{name}</span>
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
      whileHover={shouldAnimate ? { y: -3, transition: { duration: 0.2 } } : {}}
      onClick={onClick}
      className={`${shouldAnimate ? 'glass-panel hover-card-border' : 'glass'} rounded-2xl p-6 md:p-8 transition-colors duration-200 overflow-hidden ${className}`}
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
  pulse?: boolean;
}

export function Badge({ children, variant = 'neutral', className = '', pulse = false }: BadgeProps) {
  const variants = {
    clinical: 'bg-brand-emerald-50/20 text-brand-emerald-900 border-brand-emerald-900/40 shadow-[0_0_15px_rgba(16,185,129,0.15)]',
    warning: 'bg-brand-secondary/10 text-brand-secondary border-brand-secondary/40 shadow-[0_0_15px_rgba(234,179,8,0.15)]',
    neutral: 'bg-brand-primary/5 text-brand-primary/70 border-brand-primary/10',
    premium: 'bg-brand-primary text-brand-stone-50 border-transparent shadow-xl',
  };

  return (
    <motion.span 
      whileHover={{ scale: 1.05 }}
      animate={{}}
      className={`inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.25em] border ${variants[variant]} ${className}`}
    >
      {pulse && <span className="w-1.5 h-1.5 rounded-full bg-current mr-2" />}
      {children}
    </motion.span>
  );
}

// --- Section Header ---
export function SectionHeader({ title, subtitle, badge }: { title: string; subtitle?: string; badge?: string }) {
  return (
    <div className="mb-12 md:mb-16">
      {badge && <Badge variant="clinical" className="mb-6">{badge}</Badge>}
      <h2 className="newsreader-display text-4xl md:text-5xl lg:text-7xl text-brand-primary mb-6 leading-[0.9] tracking-tighter">
        {title}
      </h2>
      {subtitle && <p className="text-lg md:text-xl text-brand-primary/60 font-medium max-w-2xl leading-relaxed">{subtitle}</p>}
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
        className={`w-full bg-brand-primary/[0.02] border border-brand-primary/10 rounded-2xl py-4 ${icon ? 'pl-12' : 'pl-6'} pr-6 text-brand-primary placeholder:text-brand-primary/30 focus:outline-none focus:border-brand-emerald-900/40 focus:bg-brand-emerald-900/[0.02] transition-all newsreader-display text-lg ${className}`}
        {...props}
      />
    </div>
  );
}
