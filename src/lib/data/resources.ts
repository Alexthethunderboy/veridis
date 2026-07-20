import { KNOWLEDGE_SOURCES, getSourceReviewRecord, type KnowledgeSource, type SourceKind } from './knowledgeSources';

export type ResourceKind = 'Systematic review' | 'Randomized trial' | 'Observational study' | 'Qualitative study' | 'Consensus report' | 'Clinical guidance' | 'Book' | 'Expert profile' | 'Expert media' | 'Editorial essay' | 'Legal document' | 'Working report';
export type ResourceQuality = 'Peer reviewed' | 'Authoritative' | 'Expert interpretation' | 'Author perspective' | 'Historical reference' | 'Working report';

export interface LibraryResource {
  id: string;
  title: string;
  creators: string;
  year: number;
  kind: ResourceKind;
  quality: ResourceQuality;
  summary: string;
  notice: string;
  topics: string[];
  href: string;
  external: boolean;
  relatedCourse: string;
  verification: KnowledgeSource['verification'];
  reviewer: string;
  reviewedAt: string;
  nextReviewAt: string;
}

const KIND_LABELS: Record<SourceKind, ResourceKind> = {
  'systematic review': 'Systematic review',
  'randomized trial': 'Randomized trial',
  'observational study': 'Observational study',
  'qualitative study': 'Qualitative study',
  'consensus report': 'Consensus report',
  'clinical guidance': 'Clinical guidance',
  'reference book': 'Book',
  'expert profile': 'Expert profile',
  'expert media': 'Expert media',
  'editorial essay': 'Editorial essay',
  'legal document': 'Legal document',
  'working report': 'Working report',
};

const QUALITY_LABELS: Record<KnowledgeSource['quality'], ResourceQuality> = {
  'peer reviewed': 'Peer reviewed',
  'authoritative guidance': 'Authoritative',
  'expert interpretation': 'Expert interpretation',
  'author perspective': 'Author perspective',
  'historical reference': 'Historical reference',
  'working analysis': 'Working report',
};

const COURSE_BY_LESSON: Record<string, string> = {
  'what-is-cannabis': 'cannabis-foundations',
  'how-to-read-cannabis-research': 'cannabis-foundations',
  'plant-anatomy': 'cannabis-foundations',
  'cannabinoids-and-the-ecs': 'chemistry-and-the-body',
  'dose-route-and-duration': 'chemistry-and-the-body',
  'terpenes-flavonoids-and-entourage': 'chemistry-and-the-body',
  'medical-evidence': 'safety-and-health',
  'synthetic-cannabinoids': 'safety-and-health',
  'cannabinoid-hyperemesis-syndrome': 'safety-and-health',
  'dependence-tolerance-and-withdrawal': 'safety-and-health',
  'pregnancy-youth-and-vulnerability': 'safety-and-health',
  'how-to-read-nigerian-cannabis-law': 'nigeria-law-and-policy',
  'policy-models-and-public-health': 'nigeria-law-and-policy',
  'environment-and-plant-development': 'cultivation-and-quality',
  'quality-contaminants-and-testing': 'cultivation-and-quality',
  'harvest-drying-curing-and-stability': 'cultivation-and-quality',
  'cannabis-across-cultures': 'history-culture-and-society',
  'stigma-language-and-media': 'history-culture-and-society',
  'cannabis-in-africa-and-nigeria': 'history-culture-and-society',
};

function lessonHref(source: KnowledgeSource) {
  const lesson = source.lessonSlugs[0];
  const course = lesson && COURSE_BY_LESSON[lesson];
  return course ? `/edu/courses/${course}/${lesson}` : '/edu';
}

export const LIBRARY_RESOURCES: LibraryResource[] = KNOWLEDGE_SOURCES.map((source) => {
  const review=getSourceReviewRecord(source.id)!;
  return ({
  id: source.id,
  title: source.title,
  creators: source.authors,
  year: source.year,
  kind: KIND_LABELS[source.kind],
  quality: QUALITY_LABELS[source.quality],
  summary: source.summary,
  notice: source.limitation,
  topics: source.topics,
  href: source.href,
  external: source.href.startsWith('http'),
  relatedCourse: lessonHref(source),
  verification: source.verification,
  reviewer: review.reviewer,
  reviewedAt: review.reviewedAt,
  nextReviewAt: review.nextReviewAt,
  });
});

export const RESOURCE_FILTERS = ['All', 'Systematic review', 'Randomized trial', 'Observational study', 'Qualitative study', 'Consensus report', 'Book', 'Expert profile', 'Editorial essay', 'Legal document'] as const;

function countKind(kind: ResourceKind) {
  return LIBRARY_RESOURCES.filter((resource) => resource.kind === kind).length;
}

export const LIBRARY_COLLECTIONS = [
  { title: 'Health & clinical evidence', description: 'Therapeutic findings, controlled trials, lived experience and comparative care.', count: LIBRARY_RESOURCES.filter((resource) => resource.quality === 'Peer reviewed' || resource.kind === 'Clinical guidance').length, filter: 'Systematic review' },
  { title: 'Nigeria: essays, law & policy', description: 'Local authorship and legal sources kept distinct, dated and cross-checked.', count: countKind('Editorial essay') + countKind('Legal document'), filter: 'Editorial essay' },
  { title: 'Books & expert knowledge', description: 'Topic maps, researcher perspectives and historical references with visible limits.', count: countKind('Book') + countKind('Expert profile'), filter: 'Book' },
];
