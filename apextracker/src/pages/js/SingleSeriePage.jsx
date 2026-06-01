import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../css/SingleSeriePage.css';
import Hero from '../../components/js/Hero';
import CalendarCard from '../../components/js/CalendarCard';

const SingleSeriePage = () => {
    const { slug } = useParams();
    const seriesName = slug ? slug.replace(/-/g, ' ').toUpperCase() : 'FORMULA 1';

    return (
        <div className="single-serie-page">

                <Hero
                    title={seriesName}
                    isLive={false}
                    paragraph="High speed, low downforce. The Wall of Champions awaits for the ultimate test of precision."
                    ctaText="Watch Last Round"
                    ctaLink="/live"
                />

                <div className='app-shell'>
                
                    <div className="content-grid">

                        {/* LEWA KOLUMNA: KALENDARZ */}
                        <section className="calendar-section">
                            <h2 className="section-title">CALENDAR</h2>
                            <div className="calendar-grid">
                                <CalendarCard event={{
                                    id: 1,
                                    dateRange: 'JUN 15-16',
                                    subtitle: seriesName,
                                    title: 'ITALIAN GRAND PRIX',
                                    location: 'AUTODROMO NAZIONALE DI MONZA',
                                    ctaText: 'READ MORE',
                                    ctaLink: '#'
                                }} />
                                <CalendarCard event={{
                                    id: 2,
                                    dateRange: 'JUN 23',
                                    subtitle: seriesName,
                                    title: 'CANADIAN GRAND PRIX',
                                    location: 'CIRCUIT GILLES VILLENEUVE',
                                    ctaText: 'READ MORE',
                                    ctaLink: '#'
                                }} />
                                <CalendarCard event={{
                                    id: 1,
                                    dateRange: 'JUN 15-16',
                                    subtitle: seriesName,
                                    title: 'ITALIAN GRAND PRIX',
                                    location: 'AUTODROMO NAZIONALE DI MONZA',
                                    ctaText: 'READ MORE',
                                    ctaLink: '#'
                                }} />
                                <CalendarCard event={{
                                    id: 2,
                                    dateRange: 'JUN 23',
                                    subtitle: seriesName,
                                    title: 'CANADIAN GRAND PRIX',
                                    location: 'CIRCUIT GILLES VILLENEUVE',
                                    ctaText: 'READ MORE',
                                    ctaLink: '#'
                                }} />
                            </div>
                        </section>

                        {/* PRAWA KOLUMNA: NEWS */}
                        <section className="news-section">
                            <h2 className="section-title">NEWS</h2>
                            <div className="card news-card">
                                <div className="news-image"></div>
                                <div className="news-content">
                                    <span className="news-date">JUN 23</span>
                                    <h4>NEWS HEADING</h4>
                                    <p>LOREM IPSUM LOREM IPSUM BLA BLA LOREM IPSUM LOREM IPSUM LOREM IPSUM BLA BLA BLA LOREM IPSUM LOREM IPSUM LOREM IPSUM BLA BLA BLA LOREM IPSUM LOREM IPSUM LOREM IPSUM BLA BLA LOREM IPSUM...</p>
                                    <a href="#" className="link-red">READ MORE</a>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* DOLNA SEKCJA: TABELE MISTRZOSTW */}
                    <div className="standings-grid">

                        {/* Klasyfikacja Kierowców */}
                        <section className="standings-section">
                            <h2 className="section-title">DRIVERS CHAMPIONSHIP</h2>
                            <div className="standings-list">
                                <div className="standing-row">
                                    <span className="rank">01</span>
                                    <span className="driver-number">77</span>
                                    <span className="name">LEWIS HAMILTON</span>
                                    <span className="team">MERCEDES-BENZ AMG</span>
                                    <span className="points">112 pts</span>
                                </div>
                                <div className="standing-row">
                                    <span className="rank">02</span>
                                    <span className="driver-number">33</span>
                                    <span className="name">MAX VERSTAPPEN</span>
                                    <span className="team">RED BULL RACING</span>
                                    <span className="points">85 pts</span>
                                </div>
                                <div className="standing-row">
                                    <span className="rank">03</span>
                                    <span className="driver-number">16</span>
                                    <span className="name">CHARLES LECLERC</span>
                                    <span className="team">SCUDERIA FERRARI</span>
                                    <span className="points">67 pts</span>
                                </div>
                            </div>
                        </section>

                        {/* Klasyfikacja Konstruktorów */}
                        <section className="standings-section">
                            <h2 className="section-title">CONSTRUCTORS CHAMPIONSHIP</h2>
                            <div className="standings-list">
                                <div className="standing-row">
                                    <span className="rank">01</span>
                                    <span className="name">MERCEDES-BENZ AMG</span>
                                    <span className="points">112 pts</span>
                                </div>
                                <div className="standing-row">
                                    <span className="rank">02</span>
                                    <span className="name">RED BULL RACING</span>
                                    <span className="points">87 pts</span>
                                </div>
                                <div className="standing-row">
                                    <span className="rank">03</span>
                                    <span className="name">SCUDERIA FERRARI</span>
                                    <span className="points">67 pts</span>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>

            {/* STOPKA (STATUS BARA) */}
            {/* <footer className="apex-footer">
                <div className="status">
                    <span className="dot green"></span> SERVER: OPTIMAL
                    <span className="latency">LATENCY: 12MS</span>
                </div>
                <div className="meta">
                    <span>v2.4.0_STABLE</span>
                    <span>© 2024 APEX DATA SYSTEMS</span>
                </div>
            </footer> */}
        </div>
    );
};

export default SingleSeriePage;