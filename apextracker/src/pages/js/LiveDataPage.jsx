import { useState, useEffect, useRef } from 'react';
import { Trophy, Clock, Flag, Radio, ChevronLeft, ChevronRight, Maximize2, Settings, X } from 'lucide-react';
import '../css/LiveDataPage.css';

const MOCK_LOGS = [
  { id: 1, time: '14:00:00', timestamp: 0, text: 'Formation Lap started.' },
  { id: 2, time: '14:02:11', timestamp: 131, text: 'LIGHTS OUT: Race started successfully.' },
  { id: 3, time: '14:03:05', timestamp: 185, text: 'LEC locks up into Turn 1, drops to P3.' },
  { id: 4, time: '14:05:32', timestamp: 332, text: 'VER takes the lead from LEC.' },
  { id: 5, time: '14:08:40', timestamp: 520, text: 'DRS has been enabled.' },
  { id: 6, time: '14:12:45', timestamp: 765, text: 'NOR sets the fastest lap: 1:18.432.' },
  { id: 7, time: '14:15:22', timestamp: 922, text: 'TEAM RADIO (HAM): "Grip levels are dropping on these softs."' },
  { id: 8, time: '14:19:10', timestamp: 1150, text: 'COL enters the pit lane - Switching to Medium tires.' },
  { id: 9, time: '14:22:19', timestamp: 1339, text: 'HAM pit stop (2.4s) - Switched to Hard tires.' },
  { id: 10, time: '14:25:55', timestamp: 1555, text: 'PIA overtakes RUS for P5 at the chicane.' },
  { id: 11, time: '14:30:12', timestamp: 1812, text: 'VER pit stop (2.1s) - Retains the virtual lead.' },
  { id: 12, time: '14:35:02', timestamp: 2102, text: 'YELLOW FLAG in Sector 2 - GAS spin.' },
  { id: 13, time: '14:36:15', timestamp: 2175, text: 'TRACK CLEAR - Green Flag in all sectors.' },
  { id: 14, time: '14:39:40', timestamp: 2380, text: 'HAD reporting power loss on the main straight.' },
  { id: 15, time: '14:41:03', timestamp: 2463, text: 'MECHANICAL FAILURE: HAD retires in the pit lane.' },
  { id: 16, time: '14:44:18', timestamp: 2658, text: 'Leaders are now navigating through backmarkers/blue flags.' },
  { id: 17, time: '14:48:51', timestamp: 2931, text: 'COLLISION: RUS and ANT under investigation.' },
  { id: 18, time: '14:52:03', timestamp: 3123, text: 'PENALTY: RUS received a 5-second time penalty.' },
  { id: 19, time: '14:53:45', timestamp: 3225, text: 'SAFETY CAR DEPLOYED - Debris on track at Turn 4.' },
  { id: 20, time: '14:55:10', timestamp: 3310, text: 'LEC, NOR, and PIA dive into pits for fresh Soft tires.' },
  { id: 21, time: '14:57:30', timestamp: 3450, text: 'SAFETY CAR IN THIS LAP - Race will resume.' },
  { id: 22, time: '14:58:15', timestamp: 3495, text: 'GREEN FLAG: Race restarted. VER nails the restart.' },
  { id: 23, time: '14:59:02', timestamp: 3542, text: 'NOR overtakes LEC for P2 with a brilliant move!' },
  { id: 24, time: '15:00:00', timestamp: 3600, text: 'FINAL LAP: VER leads NOR by 0.852 seconds.' },
  { id: 25, time: '15:01:24', timestamp: 3684, text: 'CHEQUERED FLAG: Max Verstappen wins the Grand Prix!' }
];

