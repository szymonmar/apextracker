import { Link } from "react-router-dom";
import "../css/LivePage.css";
import SessionsListSidebar from "../../components/js/SessionsListSidebar";
import LivePageHero from "../../components/js/LivePageHero";

function LivePage() {
  return (
    <div className="live-page app-shell">
        <SessionsListSidebar sessions={[
          { id: 1, name: 'MONACO GP',  serieShort: 'F1', time: 'SAT 13:30', active: true},,
          { id: 2, name: '24H OF LE MANS', serieShort: 'WEC', time: 'SAT 16:00', active: false},
          { id: 3, name: 'ITALIAN GP', serieShort: 'MGP', time: 'SAT 15:00', active: false},
        ]} />

        <div className="live-feed-content">
          <div className="event-header">
            <h1>FORMULA 1 MONACO GRAND PRIX</h1>
            <div className="event-meta">
              <span>⏱ QUALIFYING</span>
              <span>🌡 TRACK TEMP: 42°C</span>
              <span>🌧 RAIN PROB: 12%</span>
            </div>
          </div>

          <LivePageHero startTime={new Date('2026-06-01T13:30:00')}finished={false} />

          <section className="timeline-section">
            <div className="section-header">
              <h3>ROUND TIMELINE (JUN 5-7)</h3>
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
    </div>
  );
}

export default LivePage;
