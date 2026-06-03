import "../css/PopularSeries.css";
import { Link } from "react-router-dom";

function PopularSeries() {
  const series = [
    { id: 1, name: "Formula 1", slug: "f1" },
    { id: 2, name: "World Endurance Championship", slug: "wec" },
    { id: 3, name: "MotoGP", slug: "motogp" },
    { id: 4, name: "Formula 2", slug: "f2" },
    { id: 5, name: "Formula E", slug: "fe" },
    { id: 6, name: "World Rally Championship", slug: "wrc" },
  ];

  return (
    <section className="popular-series">
      <div className="section-header">
        <h2>Popular Series</h2>
        <Link to="/series" className="view-all">
          View All
        </Link>
      </div>
      <div className="pop-series-grid">
        {series.map((s) => (
          <Link key={s.id} to={`/series/${s.slug}`} className="pop-series-card">
            <p className="pop-series-name">{s.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default PopularSeries;
