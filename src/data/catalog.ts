import type { ClassDeckMeta, SlideItem, Subject } from '../types/slides';
import { htmlClassSlides } from './slides/htmlClass';

export const SUBJECTS: Subject[] = [
  {
    id: 'hsc-ict',
    slug: 'hsc-ict',
    title: 'HSC ICT',
    titleBn: 'তথ্য ও যোগাযোগ প্রযুক্তি (HSC)',
    description:
      'Complete chapter-wise interactive teaching slides, board CQ step-by-step solutions, and live MCQ quizzes for HSC ICT.',
    badge: 'HSC • Active',
    accentColor: '#00e5ff',
    order: 1,
  },
];

export const CLASS_DECKS: ClassDeckMeta[] = [
  {
    id: 'ict-ch4-html',
    slug: 'html-master-class',
    subjectId: 'hsc-ict',
    classNumber: 1,
    title: 'Web Design & HTML — Master Class',
    titleBn: 'ওয়েব ডিজাইন পরিচিতি ও HTML (অধ্যায় ৪)',
    description:
      'Web fundamentals, website structures, HTML5 tags, formatting, hyperlinks, images, lists, complex tables (colspan/rowspan), Board CQ & MCQ practice.',
    chapter: 'Chapter 4',
    duration: 'One-Shot Complete Class',
    slideCount: htmlClassSlides.length,
    status: 'published',
    tags: ['HTML5', 'Tables & Lists', 'Board CQ', 'MCQ Quiz'],
  },
];

export const SLIDES_BY_CLASS_ID: Record<string, SlideItem[]> = {
  'ict-ch4-html': htmlClassSlides,
};
