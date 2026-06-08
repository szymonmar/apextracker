import { Link } from "react-router-dom";
import "../css/LivePage.css";
import SessionsListSidebar from "../../components/js/SessionsListSidebar";
import LivePageHero from "../../components/js/LivePageHero";
import TimelineTable from "../../components/js/TimelineTable";
import StatusCard from "../../components/js/StatusCard";

function LivePage() {
  const timelineEvents = [
    {
      session: 'PRACTICE 1',
      status: 'COMPLETED',
      statusTag: null,
      time: 'FRIDAY 13:30',
      trackTemp: '38°C',
      action: 'WATCH HIGHLIGHTS',
      actionType: 'link',
      isActive: false
    },
    {
      session: 'QUALIFYING',
      status: null,
      statusTag: { label: 'PENDING', className: 'tag-red-outline' },
      time: 'SATURDAY 16:00',
      trackTemp: '41°C (EST)',
      action: 'ENTER LOBBY',
      actionType: 'button',
      isActive: true
    },
    {
      session: 'GRAND PRIX',
      status: 'UPCOMING',
      statusTag: null,
      time: 'SUNDAY 15:00',
      trackTemp: '35°C (EST)',
      actionDisabled: 'LOCKED',
      action: null,
      isActive: false
    }
  ];

  const statusCards = [
    {
      title: '❗ URGENT_TELEMETRY',
      message: 'PU_01 REPLACEMENT CONFIRMED FOR DRIVER 44. STARTING POS PENALTY APPLIED.',
      timestamp: 'T-MINUS 02:47:11',
      variant: 'red'
    },
    {
      title: 'ℹ️ CIRCUIT_STATE',
      message: 'TRACK SURFACE DEGRADATION IN SECTOR 3 HIGHER THAN MODELLED. EXPECT HIGH TIRE WEAR.',
      timestamp: 'T-MINUS 02:30:04',
      variant: 'blue'
    },
    {
      title: '✅ STREAM_STATUS',
      message: 'GLOBAL FEED SYNCED. 4K HDR MASTERING ACTIVE. LOW LATENCY PROTOCOL ENABLED.',
      timestamp: 'READY_FOR_SPECTRUM',
      variant: 'green'
    }
  ];

  return (
    <div className="live-page app-shell">
        <SessionsListSidebar sessions={[
          { id: 1, name: 'MONACO GP',  serieShort: 'F1', time: 'SAT 13:30', active: true},
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

          <TimelineTable events={timelineEvents} />

          <section className="status-cards-grid">
            {statusCards.map((card, index) => (
              <StatusCard
                key={index}
                title={card.title}
                message={card.message}
                timestamp={card.timestamp}
                variant={card.variant}
              />
            ))}
          </section>
        </div>
    </div>
  );
}

export default LivePage;
