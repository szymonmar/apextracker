import { NavLink } from "react-router-dom";
import "../css/Header.css";

function Header() {
  return (
    <header className="app-header">
      <NavLink to="/" className="no-underline">
        <div className="header-brand">
            <span className="header-logo">APEX TRACKER</span>
        </div>
      </NavLink>

      <nav className="header-nav">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        <NavLink to="/schedule" className={({ isActive }) => (isActive ? "active" : "")}>Schedule</NavLink>
        <NavLink to="/series" className={({ isActive }) => (isActive ? "active" : "")}>Series</NavLink>
        <NavLink to="/live" className={({ isActive }) => (isActive ? "active" : "")}>Live</NavLink>
      </nav>

      <div className="header-actions">
        <input className="search-input" type="search" placeholder="Search..." aria-label="Search" />
        <NavLink to="/login">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="#DC2626" aria-hidden="true">
            <circle cx="12" cy="8" r="3"></circle>
            <path d="M12 14c-4 0-6 2-6 4v1h12v-1c0-2-2-4-6-4z"></path>
          </svg>
        </NavLink>
        <NavLink to="/settings" className="mode-btn" aria-label="Settings" title="Settings">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path d="M19.14 12.936a7.99 7.99 0 000-1.872l2.036-1.58a.5.5 0 00.12-.64l-1.928-3.34a.5.5 0 00-.6-.22l-2.4.96a8.12 8.12 0 00-1.62-.94l-.36-2.52A.5.5 0 0013 2h-2a.5.5 0 00-.5.42l-.36 2.52c-.56.24-1.12.56-1.62.94l-2.4-.96a.5.5 0 00-.6.22L2.784 8.824a.5.5 0 00.12.64l2.036 1.58a7.99 7.99 0 000 1.872L2.904 14.496a.5.5 0 00-.12.64l1.928 3.34c.14.24.44.34.68.22l2.4-.96c.5.38 1.06.7 1.62.94l.36 2.52A.5.5 0 0011 22h2a.5.5 0 00.5-.42l.36-2.52c.56-.24 1.12-.56 1.62-.94l2.4.96c.24.12.54.02.68-.22l1.928-3.34a.5.5 0 00-.12-.64l-2.036-1.56zM12 15.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z"/>
          </svg>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
