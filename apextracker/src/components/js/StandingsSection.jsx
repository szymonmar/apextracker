import React from 'react';
import '../css/StandingsSection.css';

const StandingsSection = ({ title, standings, fieldsConfig }) => {
    return (
        <section className="standings-section">
            <h2 className="section-title">{title}</h2>
            <div className="standings-list">
                {standings.map((standing, index) => (
                    <div key={index} className="standing-row">
                        {fieldsConfig.map((field) => (
                            <span key={field.key} className={field.className}>
                                {standing[field.key]}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StandingsSection;
