import "../css/SessionsListSidebar.css";

function SessionsListSidebar({ sessions, selectedId, onSelect }) {
  return (
    <aside className="session-list-sidebar">
      <h4>LIVE SESSIONS</h4>
      {sessions.map((session) => (
        <button
          key={session.id}
          className={`session ${session.id === selectedId ? "active" : ""}`}
          onClick={() => onSelect(session.id)}
        >
          <div className={`avatar ${session.id === selectedId ? "avatar-active" : ""}`}>
            {session.serieShort}
          </div>
          <div className="session-info">
            <div className="username">{session.name}</div>
            <div className="status">START AT: {session.time}</div>
          </div>
          {session.id === selectedId && <span className="active-bar" />}
        </button>
      ))}
    </aside>
  );
}

export default SessionsListSidebar;