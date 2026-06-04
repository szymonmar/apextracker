import "../css/LiveTimelineSection.css";

function renderStatus(status) {
  if (status.type === "tag") {
    return <span className={`tag ${status.className || ""}`}>{status.value}</span>;
  }

  return <span className={`status-text ${status.muted ? "muted" : ""}`}>{status.value}</span>;
}

function renderAction(action) {
  if (action.type === "link") {
    return (
      <a href={action.href} className={action.className || "action-link"}>
        {action.value}
      </a>
    );
  }

  if (action.type === "button") {
    return <button className={action.className || "btn-red-small"}>{action.value}</button>;
  }

  return <span className={action.muted ? "muted" : ""}>{action.value}</span>;
}

function LiveTimelineSection({ title, columns, rows }) {
  return (
    <section className="timeline-section">
      <div className="section-header">
        <h3>{title}</h3>
      </div>

      <div className="timeline-table">
        <div className="table-row table-head">
          {columns.map((column) => (
            <div key={column}>{column}</div>
          ))}
        </div>

        {rows.map((row) => (
          <div key={row.id} className={`table-row ${row.active ? "active-row" : ""}`.trim()}>
            <div>{row.session}</div>
            <div>{renderStatus(row.status)}</div>
            <div>{row.localTime}</div>
            <div>{row.trackTemp}</div>
            <div>{renderAction(row.action)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LiveTimelineSection;