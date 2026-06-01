import "../css/CalendarCard.css";

function CalendarCard({ event }) {
    return (
        <div key={event.id} className="card calendar-card">
            <div className="card-header">
                <div>
                    <h3>{event.dateRange}</h3>
                    <span className="subtitle">{event.subtitle}</span>
                </div>
            </div>
            <div className="card-body">
                <h4>{event.title}</h4>
                <p>{event.location}</p>
            </div>
            <div className="card-footer">
                <a href={event.ctaLink} className="link-red" target="_blank" rel="noopener noreferrer">
                    {event.ctaText}
                </a>
            </div>
        </div>
    );
}

export default CalendarCard;
