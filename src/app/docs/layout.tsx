import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research Library | Efifya',
  description: 'A provenance-aware library of cannabis studies, expert sources, MedGriot essays, books and Nigerian legal material.',
};

export default function ResourcesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
