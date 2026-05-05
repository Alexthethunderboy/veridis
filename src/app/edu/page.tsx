import React from 'react';
import { Card, Badge } from '@/components/UI';
import { EDUCATIONAL_CONTENT } from '@/lib/data/cannabisData';

export default function EducationHub() {
  return (
    <main className="min-h-screen bg-transparent p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h1 className="newsreader-display text-7xl text-brand-primary mb-4">Learn Hub</h1>
          <p className="text-xl text-brand-primary/60 max-w-2xl font-medium leading-relaxed">
            Your source of truth for cannabis science, safety, and cultivation in the Nigerian context.
          </p>
        </header>

        {/* Cannabis 101 */}
        <section className="mb-32">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="newsreader-display text-5xl text-brand-primary">Cannabis 101</h2>
            <div className="h-px flex-1 bg-brand-primary/10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EDUCATIONAL_CONTENT.basics.map((topic, i) => (
              <Card key={i} className="bg-brand-stone-100 border-brand-primary/10">
                <h3 className="newsreader-display text-3xl text-brand-secondary mb-4">{topic.title}</h3>
                <p className="text-brand-primary/80 leading-relaxed mb-6 font-medium">{topic.content}</p>
                {topic.pidgin && (
                  <div className="p-4 bg-brand-secondary/5 rounded-xl border border-brand-secondary/10 italic text-brand-secondary font-medium">
                    &quot;{topic.pidgin}&quot;
                  </div>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Science & Terpenes */}
        <section className="mb-32">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="newsreader-display text-5xl text-brand-primary">The Science</h2>
            <div className="h-px flex-1 bg-brand-primary/10"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {EDUCATIONAL_CONTENT.science.map((topic, i) => (
              <Card key={i} className="border-brand-primary/10">
                <h3 className="newsreader-display text-2xl text-brand-primary mb-4">{topic.title}</h3>
                <p className="text-sm text-brand-primary/70 leading-relaxed font-medium">{topic.content}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* The Colorado Danger */}
        <section className="mb-32">
          <Card className="bg-red-950/30 border-red-500/30 p-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl font-black text-red-500 select-none">DANGER</div>
             <div className="max-w-2xl relative z-10">
                <Badge variant="warning">Critical Safety Warning</Badge>
                <h2 className="newsreader-display text-6xl text-red-500 mt-6 mb-6">The &quot;Colorado&quot; Reality</h2>
                <p className="text-xl text-red-100/80 mb-8 font-medium leading-relaxed">
                  {EDUCATIONAL_CONTENT.danger[0].content}
                </p>
                <div className="p-6 bg-red-500/10 rounded-2xl border border-red-500/20 italic text-red-400 font-bold text-lg">
                  &quot;{EDUCATIONAL_CONTENT.danger[0].pidgin}&quot;
                </div>
             </div>
          </Card>
        </section>

        {/* Consumption Methods */}
        <section className="mb-32">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="newsreader-display text-5xl text-brand-primary">Consumption & Preparation</h2>
            <div className="h-px flex-1 bg-brand-primary/10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EDUCATIONAL_CONTENT.methods.map((topic, i) => (
              <Card key={i} className="bg-brand-stone-100 border-brand-primary/10">
                <h3 className="newsreader-display text-3xl text-brand-primary mb-4">{topic.title}</h3>
                <p className="text-brand-primary/80 leading-relaxed mb-6 font-medium">{topic.content}</p>
                {topic.pidgin && (
                  <div className="p-4 bg-brand-primary/5 rounded-xl border border-brand-primary/10 italic text-brand-primary/60 font-medium text-sm">
                    &quot;{topic.pidgin}&quot;
                  </div>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Growing Hub */}
        <section className="mb-32">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="newsreader-display text-5xl text-brand-primary">The Growing Hub</h2>
            <div className="h-px flex-1 bg-brand-primary/10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EDUCATIONAL_CONTENT.growing.map((topic, i) => (
              <Card key={i} className="bg-brand-stone-100 border-brand-primary/10">
                <h3 className="newsreader-display text-3xl text-brand-primary mb-4">{topic.title}</h3>
                <p className="text-brand-primary/80 leading-relaxed mb-6 font-medium">{topic.content}</p>
                {topic.pidgin && (
                  <div className="p-4 bg-brand-primary/5 rounded-xl border border-brand-primary/10 italic text-brand-primary/60 font-medium text-sm">
                    &quot;{topic.pidgin}&quot;
                  </div>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Science Protocols */}
        <section className="mb-32">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="newsreader-display text-5xl text-brand-primary">Clinical Protocols</h2>
            <div className="h-px flex-1 bg-brand-primary/10"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {EDUCATIONAL_CONTENT.medical_science.map((topic, i) => (
              <Card key={i} className="border-brand-secondary/20 bg-brand-secondary/5">
                <h3 className="newsreader-display text-3xl text-brand-secondary mb-4">{topic.title}</h3>
                <p className="text-brand-primary/80 leading-relaxed font-medium">{topic.content}</p>
              </Card>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}

