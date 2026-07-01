'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Leaf, Microscope, Scale, ChevronUp, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [isMinimized, setIsMinimized] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsMinimized(true);
      } else if (currentScrollY < lastScrollY) {
        setIsMinimized(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: 'Home', href: '/', icon: <Home size={20} /> },
    { name: 'Strains', href: '/strains', icon: <Leaf size={20} /> },
    { name: 'Science', href: '/science', icon: <Microscope size={20} /> },
    { name: 'Law', href: '/law', icon: <Scale size={20} /> },
  ];

  return (
    <div className="lg:hidden fixed bottom-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
      <motion.nav
        animate={{ 
          y: isMinimized ? 40 : 0,
          opacity: 1,
          scale: isMinimized ? 0.9 : 1,
          width: isMinimized ? 'auto' : '100%'
        }}
        className={`pointer-events-auto glass-panel rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.8)] overflow-hidden flex items-center transition-all duration-500 max-w-md w-full`}
      >
        <AnimatePresence mode="wait">
          {!isMinimized ? (
            <motion.div 
              key="full"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="flex w-full items-center justify-around py-4 px-6"
            >
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link 
                    key={item.href} 
                    href={item.href}
                    className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${
                      isActive ? 'text-brand-emerald-900 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'text-brand-primary/40 hover:text-brand-primary/80'
                    }`}
                  >
                    <div className={`${isActive ? 'scale-110' : 'scale-100'} transition-transform`}>
                      {item.icon}
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em]">{item.name}</span>
                  </Link>
                );
              })}
              <button 
                onClick={() => setIsMinimized(true)}
                className="p-2 ml-2 bg-brand-primary/5 rounded-full text-brand-primary/40 hover:text-brand-emerald-900 hover:bg-brand-emerald-900/10 transition-colors"
              >
                <ChevronDown size={16} />
              </button>
            </motion.div>
          ) : (
            <motion.button
              key="minimized"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={() => setIsMinimized(false)}
              className="px-6 py-3 flex items-center gap-3 text-brand-emerald-900 hover:text-brand-primary transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-brand-emerald-900 shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Navigator</span>
              <ChevronUp size={14} />
            </motion.button>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
