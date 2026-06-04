import "../css/LiveStatusCard.css";

function LiveStatusCard({ title, accentClass, text, timestamp }) {
  return (
    <article className="status-card">
      <h4 className={`card-title ${accentClass || ""}`.trim()}>{title}</h4>
      <p>{text}</p>
      <span className="timestamp">{timestamp}</span>
    </article>
  );
}

export default LiveStatusCard;