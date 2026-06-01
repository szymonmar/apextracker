import { Link } from "react-router-dom";
import "../css/Hero.css";

function Hero({
  title = "Hero Title",
  isLive = true,
  backgroundImage = "https://via.placeholder.com/1920x600",
  ctaText = "Learn More",
  ctaLink = "/",
  children,
}) {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        {isLive && <div className="live-badge">LIVE</div>}
        <h1 className="hero-title">{title}</h1>
        {children && <div className="hero-panels">{children}</div>}
        <Link to={ctaLink} className="hero-cta">
          {ctaText}
        </Link>
      </div>
    </section>
  );
}

export default Hero;
