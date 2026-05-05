import React from 'react';
import { Card, Badge } from '@/components/UI';
import { DOCS_RESOURCES } from '@/lib/data/cannabisData';
import { FileText, Scale, Microscope, Download } from 'lucide-react';

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-transparent p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h1 className="newsreader-display text-7xl text-brand-primary mb-4">Technical Resources</h1>
          <p className="text-xl text-brand-primary/60 max-w-2xl font-medium leading-relaxed">
            Formal documentation, legal frameworks, and scientific research regarding the global cannabis policy landscape.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Legal Framework */}
          <section className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-10">
              <Scale className="text-brand-secondary" size={32} />
              <h2 className="newsreader-display text-4xl text-brand-primary">Legislative Timeline</h2>
            </div>
            <div className="space-y-4">
              {DOCS_RESOURCES.legal.map((item, i) => (
                <Card key={i} className="flex gap-8 items-center bg-brand-stone-100 border-brand-primary/10">
                  <div className="newsreader-display text-4xl text-brand-secondary opacity-40 font-serif italic w-24">
                    {item.year}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-brand-primary mb-1">{item.title}</h3>
                    <p className="text-sm text-brand-primary/60 font-medium">{item.summary}</p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-20 flex items-center gap-4 mb-10">
              <Microscope className="text-brand-secondary" size={32} />
              <h2 className="newsreader-display text-4xl text-brand-primary">Scientific Standards</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {DOCS_RESOURCES.technical.map((item, i) => (
                <Card key={i} className="border-brand-primary/10">
                  <h3 className="font-bold text-lg text-brand-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-brand-primary/60 font-medium leading-relaxed">{item.summary}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* PDF & MD Library */}
          <aside>
            <div className="flex items-center gap-4 mb-10">
              <FileText className="text-brand-secondary" size={32} />
              <h2 className="newsreader-display text-4xl text-brand-primary">Document Library</h2>
            </div>
            <div className="space-y-4">
              {DOCS_RESOURCES.files.map((file, i) => (
                <div 
                  key={i} 
                  className="p-6 bg-brand-primary/5 rounded-2xl border border-brand-primary/10 hover:border-brand-secondary/30 transition-all cursor-pointer group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant={file.type === 'PDF' ? 'clinical' : 'neutral'}>{file.type}</Badge>
                    <Download size={16} className="text-brand-primary/20 group-hover:text-brand-secondary transition-colors" />
                  </div>
                  <h3 className="font-bold text-brand-primary group-hover:text-brand-secondary transition-colors mb-1">{file.name}</h3>
                  <p className="text-[10px] uppercase font-black tracking-widest text-brand-primary/40">{file.size}</p>
                </div>
              ))}
            </div>
            
            <Card className="mt-12 bg-brand-secondary/5 border-brand-secondary/20 p-8">
               <h4 className="newsreader-display text-2xl text-brand-secondary mb-4">Request Access</h4>
               <p className="text-xs text-brand-primary/70 font-medium leading-relaxed mb-6">
                 Full technical whitepapers and extraction lab blueprints are available for registered medical researchers.
               </p>
               <button className="w-full py-3 bg-brand-secondary text-brand-stone-50 rounded-xl font-bold uppercase tracking-widest text-[10px]">
                 Contact NDLEA Liaison
               </button>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}
