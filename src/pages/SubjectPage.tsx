import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { getClassesBySubjectId, getSubjectBySlug } from '../services/slideService';
import type { ClassDeckMeta, Subject } from '../types/slides';

export function SubjectPage() {
  const { subjectSlug } = useParams<{ subjectSlug: string }>();
  const [subject, setSubject] = useState<Subject | null>(null);
  const [classes, setClasses] = useState<ClassDeckMeta[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    (async () => {
      if (!subjectSlug) {
        setLoading(false);
        return;
      }
      const sub = await getSubjectBySlug(subjectSlug);
      if (!sub) {
        if (active) {
          setSubject(null);
          setClasses([]);
          setLoading(false);
        }
        return;
      }
      const decks = await getClassesBySubjectId(sub.id);
      if (active) {
        setSubject(sub);
        setClasses(decks);
        setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [subjectSlug]);

  return (
    <div className="portal-shell">
      <Navbar />

      <main className="portal-main">
        <Link to="/" className="breadcrumb">
          <ArrowLeft size={15} />
          All Subjects
        </Link>

        {loading ? (
          <div className="empty-state">Loading subject...</div>
        ) : !subject ? (
          <div className="empty-state">Subject not found.</div>
        ) : (
          <>
            <section className="portal-header">
              <div className="portal-kicker">{subject.badge}</div>
              <h1>{subject.title}</h1>
              <div className="card-subtitle-bn" style={{ fontSize: '1.08rem' }}>
                {subject.titleBn}
              </div>
              <p>{subject.description}</p>
            </section>

            <div className="portal-section-header">
              <h2 className="portal-section-title">Classes ({classes.length})</h2>
            </div>

            {classes.length === 0 ? (
              <div className="empty-state">No classes added under this subject yet.</div>
            ) : (
              <div className="portal-grid">
                {classes.map((cls) => (
                  <Link
                    key={cls.id}
                    to={`/subject/${subject.slug}/class/${cls.slug}`}
                    className="class-card"
                  >
                    <div>
                      <div className="card-meta-row">
                        <span className="card-code">
                          Class {cls.classNumber} • {cls.chapter}
                        </span>
                        <span className="card-count">{cls.slideCount} Slides</span>
                      </div>

                      <h3 className="card-title">{cls.title}</h3>
                      <div className="card-subtitle-bn">{cls.titleBn}</div>
                      <p className="card-desc">{cls.description}</p>
                    </div>

                    <div>
                      <div className="card-tags">
                        {cls.tags.map((tag) => (
                          <span key={tag} className="card-tag">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="card-footer">
                        <span>{cls.duration}</span>
                        <span className="card-cta">
                          Start Slides <ArrowRight size={15} />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </main>

      <footer className="portal-footer">
        ICT Coach • {subject?.title ?? 'Subject'}
      </footer>
    </div>
  );
}
