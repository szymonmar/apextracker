import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../css/SingleSeriePage.css';
import Hero from '../../components/js/Hero';
import CalendarCard from '../../components/js/CalendarCard';
import StandingsSection from '../../components/js/StandingsSection';

const SingleSeriePage = () => {
    const { slug } = useParams();
    const seriesName = slug ? slug.replace(/-/g, ' ').toUpperCase() : 'FORMULA 1';

    // Dane dla Drivers Championship
    const driversStandings = [
        {
            rank: '01',
            driverNumber: '77',
            name: 'LEWIS HAMILTON',
            team: 'MERCEDES-BENZ AMG',
            points: '112 pts'
        },
        {
            rank: '02',
            driverNumber: '33',
            name: 'MAX VERSTAPPEN',
            team: 'RED BULL RACING',
            points: '85 pts'
        },
        {
            rank: '03',
            driverNumber: '16',
            name: 'CHARLES LECLERC',
            team: 'SCUDERIA FERRARI',
            points: '67 pts'
        }
    ];

    // Konfiguracja pól dla Drivers Championship
    const driversFieldsConfig = [
        { key: 'rank', className: 'rank' },
        { key: 'driverNumber', className: 'driver-number' },
        { key: 'name', className: 'name' },
        { key: 'team', className: 'team' },
        { key: 'points', className: 'points' }
    ];

    // Dane dla Constructors Championship
    const constructorsStandings = [
        {
            rank: '01',
            name: 'MERCEDES-BENZ AMG',
            points: '112 pts'
        },
        {
            rank: '02',
            name: 'RED BULL RACING',
            points: '87 pts'
        },
        {
            rank: '03',
            name: 'SCUDERIA FERRARI',
            points: '67 pts'
        }
    ];

    // Konfiguracja pól dla Constructors Championship
    const constructorsFieldsConfig = [
        { key: 'rank', className: 'rank' },
        { key: 'name', className: 'name' },
        { key: 'points', className: 'points' }
    ];

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
                        <StandingsSection
                            title="DRIVERS CHAMPIONSHIP"
                            standings={driversStandings}
                            fieldsConfig={driversFieldsConfig}
                        />
                        <StandingsSection
                            title="CONSTRUCTORS CHAMPIONSHIP"
                            standings={constructorsStandings}
                            fieldsConfig={constructorsFieldsConfig}
                        />
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