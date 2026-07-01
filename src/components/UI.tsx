'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
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
        whileHover={{ x: 5, backgroundColor: 'rgba(16, 185, 129, 0.05)' }}
        whileTap={{ scale: 0.98 }}
        className={`flex items-center px-4 py-3 my-1 rounded-xl transition-all duration-300 ${
          isActive 
            ? 'bg-brand-primary/5 text-brand-emerald-900 font-bold border border-brand-emerald-900/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]' 
            : 'text-brand-primary/70 hover:text-brand-primary border border-transparent'
        }`}
      >
        {icon && <span className={`mr-3 transition-colors ${isActive ? 'text-brand-emerald-900' : 'text-brand-secondary/70'}`}>{icon}</span>}
        <span className="text-xs uppercase tracking-[0.2em]">{name}</span>
        {isActive && (
          <motion.div 
            layoutId="activeIndicator"
            className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-emerald-900 shadow-[0_0_8px_rgba(16,185,129,0.8)]"
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
  const ref = useRef<HTMLDivElement>(null);
  
  // 3D Tilt Effect Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive && !hoverZoom) return;
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const shouldAnimate = interactive || hoverZoom;
  
  return (
    <motion.div 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={shouldAnimate ? { rotateX, rotateY, transformPerspective: 1000 } : {}}
      whileHover={shouldAnimate ? { scale: hoverZoom ? 1.02 : 1, transition: { duration: 0.3, ease: 'easeOut' } } : {}}
      onClick={onClick}
      className={`${shouldAnimate ? 'glass-panel cursor-pointer hover-card-border hover:shadow-brand-emerald-900/10' : 'glass'} rounded-3xl p-6 md:p-8 transition-all duration-500 overflow-hidden ${className}`}
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
      animate={pulse ? { boxShadow: ['0 0 15px rgba(16,185,129,0.1)', '0 0 25px rgba(16,185,129,0.4)', '0 0 15px rgba(16,185,129,0.1)'] } : {}}
      transition={pulse ? { repeat: Infinity, duration: 2 } : {}}
      className={`inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.25em] border ${variants[variant]} ${className}`}
    >
      {pulse && <span className="w-1.5 h-1.5 rounded-full bg-current mr-2 animate-pulse" />}
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
