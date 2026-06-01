import { Link } from 'react-router-dom';
import '../css/SeriesGridCard.css';

function SeriesGridCard({ series }) {
    return (
        <Link to={`/series/${series.slug}`} className="series-card">
            <div className="card-background"></div>
            <div className="card-content">
                <h2>{series.title}</h2>
                <Link to={`/series/${series.slug}`} className="btn-read-more">READ MORE</Link>
            </div>
        </Link>
    );
}

export default SeriesGridCard;