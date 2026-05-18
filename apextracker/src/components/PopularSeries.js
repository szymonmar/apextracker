import "./PopularSeries.css";

function PopularSeries() {
  const series = [
    { id: 1, name: "Series 1" },
    { id: 2, name: "Series 2" },
    { id: 3, name: "Series 3" },
    { id: 4, name: "Series 4" },
    { id: 5, name: "Series 5" },
    { id: 6, name: "Series 6" },
  ];

  return (
    <section className="popular-series">
      <div className="section-header">
        <h2>Popular Series</h2>
        <a href="#" className="view-all">View All</a>
      </div>
      <div className="series-grid">
        {series.map((s) => (
          <div key={s.id} className="series-card">
            <p className="series-name">{s.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularSeries;