const INITIAL_DRIVERS = [
  { id: 1, pos: 1, code: 'VER', color: '#004a90', interval: 'Leader', speed: 0.024 },
  { id: 2, pos: 2, code: 'LEC', color: '#cd001f', interval: '+1.234s', speed: 0.038 },
  { id: 3, pos: 3, code: 'NOR', color: '#FF8700', interval: '+0.552s', speed: 0.039 },
  { id: 4, pos: 4, code: 'HAM', color: '#cd001f', interval: '+2.110s', speed: 0.037 },
  { id: 5, pos: 5, code: 'PIA', color: '#FF8700', interval: '+0.890s', speed: 0.036 },
  { id: 6, pos: 6, code: 'RUS', color: '#00D2BE', interval: '0.676s', speed: 0.045 },
  { id: 7, pos: 7, code: 'ANT', color: '#00D2BE', interval: '+1.234s', speed: 0.038 },
  { id: 8, pos: 8, code: 'HAD', color: '#004a90', interval: '+0.552s', speed: 0.059 },
  { id: 9, pos: 9, code: 'GAS', color: '#1879d4', interval: '+2.110s', speed: 0.047 },
  { id: 10, pos: 10, code: 'COL', color: '#1879d4', interval: '+0.890s', speed: 0.016 },
];

const CAMERA_FEEDS = [
  { id: 1, label: 'Onboard — VER', driver: 'VER', color: '#004a90', angle: 'Onboard' },
  { id: 2, label: 'Onboard — NOR', driver: 'NOR', color: '#FF8700', angle: 'Onboard' },
  { id: 3, label: 'Pit Lane Cam', driver: null, color: '#6b7280', angle: 'Static' },
  { id: 4, label: 'Helicopter Shot', driver: null, color: '#374151', angle: 'Aerial' },
];

const MAX_SESSION_SECONDS = 3700;

