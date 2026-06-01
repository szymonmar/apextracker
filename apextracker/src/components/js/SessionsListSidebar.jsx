import "../css/SessionsListSidebar.css";
import { Link } from "react-router-dom";
function SessionsListSidebar({sessions}) {
    return (
        <aside className="session-list-sidebar">
            <h4>LIVE SESSIONS</h4>
            {sessions.map((session) => (
                <Link to={`/sessions/${session.slug}`} key={session.id} className={`session ${session.active ? 'active' : ''}`}>
                    <div className="avatar">{session.serieShort}</div>
                    <div>
                        <div className="username">{session.name}</div>
                        <div className="status">
                            START AT: {session.time} 
                        </div> 
                    </div>
                </Link>
            ))}
        </aside>
    );
}

export default SessionsListSidebar;