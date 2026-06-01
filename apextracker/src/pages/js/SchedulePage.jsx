
import EventFilterSidebar from "../../components/js/EventFilterSidebar";
import EventListElement from "../../components/js/EventListElement";
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

function SchedulePage() {
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
      isLive: Math.random() > 0.85,
      status: Math.random() > 0.85 ? 'LIVE NOW' : 'TIME TO START',
    };
  });

  return (
    <div className="schedule-page app-shell">
      <EventFilterSidebar seriesList={seriesList} />

      <main className="schedule-list">
        <div className="list-header section-header">
          <h1>Schedule</h1>
          <div className="view-toggle">
            <button className="icon-btn">▦</button>
            <button className="icon-btn">☷</button>
          </div>
        </div>

        <div className="events">
          {events.map((e) => (
            <EventListElement key={e.id} event={e} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default SchedulePage;

