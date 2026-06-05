import { useState } from "react";
import "../css/LivePage.css";
import SessionsListSidebar from "../../components/js/SessionsListSidebar";
import LivePageHero from "../../components/js/LivePageHero";
import LiveTimelineSection from "../../components/js/LiveTimelineSection";
import LiveStatusCard from "../../components/js/LiveStatusCard";

const SESSIONS_DATA = [
  {
    id: 1,
    name: "MONACO GP",
    fullName: "FORMULA 1 MONACO GRAND PRIX",
    serieShort: "F1",
    time: "SAT 13:30",
    active: true,
    slug: "monaco-gp",
    heroStartTime: new Date("2026-06-04T20:30:00"),
    isFinished: false,
    heroImageUrl: null,
    broadcastUrl: "/live/f1-monaco-gp-2026",
    eventMeta: [
      { icon: "⏱", label: "QUALIFYING" },
      { icon: "🌡", label: "TRACK TEMP: 42°C" },
      { icon: "🌧", label: "RAIN PROB: 12%" },
    ],
    timelineTitle: "ROUND TIMELINE (JUN 5-7)",
    timelineRows: [
      {
        id: 1,
        session: "PRACTICE 1",
        status: { type: "text", value: "COMPLETED", muted: true },
        localTime: "FRIDAY 13:30",
        trackTemp: "38°C",
        action: { type: "link", value: "WATCH REPLAY", href: "/live/f1-monaco-gp-2026-fp1", className: "action-link" },
      },
      {
        id: 2,
        session: "QUALIFYING",
        status: { type: "tag", value: "PENDING", className: "tag-red-outline" },
        localTime: "SATURDAY 16:00",
        trackTemp: "41°C (EST)",
        action: { type: "button", value: "ENTER LOBBY", href: "/live/f1-monaco-gp-2026-qualifying", className: "btn-red-small" },
        active: true,
      },
      {
        id: 3,
        session: "GRAND PRIX",
        status: { type: "text", value: "UPCOMING", muted: true },
        localTime: "SUNDAY 15:00",
        trackTemp: "35°C (EST)",
        action: { type: "text", value: "PENDING", muted: true },
      },
    ],
    statusCards: [
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
    ],
  },
  {
    id: 2,
    name: "24H OF LE MANS",
    fullName: "FIA WEC 24 HOURS OF LE MANS",
    serieShort: "WEC",
    time: "SAT 16:00",
    active: false,
    slug: "le-mans-24h",
    heroStartTime: new Date("2026-06-07T16:00:00"),
    isFinished: false,
    heroImageUrl: null,
    broadcastUrl: "/live/wec-le-mans-24h-2026",
    eventMeta: [
      { icon: "⏱", label: "RACE START" },
      { icon: "🌡", label: "TRACK TEMP: 36°C" },
      { icon: "🌧", label: "RAIN PROB: 34%" },
    ],
    timelineTitle: "RACE SCHEDULE (JUN 7-8)",
    timelineRows: [
      {
        id: 1,
        session: "FREE PRACTICE",
        status: { type: "text", value: "COMPLETED", muted: true },
        localTime: "WEDNESDAY 09:00",
        trackTemp: "29°C",
        action: { type: "link", value: "WATCH REPLAY", href: "/live/wec-le-mans-24h-2026-fp1", className: "action-link" },
      },
      {
        id: 2,
        session: "HYPERPOLE",
        status: { type: "text", value: "COMPLETED", muted: true },
        localTime: "THURSDAY 20:00",
        trackTemp: "22°C",
        action: { type: "link", value: "WATCH REPLAY", href: "/live/wec-le-mans-24h-2026-hp1", className: "action-link" },
      },
      {
        id: 3,
        session: "24H RACE",
        status: { type: "tag", value: "UPCOMING", className: "tag-red-outline" },
        localTime: "SATURDAY 16:00",
        trackTemp: "36°C (EST)",
        action: { type: "button", value: "ENTER LOBBY", href: "/live/wec-le-mans-24h-2026-race", className: "btn-red-small" },
        active: true,
      },
    ],
    statusCards: [
      {
        id: 1,
        title: "⚠️ WEATHER_ALERT",
        accentClass: "red-accent",
        text: "HEAVY RAIN WINDOW FORECAST BETWEEN HOUR 6-9. MIXED CONDITIONS EXPECTED OVERNIGHT.",
        timestamp: "T-MINUS 04:15:00",
      },
      {
        id: 2,
        title: "ℹ️ ENTRY_LIST",
        accentClass: "blue-accent",
        text: "62 CARS CONFIRMED ACROSS HYPERCAR, LMP2, LMGT3. RECORD MANUFACTURER COUNT: 14.",
        timestamp: "CONFIRMED",
      },
      {
        id: 3,
        title: "✅ BROADCAST_READY",
        accentClass: "green-accent",
        text: "24H LIVE FEED ACTIVE. MULTISTREAM WITH 8 ONBOARD CAMERAS. PIT LANE AUDIO ENABLED.",
        timestamp: "ALL_SYSTEMS_GO",
      },
    ],
  },
  {
    id: 3,
    name: "ITALIAN GP",
    fullName: "MOTOGP GRAN PREMIO D'ITALIA",
    serieShort: "MGP",
    time: "SUN 14:00",
    active: false,
    slug: "italian-gp-motogp",
    heroStartTime: new Date("2026-06-08T14:00:00"),
    isFinished: false,
    heroImageUrl: null,
    broadcastUrl: "/live/motogp-italian-gp-2026",
    eventMeta: [
      { icon: "⏱", label: "MAIN RACE" },
      { icon: "🌡", label: "TRACK TEMP: 51°C" },
      { icon: "🌧", label: "RAIN PROB: 4%" },
    ],
    timelineTitle: "RACE WEEKEND (JUN 6-8)",
    timelineRows: [
      {
        id: 1,
        session: "FREE PRACTICE",
        status: { type: "text", value: "COMPLETED", muted: true },
        localTime: "FRIDAY 10:45",
        trackTemp: "47°C",
        action: { type: "link", value: "WATCH REPLAY", href: "/live/motogp-italian-gp-2026-fp1", className: "action-link" },
      },
      {
        id: 2,
        session: "SPRINT RACE",
        status: { type: "text", value: "COMPLETED", muted: true },
        localTime: "SATURDAY 15:00",
        trackTemp: "49°C",
        action: { type: "link", value: "WATCH REPLAY", href: "/live/motogp-italian-gp-2026-sprint", className: "action-link" },
      },
      {
        id: 3,
        session: "MAIN RACE",
        status: { type: "tag", value: "UPCOMING", className: "tag-red-outline" },
        localTime: "SUNDAY 14:00",
        trackTemp: "51°C (EST)",
        action: { type: "button", value: "ENTER LOBBY", href: "/live/motogp-italian-gp-2026-race", className: "btn-red-small" },
        active: true,
      },
    ],
    statusCards: [
      {
        id: 1,
        title: "ℹ️ GRID_UPDATE",
        accentClass: "blue-accent",
        text: "#1 STARTS FROM POLE. FRONT ROW LOCKOUT FOR FACTORY SQUAD. SECOND ROW SPLIT.",
        timestamp: "POST-QUALIFYING",
      },
      {
        id: 2,
        title: "⚠️ TRACK_TEMP",
        accentClass: "red-accent",
        text: "ASPHALT SURFACE EXCEEDING 51°C. TIRE MANAGEMENT CRITICAL IN FINAL 5 LAPS.",
        timestamp: "T-MINUS 01:10:00",
      },
      {
        id: 3,
        title: "✅ STREAM_STATUS",
        accentClass: "green-accent",
        text: "MUGELLO CIRCUIT FEED ONLINE. HELICOPTER CAM AND PIT LANE VIEWS AVAILABLE.",
        timestamp: "READY_FOR_SPECTRUM",
      },
    ],
  },
];

