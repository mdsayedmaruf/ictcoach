import { CLASS_DECKS, SLIDES_BY_CLASS_ID, SUBJECTS } from '../data/catalog';
import type { ClassDeck, ClassDeckMeta, Subject } from '../types/slides';

/**
 * Static data service.
 * When a backend is added later, replace these implementations with API calls
 * without changing any UI page components.
 */
export async function getSubjects(): Promise<Subject[]> {
  return [...SUBJECTS].sort((a, b) => a.order - b.order);
}

export async function getSubjectBySlug(slug: string): Promise<Subject | null> {
  return SUBJECTS.find((s) => s.slug === slug) ?? null;
}

export async function getClassesBySubjectId(subjectId: string): Promise<ClassDeckMeta[]> {
  return CLASS_DECKS.filter((c) => c.subjectId === subjectId).sort(
    (a, b) => a.classNumber - b.classNumber
  );
}

export async function getClassDeck(
  subjectSlug: string,
  classSlug: string
): Promise<{ subject: Subject; deck: ClassDeck } | null> {
  const subject = await getSubjectBySlug(subjectSlug);
  if (!subject) return null;

  const meta = CLASS_DECKS.find(
    (c) => c.subjectId === subject.id && c.slug === classSlug
  );
  if (!meta) return null;

  const slides = SLIDES_BY_CLASS_ID[meta.id] ?? [];
  return {
    subject,
    deck: {
      ...meta,
      slides,
    },
  };
}
