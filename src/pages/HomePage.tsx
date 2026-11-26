import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { getClassesBySubjectId, getSubjects } from '../services/slideService';
import type { Subject } from '../types/slides';

export function HomePage() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [classCounts, setClassCounts] = useState<Record<string, number>>({});
  const [query, setQuery] = useState('');

  useEffect(() => {
    let active = true;
    (async () => {
      const list = await getSubjects();
      const counts: Record<string, number> = {};
      await Promise.all(
        list.map(async (sub) => {
          const classes = await getClassesBySubjectId(sub.id);
          counts[sub.id] = classes.length;
        })
      );
      if (active) {
        setSubjects(list);
        setClassCounts(counts);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  const filtered = subjects.filter((s) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      s.title.toLowerCase().includes(q) ||
      s.titleBn.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q)
    );
  });

  return (
    <div className="portal-shell">
      <Navbar />

      <main className="portal-main">
        <section className="portal-header">
          <div className="portal-kicker">Course Materials</div>
          <h1>Subject Lecture Slides</h1>
          <p>
            Select a subject below to open its class slide decks. Each deck runs in a
            16:9 classroom viewer with speaker notes, whiteboard annotation, and
            practice questions.
          </p>
        </section>

        <div className="portal-section-header">
          <h2 className="portal-section-title">Subjects ({filtered.length})</h2>

          <label className="portal-search">
            <Search size={15} color="#7a818f" />
            <input
              type="text"
              placeholder="Filter subjects..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </div>

        {filtered.length === 0 ? (
          <div className="empty-state">No subjects matched "{query}".</div>
        ) : (
          <div className="portal-grid">
            {filtered.map((subject) => (
              <Link
                key={subject.id}
                to={`/subject/${subject.slug}`}
                className="subject-card"
              >
                <div>
                  <div className="card-meta-row">
                    <span className="card-code">{subject.badge}</span>
                    <span className="card-count">
                      {classCounts[subject.id] ?? 0} Class
                    </span>
                  </div>

                  <h3 className="card-title">{subject.title}</h3>
                  <div className="card-subtitle-bn">{subject.titleBn}</div>
                  <p className="card-desc">{subject.description}</p>
                </div>

                <div className="card-footer">
                  <span>{classCounts[subject.id] ?? 0} Lecture Deck</span>
                  <span className="card-cta">
                    Open Subject <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      <footer className="portal-footer">
        ICT Coach • Static Lecture Slide Archive
      </footer>
    </div>
  );
}