const timelineColumns = ["SESSION", "STATUS", "LOCAL TIME", "TRACK TEMP", "ACTION"];

function LivePage() {
  const [selectedId, setSelectedId] = useState(1);
  const [animating, setAnimating] = useState(false);

  const session = SESSIONS_DATA.find((s) => s.id === selectedId);

  const handleSelectSession = (id) => {
    if (id === selectedId) return;
    setAnimating(true);
    setTimeout(() => {
      setSelectedId(id);
      setAnimating(false);
    }, 220);
  };

  return (
    <div className="live-page app-shell">
      <SessionsListSidebar
        sessions={SESSIONS_DATA}
        selectedId={selectedId}
        onSelect={handleSelectSession}
      />

      <div className={`live-feed-content ${animating ? "content-fade-out" : "content-fade-in"}`}>
        <div className="event-header">
          <h1>{session.fullName}</h1>
          <div className="event-meta">
            {session.eventMeta.map((m, i) => (
              <span key={i}>{m.icon} {m.label}</span>
            ))}
          </div>
        </div>

        <LivePageHero
          startTime={session.heroStartTime}
          finished={session.isFinished}
          imageUrl={session.heroImageUrl}
          broadcastUrl={session.broadcastUrl}
        />

        <LiveTimelineSection
          title={session.timelineTitle}
          columns={timelineColumns}
          rows={session.timelineRows}
        />

        <section className="status-cards-grid">
          {session.statusCards.map((card) => (
            <LiveStatusCard key={card.id} {...card} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default LivePage;