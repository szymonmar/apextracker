import React from 'react';
import { Link } from 'react-router-dom';
import './SeriesView.css';

const SeriesView = () => {
    const seriesData = [
        { title: 'FORMULA 1', slug: 'formula-1' },
        { title: 'FORMULA 2', slug: 'formula-2' },
        { title: 'WEC', slug: 'wec' },
        { title: 'MOTO GP', slug: 'moto-gp' },
        { title: 'WRC', slug: 'wrc' },
        { title: 'INDYCAR', slug: 'indicar' },
        { title: 'FORMULA E', slug: 'formula-e' },
        { title: 'FORMULA 3', slug: 'formula-3' },
        { title: 'FORMULA 1', slug: 'formula-1-classic' },
        { title: 'FORMULA 1', slug: 'formula-1-legacy' },
        { title: 'FORMULA 1', slug: 'formula-1-showcase' },
        { title: 'FORMULA 1', slug: 'formula-1-trials' },
        { title: 'FORMULA 1', slug: 'formula-1-preview' },
        { title: 'FORMULA 1', slug: 'formula-1-qualifying' },
        { title: 'FORMULA 1', slug: 'formula-1-finals' }
    ];

    return (
        <div className="series-layout">
            
            {/* GŁÓWNA ZAWARTOŚĆ - GRID KART */}
            <main className="series-main">
                <div className="series-grid">
                    {seriesData.map((series, index) => (
                        <div className="series-card" key={index}>
                            <div className="card-background"></div>

                            <div className="card-content">
                                <h2>{series.title}</h2>
                                <Link to={`/series/${series.slug}`} className="btn-read-more">VIEW SERIES</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* STOPKA */}
            <footer className="apex-footer">
                <div className="status">
                    <span className="dot green"></span> SERVER: OPTIMAL
                    <span className="latency">LATENCY: 12MS</span>
                </div>
                <div className="meta">
                    <span>v2.4.0_STABLE</span>
                    <span>© 2024 APEX DATA SYSTEMS</span>
                </div>
            </footer>
        </div>
    );
};

export default SeriesView;