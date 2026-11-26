import { Link } from 'react-router-dom';
import { Layers } from 'lucide-react';

export function Navbar() {
  return (
    <header className="portal-nav">
      <div className="portal-nav-inner">
        <Link to="/" className="portal-brand">
          <span className="portal-brand-dot" />
          <span className="portal-brand-name">ICT COACH</span>
          <span className="portal-brand-pill">Slide Portal</span>
        </Link>

        <div className="portal-nav-meta">
          <Layers size={16} />
          <span>Static Classroom Edition</span>
        </div>
      </div>
    </header>
  );
}
