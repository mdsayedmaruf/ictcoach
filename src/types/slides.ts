export interface QuizOption {
  label?: string;
  text: string;
  correct: boolean;
}

export interface QuizData {
  question: string;
  options: QuizOption[];
  explanation: string;
}

export interface SlideItem {
  id: number;
  module: string;
  category: string;
  title: string;
  subtitle?: string;
  layout?: string;
  teacherNotes?: string;
  html?: string;
  quiz?: QuizData;
}

export interface ClassDeckMeta {
  id: string;
  slug: string;
  subjectId: string;
  classNumber: number;
  title: string;
  titleBn: string;
  description: string;
  chapter: string;
  duration: string;
  slideCount: number;
  status: 'published' | 'coming-soon';
  tags: string[];
}

export interface ClassDeck extends ClassDeckMeta {
  slides: SlideItem[];
}

export interface Subject {
  id: string;
  slug: string;
  title: string;
  titleBn: string;
  description: string;
  badge: string;
  accentColor: string;
  order: number;
}
