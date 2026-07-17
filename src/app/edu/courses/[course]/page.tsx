import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookOpen, Clock3, Layers3 } from 'lucide-react';
import { notFound } from 'next/navigation';
import { COURSES, getCourse, getCourseLessons } from '@/lib/data/education';
import { CURRICULUM_ENRICHMENTS } from '@/lib/data/curriculumEnrichment';

type Props = { params: Promise<{ course: string }> };

export function generateStaticParams() { return COURSES.map((course) => ({ course: course.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = getCourse((await params).course);
  return course ? { title: `${course.title} | Efifya Learn`, description: course.description } : {};
}

export default async function CoursePage({ params }: Props) {
  const course = getCourse((await params).course);
  if (!course) notFound();
  const lessons = getCourseLessons(course);
  const teachingUnits = lessons.reduce((sum,lesson)=>sum+lesson.sections.length+(CURRICULUM_ENRICHMENTS[lesson.slug]?.length??0),0);
  return <main className="page-shell">
    <Link href="/edu" className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-brand-primary/50 hover:text-brand-primary"><ArrowLeft size={16}/> All courses</Link>
    <header className="grid gap-10 border-b border-brand-primary/10 pb-14 lg:grid-cols-[1fr_300px] lg:items-end">
      <div><p className="clinical-label mb-4" style={{color:course.accent}}>Course {course.number} · {course.level}</p><h1 className="newsreader-display max-w-4xl text-5xl leading-[.95] sm:text-7xl">{course.title}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-brand-primary/60">{course.description}</p></div>
      <div className="grid grid-cols-2 gap-3"><Metric icon={<BookOpen size={17}/>} value={String(lessons.length)} label="Lessons"/><Metric icon={<Layers3 size={17}/>} value={String(teachingUnits)} label="Teaching units"/></div>
    </header>
    <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px]">
      <div className="space-y-14">{course.modules.map((module, moduleIndex) => <section key={module.title}>
        <div className="mb-6 flex gap-4"><span className="newsreader-display text-2xl text-brand-primary/25">{String(moduleIndex + 1).padStart(2,'0')}</span><div><h2 className="newsreader-display text-3xl">{module.title}</h2><p className="mt-1 text-sm text-brand-primary/45">{module.description}</p></div></div>
        <div className="overflow-hidden rounded-2xl border border-brand-primary/10">{module.lessons.map((lesson, lessonIndex) => <Link key={lesson.slug} href={`/edu/courses/${course.slug}/${lesson.slug}`} className="group flex gap-4 border-b border-brand-primary/10 bg-brand-stone-100 p-5 last:border-0 hover:bg-brand-stone-200 sm:items-center sm:p-6">
          <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-primary/15 text-xs font-bold text-brand-primary/40 sm:mt-0">{lessonIndex+1}</span><div className="min-w-0 flex-1"><h3 className="font-bold group-hover:text-brand-emerald-900">{lesson.title}</h3><p className="mt-1 line-clamp-2 text-sm leading-6 text-brand-primary/45">{lesson.summary}</p><p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-sky-300">{lesson.sections.length+(CURRICULUM_ENRICHMENTS[lesson.slug]?.length??0)} teaching units · {CURRICULUM_ENRICHMENTS[lesson.slug]?.length??0} source-derived</p></div><span className="hidden items-center gap-1 text-xs text-brand-primary/35 sm:flex"><Clock3 size={13}/>{lesson.duration}</span><ArrowRight className="shrink-0 text-brand-primary/25 group-hover:text-brand-emerald-900" size={18}/>
        </Link>)}</div>
      </section>)}</div>
      <aside><div className="sticky top-8 rounded-2xl border border-brand-emerald-900/20 bg-brand-emerald-900/[.06] p-6"><p className="clinical-label text-brand-emerald-900">How to use this course</p><ol className="mt-5 space-y-4 text-sm leading-6 text-brand-primary/55"><li>1. Follow lessons in order if you are new.</li><li>2. Open evidence notes when a claim affects health or safety.</li><li>3. Use the references to inspect the original research.</li></ol><Link href={`/edu/courses/${course.slug}/${lessons[0].slug}`} className="mt-7 flex items-center justify-center gap-2 rounded-xl bg-brand-emerald-900 px-4 py-3 text-sm font-bold text-brand-stone-50">Begin course <ArrowRight size={16}/></Link></div></aside>
    </div>
  </main>;
}

function Metric({icon,value,label}:{icon:React.ReactNode;value:string;label:string}) { return <div className="rounded-xl border border-brand-primary/10 bg-brand-primary/[.03] p-4"><span className="text-brand-primary/35">{icon}</span><strong className="newsreader-display mt-5 block text-3xl">{value}</strong><span className="text-xs text-brand-primary/40">{label}</span></div> }
