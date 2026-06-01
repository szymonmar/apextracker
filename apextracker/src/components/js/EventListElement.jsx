import "../css/EventListElement.css";

function EventListElement({ event }) {
    return (
        <article key={event.id} className="event-card">
              <div className="event-left">
                <div className="date-badge-big">{event.date.split(' ')[0]}</div>
                <div className="date-day">{event.date.split(' ')[1]}</div>
              </div>

              <div className="event-main">
                <div className="meta-row">
                  <span className="pill">{event.series}</span>
                </div>
                <h2 className="event-title">{event.title}</h2>
                <div className="event-location">{event.location}</div>
              </div>

              <div className="event-actions">
                <div className="right-buttons">
                    {event.isLive && <button className="status live">LIVE NOW!</button>}
                    {!event.isLive && (
                        <button className="btn-primary">REMIND ME</button>
                    )}
                    {!event.isLive && (
                        <button className="btn-ghost">READ MORE</button>
                    )}
                    {event.isLive && (
                        <button className="btn-primary">LIVE DATA</button>
                    )}
                    
                </div>
              </div>
        </article>
    );
}

export default EventListElement;