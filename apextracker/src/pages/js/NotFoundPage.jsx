import { Link } from 'react-router-dom';
import '../css/NotFoundPage.css';

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <div className="nf-bg-number">404</div>

      <div className="nf-content">
        <div className="nf-track-line" />
        <p className="nf-eyebrow">Error · Session Aborted</p>

        <h1 className="nf-heading">
          PAGE<br />
          <span>NOT</span><br />
          FOUND
        </h1>

        <div className="nf-divider" />

        <p className="nf-message">
          <span className="nf-status-tag">404</span>
          The page you requested doesn't exist or has been moved.
          Head back to the pits and try another route.
        </p>

        <div className="nf-actions">
          <Link to="/" className="nf-btn-primary">
            ← Back to Home
          </Link>
          <Link to="/live" className="nf-btn-ghost">
            Live Sessions
          </Link>
        </div>

        <div className="nf-quick-nav">
          <p className="nf-quick-nav-label">Quick Navigation</p>
          <div className="nf-quick-nav-links">
            <Link to="/schedule" className="nf-nav-link">Schedule</Link>
            <Link to="/series" className="nf-nav-link">Series</Link>
            <Link to="/live" className="nf-nav-link">Live</Link>
            <Link to="/login" className="nf-nav-link">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;