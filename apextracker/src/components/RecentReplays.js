import "./RecentReplays.css";

function RecentReplays() {
  const replays = [
    {
      id: 1,
      title: "Lorem Ipsum Dolor Sit Amet",
      circuit: "Location, Country",
      race: "Full Race",
      duration: "1:58:00",
    },
    {
      id: 2,
      title: "Consectetur Adipiscing Elit",
      circuit: "Location, Country",
      race: "Full Race",
      duration: "2:05:45",
    },
    {
      id: 3,
      title: "Sed Do Eiusmod Tempor",
      circuit: "Location, Country",
      race: "Full Race",
      duration: "3:24:00",
    },
  ];

  return (
    <section className="recent-replays">
      <div className="section-header">
        <h2>Recent Replays</h2>
        <a href="#" className="view-all">View All</a>
      </div>
      <div className="replays-list">
        {replays.map((replay) => (
          <div key={replay.id} className="replay-item">
            <div className="replay-header">
              <span className="replay-badge">▶</span>
              <div className="replay-info">
                <h4 className="replay-title">{replay.title}</h4>
                <p className="replay-meta">{replay.circuit}</p>
              </div>
            </div>
            <div className="replay-footer">
              <span className="replay-type">{replay.race}</span>
              <span className="replay-duration">{replay.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RecentReplays;
