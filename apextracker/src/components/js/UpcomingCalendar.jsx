import "../css/UpcomingCalendar.css";
import { NavLink } from "react-router-dom";

function UpcomingCalendar() {
  const events = [
    {
      id: 1,
      date: "JUN 23",
      name: "Event Title Number One",
      series: "F1 ROUND 10",
      location: "Location, Country",
    },
    {
      id: 2,
      date: "JUN 29",
      name: "Event Title Number Two",
      series: "WEC",
      location: "Location, Country",
    },
    {
      id: 3,
      date: "JUL 09",
      name: "Event Title Number Three",
      series: "Test Series",
      location: "Location, Country",
    },
  ];

  return (
    <section className="upcoming-calendar">
      <div className="section-header">
        <h2>Upcoming Calendar</h2>
        <NavLink to="/schedule" className="view-all">Schedule</NavLink>
      </div>
      <div className="calendar-events">
        {events.map((event) => (
          <div key={event.id} className="calendar-event">
            <div className="event-date">
              <div className="date-badge">{event.date}</div>
            </div>
            <div className="event-details">
              <div className="event-meta">
                <span className="event-series">{event.series}</span>
              </div>
              <h3 className="event-name">{event.name}</h3>
              <p className="event-location">{event.location}</p>
            </div>
            <div className="event-actions">
              <button className="btn-details">Details</button>
              <button className="btn-preview">Preview</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UpcomingCalendar;
