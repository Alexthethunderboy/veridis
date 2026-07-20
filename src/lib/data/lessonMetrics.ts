import type { Lesson } from './education';
import { CURRICULUM_ENRICHMENTS } from './curriculumEnrichment';

export function estimateLessonMinutes(lesson:Lesson){
  const baseWords=lesson.sections.flatMap((section)=>section.paragraphs).join(' ').split(/\s+/).length;
  const enrichmentWords=(CURRICULUM_ENRICHMENTS[lesson.slug]??[]).flatMap((unit)=>[unit.lede,...unit.paragraphs,unit.activity.prompt]).join(' ').split(/\s+/).length;
  const reading=Math.ceil((baseWords+enrichmentWords)/190);
  const activities=(CURRICULUM_ENRICHMENTS[lesson.slug]??[]).length*4;
  return Math.max(8,reading+activities+3);
}
