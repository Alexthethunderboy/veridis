import React from 'react';

export function BotanicalSpecimen({ className='' }:{className?:string}) {
  return <svg viewBox="0 0 520 520" aria-hidden="true" className={className} fill="none">
    <circle cx="260" cy="260" r="205" stroke="currentColor" strokeOpacity=".1"/><circle cx="260" cy="260" r="148" stroke="currentColor" strokeOpacity=".08" strokeDasharray="4 10"/>
    <path d="M260 425C258 342 258 258 260 112M260 334C221 294 181 266 135 246M260 287C304 247 343 223 393 207M260 231C225 198 200 168 180 132M260 190C291 158 318 126 334 91" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <path d="M135 246C146 201 176 183 221 190C214 228 184 251 135 246ZM393 207C380 168 351 152 311 162C320 197 346 215 393 207ZM180 132C198 99 227 87 258 102C243 132 218 145 180 132ZM334 91C304 66 273 67 249 91C271 115 300 116 334 91Z" fill="currentColor" fillOpacity=".13" stroke="currentColor" strokeWidth="2"/>
    <g fill="currentColor"><circle cx="260" cy="112" r="7"/><circle cx="135" cy="246" r="5"/><circle cx="393" cy="207" r="5"/></g>
    <text x="46" y="58" fill="currentColor" fillOpacity=".45" fontSize="11" letterSpacing="3">CANNABIS SATIVA L.</text><text x="370" y="458" fill="currentColor" fillOpacity=".35" fontSize="10" letterSpacing="2">SPECIMEN 01</text>
  </svg>;
}

export function EvidenceLadder({className=''}:{className?:string}) {
  const rows=[['01','Consensus'],['02','Systematic review'],['03','Clinical trial'],['04','Observational'],['05','Preclinical']];
  return <div className={className} aria-label="Evidence hierarchy from consensus evidence to preclinical research"><div className="space-y-2">{rows.map(([n,label],i)=><div key={n} className="flex items-center gap-3"><span className="w-5 text-[9px] font-bold text-brand-primary/25">{n}</span><div className="h-2 rounded-full bg-current" style={{width:`${100-i*13}%`,opacity:.75-i*.11}}/><span className="w-28 text-[10px] font-bold text-brand-primary/50">{label}</span></div>)}</div></div>;
}

export function MoleculeField({className=''}:{className?:string}) {
  return <svg viewBox="0 0 500 300" aria-hidden="true" className={className} fill="none"><g stroke="currentColor" strokeOpacity=".35" strokeWidth="1.5"><path d="M75 158L146 102L220 135L286 77L365 112L426 61M220 135L233 218L318 242L365 183L365 112M146 102L128 36"/><path d="M75 158L103 236L175 258" strokeDasharray="4 7"/></g><g fill="currentColor"><circle cx="75" cy="158" r="10"/><circle cx="146" cy="102" r="7"/><circle cx="220" cy="135" r="12"/><circle cx="286" cy="77" r="6"/><circle cx="365" cy="112" r="11"/><circle cx="426" cy="61" r="5"/><circle cx="233" cy="218" r="7"/><circle cx="318" cy="242" r="10"/><circle cx="365" cy="183" r="6"/><circle cx="128" cy="36" r="4"/></g><g fill="currentColor" fillOpacity=".55" fontSize="10" fontWeight="700"><text x="52" y="140">CB1</text><text x="207" y="112">THC</text><text x="350" y="89">CBD</text><text x="303" y="272">ECS</text></g></svg>;
}

export function PolicyTimeline({className=''}:{className?:string}) { return <div className={className} aria-label="Nigerian cannabis legal history timeline"><div className="relative flex justify-between before:absolute before:left-3 before:right-3 before:top-2 before:h-px before:bg-brand-primary/15">{[['1935','Colonial law'],['1966','Indian Hemp Act'],['1989','NDLEA Act'],['NOW','Policy debate']].map(([year,label],i)=><div key={year} className="relative w-1/4"><span className={`block h-4 w-4 rounded-full border-4 border-brand-stone-100 ${i===3?'bg-brand-secondary':'bg-brand-primary/30'}`}/><strong className="mt-3 block text-xs">{year}</strong><span className="mt-1 block max-w-20 text-[9px] leading-4 text-brand-primary/35">{label}</span></div>)}</div></div> }