export default function LiveDataPage({ svgUrl }) {
  const [drivers, setDrivers] = useState(INITIAL_DRIVERS);
  const [lap, setLap] = useState(42);

  const [pathData, setPathData] = useState('');
  const [viewBox, setViewBox] = useState('0 0 400 300');
  const [positions, setPositions] = useState({});
  const [loading, setLoading] = useState(true);

  const [currentLogs, setCurrentLogs] = useState(MOCK_LOGS.slice(0, 15));
  const [timelineValue, setTimelineValue] = useState(MAX_SESSION_SECONDS);
  const [isLive, setIsLive] = useState(true);

  // Panel slide state
  const [showCameras, setShowCameras] = useState(false);

  // Camera fullscreen state: null = grid, number = that camera's id fills the grid
  const [expandedCamera, setExpandedCamera] = useState(null);
  const [fullscreenCamera, setFullscreenCamera] = useState(null);

  const trackPathRef = useRef(null);
  const logsWrapperRef = useRef(null);
  const isInitialRender = useRef(true);

  const formatTimeOffset = (secondsFromEnd) => {
    if (secondsFromEnd <= 0) return 'NOW';
    const hrs = Math.floor(secondsFromEnd / 3600);
    const mins = Math.floor((secondsFromEnd % 3600) / 60);
    const secs = secondsFromEnd % 60;
    const pad = (num) => String(num).padStart(2, '0');
    return `-${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
  };

  // Streaming logs
  useEffect(() => {
    if (currentLogs.length >= MOCK_LOGS.length) return;
    const intervalId = setInterval(() => {
      setCurrentLogs((prev) => {
        if (prev.length < MOCK_LOGS.length) return [...prev, MOCK_LOGS[prev.length]];
        clearInterval(intervalId);
        return prev;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, [currentLogs]);

  // Autoscroll logs
  useEffect(() => {
    const container = logsWrapperRef.current;
    if (!container) return;
    if (isInitialRender.current) {
      container.scrollTop = container.scrollHeight;
      isInitialRender.current = false;
      return;
    }
    const threshold = 50;
    const isAtBottom = container.scrollHeight - container.scrollTop - container.clientHeight <= threshold;
    if (isAtBottom) {
      setTimeout(() => {
        container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
      }, 50);
    }
  }, [currentLogs]);

  // Fetch SVG
  useEffect(() => {
    if (!svgUrl) return;
    setLoading(true);
    fetch(svgUrl)
      .then((r) => { if (!r.ok) throw new Error('SVG fetch failed'); return r.text(); })
      .then((svgText) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgText, 'image/svg+xml');
        const svgEl = doc.getElementsByTagName('svg')[0];
        if (svgEl?.getAttribute('viewBox')) setViewBox(svgEl.getAttribute('viewBox'));
        else if (svgEl) setViewBox(`0 0 ${svgEl.getAttribute('width') || 411} ${svgEl.getAttribute('height') || 343}`);
        const pathEl = doc.getElementsByTagName('path')[0];
        if (pathEl?.getAttribute('d')) setPathData(pathEl.getAttribute('d'));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [svgUrl]);

  // Animate dots
  useEffect(() => {
    const path = trackPathRef.current;
    if (!path || !pathData) return;
    const pathLength = path.getTotalLength();
    const progressOffset = { VER: 0.05, LEC: 0.15, NOR: 0.3, HAM: 0.99, PIA: 0.55, RUS: 0.08, ANT: 0.1, HAD: 0.38, GAS: 0.76, COL: 0.67 };
    let animationFrameId;
    const animate = () => {
      const updatedPositions = {};
      drivers.forEach(driver => {
        progressOffset[driver.code] += driver.speed * -0.005;
        if (progressOffset[driver.code] <= 0) progressOffset[driver.code] += 1;
        const point = path.getPointAtLength(progressOffset[driver.code] * pathLength);
        updatedPositions[driver.code] = { x: point.x, y: point.y };
      });
      setPositions(updatedPositions);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [pathData, drivers]);

  const handleTimelineChange = (e) => {
    const val = parseInt(e.target.value, 10);
    setTimelineValue(val);
    setIsLive(val >= MAX_SESSION_SECONDS);
  };

  const handleLogClick = (timestamp) => {
    setTimelineValue(timestamp);
    setIsLive(timestamp >= MAX_SESSION_SECONDS);
  };

  const handleGoLive = () => {
    setTimelineValue(MAX_SESSION_SECONDS);
    setIsLive(true);
  };

  const handleCameraClick = (cameraId) => {
    setExpandedCamera(expandedCamera === cameraId ? null : cameraId);
  };

  const handleFullscreen = (e, cameraId) => {
    e.stopPropagation();
    setFullscreenCamera(cameraId);
  };

  const handleCloseFullscreen = () => {
    setFullscreenCamera(null);
  };

  const handleSettingsClick = (e) => {
    e.stopPropagation();
    // Placeholder — settings screen to be implemented
  };

  return (
    <div className="live-data-container app-shell">
      <div className="panels-viewport">
        {/* LEFT PANEL — data cards */}
        <div className={`panel panel-data ${showCameras ? 'panel-slide-out-left' : 'panel-active'}`}>
          <div className="main-live-grid">
            {/* MAP */}
            <div className="map-card">
              <div className="card-header-status">
                <div className="header-item">
                  <Flag className="icon yellow" />
                  <span>STATUS: <strong className="green-text">TRACK CLEAR</strong></span>
                </div>
                <div className="header-item">
                  <Clock className="icon" />
                  <span>LAP: <strong>{lap}/78</strong></span>
                </div>
              </div>
              <div className="svg-wrapper">
                {loading ? (
                  <div className="loading-text">Ładowanie mapy toru...</div>
                ) : (
                  <svg viewBox={viewBox} className="track-svg">
                    {pathData && (
                      <path ref={trackPathRef} d={pathData} className="track-line" />
                    )}
                    {pathData && drivers.map((driver) => {
                      const pos = positions[driver.code];
                      if (!pos) return null;
                      return (
                        <g key={driver.id} className="driver-dot-group">
                          <circle cx={pos.x} cy={pos.y} r="8" style={{ fill: driver.color }} className="dot-glow" />
                          <circle cx={pos.x} cy={pos.y} r="5" style={{ fill: driver.color }} className="driver-dot" />
                          <text x={pos.x + 8} y={pos.y + 4} className="driver-label">{driver.code}</text>
                        </g>
                      );
                    })}
                  </svg>
                )}
              </div>
            </div>

            {/* TIMING */}
            <div className="timing-card">
              <h2 className="card-title">Live Timing</h2>
              <div className="table-wrapper">
                <table className="timing-table">
                  <thead>
                    <tr>
                      <th>POS</th>
                      <th>DRV</th>
                      <th style={{ textAlign: 'right' }}>INTERVAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {drivers.map((driver) => (
                      <tr key={driver.id} className="table-row">
                        <td className="position-col">
                          {driver.pos === 1 ? <Trophy className="gold-trophy" /> : driver.pos}
                        </td>
                        <td className="driver-col">
                          <span style={{ backgroundColor: driver.color }} className="team-strip"></span>
                          <strong>{driver.code}</strong>
                        </td>
                        <td className="interval-cell">{driver.interval}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* RACE LOG */}
            <div className="logs-card">
              <h2 className="card-title">Race Log</h2>
              <div className="logs-wrapper" ref={logsWrapperRef}>
                {currentLogs.map((log) => (
                  <div
                    key={log.id}
                    className="log-item clickable"
                    onClick={() => handleLogClick(log.timestamp)}
                    title="Kliknij, aby skoczyć do tego momentu"
                  >
                    <span className="log-time">{log.time}</span>
                    <span className="log-text">{log.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL — camera feeds */}
        <div className={`panel panel-cameras ${showCameras ? 'panel-active' : 'panel-slide-out-right'}`}>
          <div className={`camera-grid ${expandedCamera ? 'camera-grid-has-expanded' : ''}`}>
            {CAMERA_FEEDS.map((cam) => {
              const isExpanded = expandedCamera === cam.id;
              const isHidden = expandedCamera && !isExpanded;
              return (
                <div
                  key={cam.id}
                  className={`camera-card ${isExpanded ? 'camera-expanded' : ''} ${isHidden ? 'camera-hidden' : ''}`}
                  onClick={() => handleCameraClick(cam.id)}
                >
                  {/* Fake camera feed background */}
                  <div className="camera-feed" style={{ '--cam-color': cam.color }}>
                    <div className="camera-scanlines" />
                    <div className="camera-noise" />
                    <div className="camera-vignette" />

                    {/* REC badge */}
                    <div className="camera-rec-badge">
                      <span className="rec-dot" />
                      REC
                    </div>

                    {/* Label */}
                    <div className="camera-label-bar">
                      <span className="camera-label">{cam.label}</span>
                      <span className="camera-angle-tag">{cam.angle}</span>
                    </div>

                    {/* Hover action buttons */}
                    <div className="camera-actions">
                      
                      <button
                        className="cam-action-btn"
                        title="Settings"
                        onClick={handleSettingsClick}
                      >
                        <Settings size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SLIDE ARROW */}
        <button
          className={`slide-arrow ${showCameras ? 'arrow-left' : 'arrow-right'}`}
          onClick={() => {
            setShowCameras((v) => !v);
            setExpandedCamera(null);
          }}
          title={showCameras ? 'Back to Data' : 'Live Cameras'}
        >
          {showCameras ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </button>
      </div>

      {/* TIMELINE */}
      <div className="timeline-container">
        <button
          className={`live-button ${isLive ? 'active' : ''}`}
          onClick={handleGoLive}
        >
          <Radio className="live-icon" />
          LIVE
        </button>
        <div className="timeline-slider-wrapper">
          <span className="timeline-time-label">00:00:00</span>
          <input
            type="range"
            min="0"
            max={MAX_SESSION_SECONDS}
            value={timelineValue}
            onChange={handleTimelineChange}
            className="timeline-slider"
          />
          <span className="timeline-time-label live-offset-label">
            {formatTimeOffset(MAX_SESSION_SECONDS - timelineValue)}
          </span>
        </div>
      </div>
    </div>
  );
}