import React from 'react';
import '../css/EventDetailPanel.css';

function EventDetailPanel({ event, isOpen, onClose }) {
  return (
    <aside className={`event-detail-panel ${isOpen ? 'open' : ''}`}>
      <div className="panel-header">
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>

      {event && (
        <div className="panel-content">
          <p className="panel-subtitle">CIRCUIT ANALYTICS</p>
          
          <div className="circuit-map-placeholder">
            {/* Miejsce na grafikę toru */}
            <span className="placeholder-icon">🏎️</span>
          </div>

          <div className="stats-row">
            <div className="stat-box">
              <span className="stat-label">LAP RECORD</span>
              <span className="stat-value">1:18.166</span>
            </div>
            <div className="stat-box">
              <span className="stat-label">TOP SPEED</span>
              <span className="stat-value">298 KM/H</span>
            </div>
          </div>

          <div className="session-timeline">
            <p className="panel-subtitle">SESSION TIMELINE</p>
            <ul className="timeline-list">
              <li>
                <span className="dot"></span>
                <span className="time">FRI 11:30</span>
                <span className="name">PRACTICE 1</span>
              </li>
              <li>
                <span className="dot"></span>
                <span className="time">FRI 15:00</span>
                <span className="name">PRACTICE 2</span>
              </li>
              <li className="active">
                <span className="dot red"></span>
                <span className="time red">SAT 14:00</span>
                <span className="name red">QUALIFYING</span>
              </li>
              <li>
                <span className="dot"></span>
                <span className="time">SUN 15:00</span>
                <span className="name">GRAND PRIX</span>
              </li>
            </ul>
          </div>

          <button className="telemetry-btn">ACCESS LIVE TELEMETRY</button>
        </div>
      )}
    </aside>
  );
}

export default EventDetailPanel;