import { Link } from "react-router-dom";
import "./LiveSession.css";

function LiveSession() {
  return (
    <div className="gridstream-layout">
      <aside className="sidebar">
        <div className="brand">GRIDSTREAM</div>
        <div className="user-profile">
          <div className="avatar"></div>
          <div>
            <div className="username">ANALYST_01</div>
            <div className="status">
              <span className="dot"></span> TELEMETRY ACTIVE
            </div>
          </div>
        </div>
        <nav className="nav-menu">
        </nav>
      </aside>

      <main className="main-content">
        <header className="top-navbar">
          <div className="nav-links">
          </div>
          <div className="nav-actions">
            <input
              type="text"
              placeholder="SEARCH TELEMETRY..."
              className="search-bar"
              aria-label="Search telemetry"
            />
            <button className="btn-red">GO LIVE</button>
          </div>
        </header>

        <div className="live-feed-content">
          <div className="event-header">
            <div className="tags">
              <span className="tag tag-red">LIVE NOW</span>
              <span className="breadcrumb">
                LOC: MONTE CARLO, MONACO // MAIN_STREAM_LINK_01
              </span>
            </div>
            <h1>FORMULA 1 MONACO GRAND PRIX</h1>
            <div className="event-meta">
              <span>⏱ NEXT SESSION: QUALIFYING</span>
              <span>🌡 TRACK: 42°C</span>
              <span>🌧 RAIN PROB: 12%</span>
            </div>
          </div>

          <section className="hero-grid">
            <div className="countdown-panel">
              <div className="status-indicator">
                <span className="dot"></span> COUNTDOWN TO GREEN LIGHT
              </div>
              <div className="timer">
                <div className="time-box">
                  <span className="number">02</span>
                  <span className="label">HRS</span>
                </div>
                <span className="separator">:</span>
                <div className="time-box">
                  <span className="number">48</span>
                  <span className="label">MIN</span>
                </div>
                <span className="separator">:</span>
                <div className="time-box">
                  <span className="number red">14</span>
                  <span className="label">SEC</span>
                </div>
              </div>
              <div className="action-buttons">
                <button className="btn-red">▶ JOIN BROADCAST</button>
                <button className="btn-outline">SET REMINDER</button>
              </div>
            </div>

            <div className="broadcast-panel">
              <h3>BROADCAST UNITS</h3>
              <div className="provider-list">
                <div className="provider-card active">
                  <div className="provider-logo f1">F1TV</div>
                  <div className="provider-info">
                    <h4>PRO ACCESS</h4>
                    <p>UHD STREAM + TELEMETRY</p>
                  </div>
                  <span className="arrow">→</span>
                </div>
                <div className="provider-card locked">
                  <div className="provider-logo sky">SKY</div>
                  <div className="provider-info">
                    <h4>SKY SPORTS F1</h4>
                    <p>SATELLITE / CABLE</p>
                  </div>
                  <span className="lock-icon">🔒</span>
                </div>
              </div>
              <div className="weather-widget">
                <div className="weather-info">
                  <span className="weather-label">LOCAL WEATHER</span>
                  <span className="weather-temp">24°C / SUNNY</span>
                </div>
                <div className="weather-icon">☀️</div>
              </div>
            </div>
          </section>

          <section className="timeline-section">
            <div className="section-header">
              <h3>SESSION TIMELINE (MAY 24-26)</h3>
              <div className="legend">
                <span className="dot gray"></span> DONE <span className="dot red"></span> ACTIVE
              </div>
            </div>
            <div className="timeline-table">
              <div className="table-row table-head">
                <div>SESSION</div>
                <div>STATUS</div>
                <div>LOCAL TIME</div>
                <div>TRACK TEMP</div>
                <div>ACTION</div>
              </div>
              <div className="table-row">
                <div>PRACTICE 1</div>
                <div className="status-text muted">COMPLETED</div>
                <div>FRIDAY 13:30</div>
                <div>38°C</div>
                <div>
                  <a href="#" className="action-link">WATCH HIGHLIGHTS</a>
                </div>
              </div>
              <div className="table-row active-row">
                <div>QUALIFYING</div>
                <div>
                  <span className="tag tag-red-outline">PENDING</span>
                </div>
                <div>SATURDAY 16:00</div>
                <div>41°C (EST)</div>
                <div>
                  <button className="btn-red-small">ENTER LOBBY</button>
                </div>
              </div>
              <div className="table-row">
                <div>GRAND PRIX</div>
                <div className="status-text muted">UPCOMING</div>
                <div>SUNDAY 15:00</div>
                <div>35°C (EST)</div>
                <div className="muted">LOCKED</div>
              </div>
            </div>
          </section>

          <section className="status-cards-grid">
            <div className="status-card">
              <h4 className="card-title red-accent">❗ URGENT_TELEMETRY</h4>
              <p>
                PU_01 REPLACEMENT CONFIRMED FOR DRIVER 44. STARTING POS PENALTY APPLIED.
              </p>
              <span className="timestamp">T-MINUS 02:47:11</span>
            </div>
            <div className="status-card">
              <h4 className="card-title blue-accent">ℹ️ CIRCUIT_STATE</h4>
              <p>
                TRACK SURFACE DEGRADATION IN SECTOR 3 HIGHER THAN MODELLED. EXPECT HIGH TIRE WEAR.
              </p>
              <span className="timestamp">T-MINUS 02:30:04</span>
            </div>
            <div className="status-card">
              <h4 className="card-title green-accent">✅ STREAM_STATUS</h4>
              <p>
                GLOBAL FEED SYNCED. 4K HDR MASTERING ACTIVE. LOW LATENCY PROTOCOL ENABLED.
              </p>
              <span className="timestamp">READY_FOR_SPECTRUM</span>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LiveSession;
