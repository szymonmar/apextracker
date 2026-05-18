import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="app-header">
      <div className="header-brand">
        <span className="header-logo">APEX TRACKER</span>
      </div>

      <nav className="header-nav">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        <NavLink to="/schedule" className={({ isActive }) => (isActive ? "active" : "")}>Schedule</NavLink>
        <NavLink to="/series" className={({ isActive }) => (isActive ? "active" : "")}>Series</NavLink>
        {/* <NavLink to="/series/formula-1" className={({ isActive }) => (isActive ? "active" : "")}>Formula 1</NavLink>
        <NavLink to="/round/1" className={({ isActive }) => (isActive ? "active" : "")}>Round 1</NavLink>
        <NavLink to="/round/2" className={({ isActive }) => (isActive ? "active" : "")}>Round 2</NavLink> */}
        <NavLink to="/live" className={({ isActive }) => (isActive ? "active" : "")}>Live</NavLink>
      </nav>
    </header>
  );
}

export default Header;
