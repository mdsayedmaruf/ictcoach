import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, MonitorPlay, Search } from 'lucide-react';
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
        <section className="portal-hero">
          <div className="portal-hero-kicker">
            <MonitorPlay size={14} />
            Interactive Classroom Slides
          </div>
          <h1>
            Subject-Wise <span>Teaching Slides</span>
          </h1>
          <p>
            Select a subject to browse class slide decks. Every deck includes a 16:9
            interactive stage, teacher speaker notes, whiteboard annotation pen, laser
            pointer, and live CQ/MCQ practice.
          </p>
        </section>

        <div className="portal-section-header">
          <h2 className="portal-section-title">
            <BookOpen size={20} />
            Subjects ({filtered.length})
          </h2>

          <label className="portal-search">
            <Search size={16} color="#8b949e" />
            <input
              type="text"
              placeholder="Search subjects..."
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
                  <div className="card-top">
                    <div className="card-icon-box">
                      <BookOpen size={22} />
                    </div>
                    <span className="card-badge">{subject.badge}</span>
                  </div>

                  <h3 className="card-title" style={{ marginTop: '1rem' }}>
                    {subject.title}
                  </h3>
                  <div className="card-subtitle-bn">{subject.titleBn}</div>
                  <p className="card-desc">{subject.description}</p>
                </div>

                <div className="card-footer">
                  <span>{classCounts[subject.id] ?? 0} Class Deck</span>
                  <span className="card-cta">
                    View Classes <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      <footer className="portal-footer">
        ICT Coach • Static React Slide Portal • Ready for Cloudflare Pages
      </footer>
    </div>
  );
}
