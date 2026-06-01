
import "../css/SchedulePage.css";

function randLorem(wordCount = 3) {
  const words = "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor".split(" ");
  let out = [];
  for (let i = 0; i < wordCount; i++) out.push(words[Math.floor(Math.random() * words.length)]);
  return out.map((w, idx) => (idx === 0 ? w.charAt(0).toUpperCase() + w.slice(1) : w)).join(" ");
}

function formatShortDate(d) {
  const m = d.toLocaleString('en-US', { month: 'short' }).toUpperCase();
  const day = d.getDate();
  return `${m} ${day}`;
}

function Schedule() {
  const seriesList = ['Formula 1', 'WEC', 'IndyCar', 'GT World Challenge'];
  const events = Array.from({ length: 12 }).map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i * 7 + Math.floor(Math.random() * 5));
    return {
      id: i + 1,
      dateRaw: date,
      date: formatShortDate(date),
      title: randLorem(4) + ' ' + randLorem(2),
      series: seriesList[i % seriesList.length],
      location: randLorem(2) + ', ' + randLorem(1),
      status: Math.random() > 0.85 ? 'LIVE NOW' : 'TIME TO START',
    };
  });

  return (
    <div className="schedule-page">
      <aside className="schedule-filters">
        <div className="filters-header">
          <h4>FILTERS</h4>
          <button className="reset-btn">RESET</button>
        </div>

        <div className="filter-group">
          <label className="group-title">Racing Series</label>
          <div className="checkboxes">
            {seriesList.map((s, idx) => (
              <label key={s}><input type="checkbox" defaultChecked={idx === 0} /> {s}</label>
            ))}
          </div>
        </div>

        <div className="filter-group small">
          <label className="group-title">Year / Season</label>
          <select defaultValue={new Date().getFullYear()}>
            <option>{new Date().getFullYear()}</option>
            <option>{new Date().getFullYear() + 1}</option>
          </select>
        </div>

        <div className="session-cta">
          <div className="session-label">SESSION LIVE</div>
          <div className="session-title">MONACO GRAND PRIX</div>
          <button className="enter-btn">ENTER COCKPIT</button>
        </div>
      </aside>

      <main className="schedule-list">
        <div className="list-header">
          <h1>RACE CALENDAR</h1>
          <div className="view-toggle">
            <button className="icon-btn">▦</button>
            <button className="icon-btn">☷</button>
          </div>
        </div>

        <div className="events">
          {events.map((e) => (
            <article key={e.id} className="event-card">
              <div className="event-left">
                <div className="date-badge-big">{e.date.split(' ')[0]}</div>
                <div className="date-day">{e.date.split(' ')[1]}</div>
              </div>

              <div className="event-main">
                <div className="meta-row">
                  <span className="pill">{e.series}</span>
                </div>
                <h2 className="event-title">{e.title}</h2>
                <div className="event-location">{e.location}</div>
              </div>

              <div className="event-actions">
                <div className={`status ${e.status === 'LIVE NOW' ? 'live' : ''}`}>{e.status}</div>
                <div className="right-buttons">
                  <button className="btn-ghost">DATA CENTER</button>
                  <button className="btn-primary">REMIND ME</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Schedule;

