import { COURSES } from './education';
import { CURRICULUM_ENRICHMENTS } from './curriculumEnrichment';
import { KNOWLEDGE_SOURCES, SOURCE_REVIEW_RECORDS } from './knowledgeSources';
import { LESSON_ASSESSMENTS } from './lessonAssessments';

export interface IntegrityReport { checkedAt:string; courses:number; lessons:number; sources:number; errors:string[] }

export function validateCurriculumIntegrity():IntegrityReport{
  const errors:string[]=[];
  const lessons=COURSES.flatMap((course)=>course.modules.flatMap((module)=>module.lessons));
  const lessonSlugs=lessons.map((lesson)=>lesson.slug);
  const sourceIds=KNOWLEDGE_SOURCES.map((source)=>source.id);
  const duplicates=(values:string[])=>values.filter((value,index)=>values.indexOf(value)!==index);
  for(const duplicate of new Set(duplicates(lessonSlugs))) errors.push(`Duplicate lesson slug: ${duplicate}`);
  for(const duplicate of new Set(duplicates(sourceIds))) errors.push(`Duplicate source id: ${duplicate}`);
  for(const lesson of lessons){
    if(!CURRICULUM_ENRICHMENTS[lesson.slug]?.length) errors.push(`Missing enrichment: ${lesson.slug}`);
    if(!LESSON_ASSESSMENTS[lesson.slug]) errors.push(`Missing assessment: ${lesson.slug}`);
    if(lesson.sections.length<4) errors.push(`Lesson has fewer than four core sections: ${lesson.slug}`);
    for(const citationId of lesson.sections.flatMap((section)=>section.citationIds??[])) if(!sourceIds.includes(citationId)) errors.push(`Unknown citation ${citationId} in ${lesson.slug}`);
    for(const sourceId of (CURRICULUM_ENRICHMENTS[lesson.slug]??[]).flatMap((unit)=>unit.sourceIds)) if(!sourceIds.includes(sourceId)) errors.push(`Unknown enrichment source ${sourceId} in ${lesson.slug}`);
  }
  for(const key of Object.keys(CURRICULUM_ENRICHMENTS)) if(!lessonSlugs.includes(key)) errors.push(`Enrichment targets unknown lesson: ${key}`);
  for(const source of KNOWLEDGE_SOURCES){if(!source.limitation.trim())errors.push(`Source lacks limitation: ${source.id}`);if(!SOURCE_REVIEW_RECORDS.some((record)=>record.sourceId===source.id))errors.push(`Source lacks review record: ${source.id}`)}
  return {checkedAt:'2026-07-17',courses:COURSES.length,lessons:lessons.length,sources:KNOWLEDGE_SOURCES.length,errors};
}

export const CURRICULUM_INTEGRITY=validateCurriculumIntegrity();
if(CURRICULUM_INTEGRITY.errors.length) throw new Error(`Curriculum integrity failed:\n${CURRICULUM_INTEGRITY.errors.join('\n')}`);
