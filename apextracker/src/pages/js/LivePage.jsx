import "../css/LivePage.css";
import SessionsListSidebar from "../../components/js/SessionsListSidebar";
import LivePageHero from "../../components/js/LivePageHero";
import LiveTimelineSection from "../../components/js/LiveTimelineSection";
import LiveStatusCard from "../../components/js/LiveStatusCard";

const liveSessions = [
  { id: 1, name: "MONACO GP", serieShort: "F1", time: "SAT 13:30", active: true },
  { id: 2, name: "24H OF LE MANS", serieShort: "WEC", time: "SAT 16:00", active: false },
  { id: 3, name: "ITALIAN GP", serieShort: "MGP", time: "SAT 15:00", active: false },
];

const timelineColumns = ["SESSION", "STATUS", "LOCAL TIME", "TRACK TEMP", "ACTION"];

const timelineRows = [
  {
    id: 1,
    session: "PRACTICE 1",
    status: { type: "text", value: "COMPLETED", muted: true },
    localTime: "FRIDAY 13:30",
    trackTemp: "38°C",
    action: { type: "link", value: "WATCH HIGHLIGHTS", href: "#", className: "action-link" },
  },
  {
    id: 2,
    session: "QUALIFYING",
    status: { type: "tag", value: "PENDING", className: "tag-red-outline" },
    localTime: "SATURDAY 16:00",
    trackTemp: "41°C (EST)",
    action: { type: "button", value: "ENTER LOBBY", className: "btn-red-small" },
    active: true,
  },
  {
    id: 3,
    session: "GRAND PRIX",
    status: { type: "text", value: "UPCOMING", muted: true },
    localTime: "SUNDAY 15:00",
    trackTemp: "35°C (EST)",
    action: { type: "text", value: "LOCKED", muted: true },
  },
];

const statusCards = [
  {
    id: 1,
    title: "❗ URGENT_TELEMETRY",
    accentClass: "red-accent",
    text: "PU_01 REPLACEMENT CONFIRMED FOR DRIVER 44. STARTING POS PENALTY APPLIED.",
    timestamp: "T-MINUS 02:47:11",
  },
  {
    id: 2,
    title: "ℹ️ CIRCUIT_STATE",
    accentClass: "blue-accent",
    text: "TRACK SURFACE DEGRADATION IN SECTOR 3 HIGHER THAN MODELLED. EXPECT HIGH TIRE WEAR.",
    timestamp: "T-MINUS 02:30:04",
  },
  {
    id: 3,
    title: "✅ STREAM_STATUS",
    accentClass: "green-accent",
    text: "GLOBAL FEED SYNCED. 4K HDR MASTERING ACTIVE. LOW LATENCY PROTOCOL ENABLED.",
    timestamp: "READY_FOR_SPECTRUM",
  },
];

function LivePage() {
  return (
    <div className="live-page app-shell">
        <SessionsListSidebar sessions={liveSessions} />

        <div className="live-feed-content">
          <div className="event-header">
            <h1>FORMULA 1 MONACO GRAND PRIX</h1>
            <div className="event-meta">
              <span>⏱ QUALIFYING</span>
              <span>🌡 TRACK TEMP: 42°C</span>
              <span>🌧 RAIN PROB: 12%</span>
            </div>
          </div>

          <LivePageHero startTime={new Date("2026-06-01T13:30:00")} finished={false} />

          <LiveTimelineSection title="ROUND TIMELINE (JUN 5-7)" columns={timelineColumns} rows={timelineRows} />

          <section className="status-cards-grid">
            {statusCards.map((card) => (
              <LiveStatusCard key={card.id} {...card} />
            ))}
          </section>
        </div>
    </div>
  );
}

export default LivePage;
