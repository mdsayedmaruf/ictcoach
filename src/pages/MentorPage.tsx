import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, GraduationCap, MessageCircle, User } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { MENTOR_INFO } from '../data/mentor';

export function MentorPage() {
  return (
    <div className="portal-shell">
      <Navbar />

      <main className="portal-main">
        <Link to="/" className="breadcrumb">
          <ArrowLeft size={15} />
          Back to Subjects
        </Link>

        <section className="portal-header">
          <div className="portal-kicker">Instructor Profile</div>
          <h1>{MENTOR_INFO.name}</h1>
          <p>
            {MENTOR_INFO.role} • {MENTOR_INFO.shortAffiliation}
          </p>
        </section>

        <div className="mentor-card">
          <div className="mentor-card-header">
            <div className="mentor-avatar">
              <User size={28} />
            </div>
            <div>
              <h2 className="mentor-name">{MENTOR_INFO.name}</h2>
              <div className="mentor-role">
                {MENTOR_INFO.role} — ICT Coach
              </div>
              <div className="mentor-affil">
                <GraduationCap size={16} />
                <span>
                  {MENTOR_INFO.department}, {MENTOR_INFO.university}
                </span>
              </div>
            </div>
          </div>

          <p className="mentor-bio">{MENTOR_INFO.bio}</p>

          <div className="mentor-contact-grid">
            <a
              href={MENTOR_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mentor-contact-item"
            >
              <div>
                <div className="mentor-contact-label">Facebook</div>
                <div className="mentor-contact-val">{MENTOR_INFO.facebookHandle}</div>
              </div>
              <ExternalLink size={16} />
            </a>

            <a
              href={MENTOR_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mentor-contact-item"
            >
              <div>
                <div className="mentor-contact-label">WhatsApp</div>
                <div className="mentor-contact-val">{MENTOR_INFO.whatsappDisplay}</div>
              </div>
              <MessageCircle size={16} />
            </a>
          </div>
        </div>
      </main>

      <footer className="portal-footer">
        ICT Coach • Lecturer: {MENTOR_INFO.name} ({MENTOR_INFO.shortAffiliation})
      </footer>
    </div>
  );
}
