import type { SVGProps } from 'react';

type MarkProps = SVGProps<SVGSVGElement> & { accentClassName?: string; size?: number | string };

export function EfifyaMark({ accentClassName = 'text-brand-secondary', size, ...props }: MarkProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" width={size} height={size} {...props}>
      <circle cx="32" cy="32" r="29" stroke="currentColor" strokeWidth="3" />
      <path d="M13.5 34.5c0-12.2 7.7-21 18.5-21 8.5 0 15.3 5.6 17.4 13.7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M18.4 39.6c-1.7-8.8 3.2-18.2 12-20.2 6.4-1.5 12.9 1.8 15.8 7.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M23.7 42.4c-2.5-6.8.7-14.4 7.1-16.5 4.7-1.5 9.8.5 12.3 4.6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M29 44.2c-2.4-4-.8-9.2 3.2-10.8 2.9-1.2 6.3-.1 8 2.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M33 48.8c7.3-1 13.1-5.7 16-12.8-6.6-.2-12.5 2.1-16.7 6.8" className={accentClassName} stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32.3 42.8c3.2.6 6.1 2.3 8.5 4.7" className={accentClassName} stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function EfifyaLogo({ className = '' }: { className?: string }) {
  return <span className={`inline-flex items-center gap-3 ${className}`}><EfifyaMark className="h-10 w-10 shrink-0 text-brand-emerald-900"/><span className="newsreader-display text-[2rem] leading-none tracking-[-0.05em]">efifya<span className="text-brand-secondary">.</span></span></span>;
}
