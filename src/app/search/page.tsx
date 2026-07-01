import React, { Suspense } from 'react';
import SearchContent from './SearchContent';

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen pt-40 px-8 flex justify-center">
        <div className="animate-spin text-brand-secondary h-8 w-8 border-4 border-current border-t-transparent rounded-full" />
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}
