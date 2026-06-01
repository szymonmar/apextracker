import "../css/HeroPanel.css";

function HeroPanel({ label, value, icon, color = "#DC2626" }) {
  return (
    <div className="hero-panel" style={{ borderColor: color }}>
      {icon && (
        <div className="hero-panel-icon" style={{ color }}>
          {icon}
        </div>
      )}
      <div className="hero-panel-content">
        <p className="hero-panel-label">{label}</p>
        <p className="hero-panel-value">{value}</p>
      </div>
    </div>
  );
}

export default HeroPanel;
