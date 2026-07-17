import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface CompendiumViewerProps {
  content: string;
}

export default function CompendiumViewer({ content }: CompendiumViewerProps) {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <article className="prose prose-lg prose-invert prose-headings:newsreader-display prose-headings:text-brand-primary prose-p:text-brand-primary/80 prose-strong:text-brand-secondary prose-a:text-brand-secondary prose-table:border prose-table:border-brand-primary/10 prose-th:bg-brand-primary/5 prose-th:p-4 prose-td:p-4 prose-img:rounded-3xl prose-img:shadow-2xl">
        <div className="glass p-8 md:p-16 rounded-[3rem] border border-brand-primary/10 shadow-2xl relative overflow-hidden bg-brand-stone-100/40">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/5 blur-[100px] rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/5 blur-[100px] rounded-full -ml-32 -mb-32"></div>
          
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>
      </article>
      
      <footer className="mt-20 py-12 border-t border-brand-primary/10 text-center">
        <p className="clinical-label text-brand-primary/30">
          EFIFYA — OFFICIAL COMPENDIUM
        </p>
      </footer>
    </div>
  );
}
