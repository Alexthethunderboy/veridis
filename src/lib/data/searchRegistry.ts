import { COURSES } from './education';
import { CURRICULUM_ENRICHMENTS } from './curriculumEnrichment';
import { KNOWLEDGE_CONTRIBUTORS, KNOWLEDGE_SOURCES } from './knowledgeSources';
import { WORLD_COUNTRIES } from './world';

export interface SearchRegistryItem {
  title: string;
  path: string;
  description: string;
  keywords: string[];
  category: 'Page' | 'Country' | 'Course' | 'Lesson' | 'Teaching unit' | 'Source' | 'Researcher';
}

const words = (value: string) => value.toLowerCase().replace(/[^a-z0-9\s-]/g, ' ').split(/\s+/).filter((word) => word.length > 2);

const CORE_PAGES: SearchRegistryItem[] = [
  { title: 'Learn Hub', path: '/edu', description: 'Structured cannabis education across the ECS, therapeutic use, lived experience, science, history, culture and Nigerian policy.', keywords: ['learn','education','curriculum','course'], category: 'Page' },
  { title: 'Research Library', path: '/docs', description: 'Peer-reviewed studies, guidance, books, MedGriot essays and legal sources with limitations.', keywords: ['source','research','library','book','essay'], category: 'Page' },
  { title: 'Policy & Law', path: '/law', description: 'Nigerian cannabis law, enforcement context and global policy comparisons.', keywords: ['law','policy','ndlea','nigeria','legal'], category: 'Page' },
  { title: 'Cannabis Science', path: '/science', description: 'Chemistry, pharmacology, the ECS, terpenes, cannabinoids and the entourage effect.', keywords: ['science','chemistry','cannabinoid','terpene','ecs','entourage'], category: 'Page' },
  { title: 'Unlearn Framework', path: '/unlearn', description: 'Examine stigma, propaganda, myths and competing cannabis narratives.', keywords: ['stigma','myth','media','propaganda'], category: 'Page' },
  { title: 'Botanical Directory', path: '/strains', description: 'Explore cultivar records while keeping names separate from medical predictions.', keywords: ['strain','cultivar','variety','botany'], category: 'Page' },
  { title: 'Cannabis Around the World', path: '/world', description: `Explore cannabis histories, local knowledge, culture and reviewed policy across ${WORLD_COUNTRIES.length} countries.`, keywords: ['world','global','atlas','country','history','culture'], category: 'Page' },
];

const COURSE_AND_LESSON_ITEMS: SearchRegistryItem[] = COURSES.flatMap((course) => {
  const coursePath = `/edu/courses/${course.slug}`;
  const courseItem: SearchRegistryItem = { title: course.title, path: coursePath, description: course.description, keywords: [...words(course.title),...words(course.description),course.level.toLowerCase()], category: 'Course' };
  const lessons = course.modules.flatMap((module) => module.lessons.flatMap((lesson) => {
    const lessonPath = `${coursePath}/${lesson.slug}`;
    const lessonItem: SearchRegistryItem = { title: lesson.title, path: lessonPath, description: lesson.summary, keywords: [...lesson.keyTerms.map((term)=>term.toLowerCase()),...lesson.objectives.flatMap(words),...lesson.sections.flatMap((section)=>[...words(section.title),...section.paragraphs.flatMap(words)])], category: 'Lesson' };
    const units = (CURRICULUM_ENRICHMENTS[lesson.slug] ?? []).map((unit): SearchRegistryItem => ({ title: unit.title, path: `${lessonPath}#${unit.id}`, description: unit.lede, keywords: [...words(unit.title),...unit.paragraphs.flatMap(words),...words(unit.activity.prompt)], category: 'Teaching unit' }));
    return [lessonItem,...units];
  }));
  return [courseItem,...lessons];
});

const SOURCE_ITEMS: SearchRegistryItem[] = KNOWLEDGE_SOURCES.map((source) => ({ title: source.title, path: `/docs#${source.id}`, description: `${source.summary} Known limit: ${source.limitation}`, keywords: [...source.topics.map((topic)=>topic.toLowerCase()),...words(source.authors),source.kind,source.quality], category: 'Source' }));

const CONTRIBUTOR_ITEMS: SearchRegistryItem[] = KNOWLEDGE_CONTRIBUTORS.map((contributor) => ({ title: contributor.name, path: '/edu#contributors-heading', description: `${contributor.role}. ${contributor.contribution}`, keywords: [...contributor.expertise.map((item)=>item.toLowerCase()),...words(contributor.credentials)], category: 'Researcher' }));

const COUNTRY_ITEMS: SearchRegistryItem[] = WORLD_COUNTRIES.map((country) => ({
  title: `${country.name}: cannabis history and culture`,
  path: `/world/${country.slug}`,
  description: country.deck,
  keywords: [
    country.name.toLowerCase(),
    country.region.toLowerCase(),
    ...country.localNames.map((name) => name.toLowerCase()),
    ...country.themes.flatMap((theme) => [...words(theme.title), ...words(theme.body)]),
    ...country.timeline.flatMap((item) => [...words(item.title), ...words(item.body)]),
  ],
  category: 'Country',
}));

export const SEARCH_REGISTRY: SearchRegistryItem[] = [...CORE_PAGES,...COUNTRY_ITEMS,...COURSE_AND_LESSON_ITEMS,...SOURCE_ITEMS,...CONTRIBUTOR_ITEMS];
