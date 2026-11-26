import { Link, NavLink } from 'react-router-dom';

export function Navbar() {
  return (
    <header className="portal-nav">
      <div className="portal-nav-inner">
        <Link to="/" className="portal-brand">
          <span className="portal-brand-mark">IC</span>
          <span className="portal-brand-name">ICT Coach</span>
          <span className="portal-brand-sub">Slides</span>
        </Link>

        <nav className="portal-nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `portal-nav-link ${isActive ? 'active' : ''}`
            }
          >
            Subjects
          </NavLink>
          <NavLink
            to="/mentor"
            className={({ isActive }) =>
              `portal-nav-link ${isActive ? 'active' : ''}`
            }
          >
            Mentor
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
