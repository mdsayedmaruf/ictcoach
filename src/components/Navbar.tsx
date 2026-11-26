import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <header className="portal-nav">
      <div className="portal-nav-inner">
        <Link to="/" className="portal-brand">
          <span className="portal-brand-name">ICT Coach</span>
          <span className="portal-brand-sub">Lecture Archive</span>
        </Link>

        <div className="portal-nav-meta">Classroom Slide Repository</div>
      </div>
    </header>
  );
}
