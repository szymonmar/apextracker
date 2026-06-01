import { useState, useEffect, useRef } from 'react';
import { Trophy, Clock, Flag } from 'lucide-react';
import '../css/LiveDataPage.css';

const INITIAL_DRIVERS = [
  { id: 1, pos: 1, code: 'VER', name: 'Max Verstappen', team: 'Red Bull', interval: 'Leader', speed: 0.04 },
  { id: 2, pos: 2, code: 'LEC', name: 'Charles Leclerc', team: 'Ferrari', interval: '+1.234s', speed: 0.038 },
  { id: 3, pos: 3, code: 'NOR', name: 'Lando Norris', team: 'McLaren', interval: '+0.552s', speed: 0.039 },
  { id: 4, pos: 4, code: 'HAM', name: 'Lewis Hamilton', team: 'Mercedes', interval: '+2.110s', speed: 0.037 },
  { id: 5, pos: 5, code: 'PIA', name: 'Oscar Piastri', team: 'McLaren', interval: '+0.890s', speed: 0.036 },
];

export default function LiveDataPage({ svgUrl }) {
  const [drivers, setDrivers] = useState(INITIAL_DRIVERS);
  const [lap, setLap] = useState(42);
  
  // Stany na dane wyciągnięte dynamicznie z pliku SVG
  const [pathData, setPathData] = useState('');
  const [viewBox, setViewBox] = useState('0 0 400 300'); // domyślny fallback
  const [positions, setPositions] = useState({});
  const [loading, setLoading] = useState(true);

  const trackPathRef = useRef(null);

  // KROK 1: Pobieranie pliku SVG i parsowanie go
useEffect(() => {
  if (!svgUrl) return;

  setLoading(true);
  fetch(svgUrl)
    .then((response) => {
      if (!response.ok) throw new Error('Nie udało się pobrać pliku SVG');
      return response.text();
    })
    .then((svgText) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(svgText, 'image/svg+xml');
      
      // Zmiana: Szukamy tagu <svg> przez getElementsByTagName
      const svgElements = doc.getElementsByTagName('svg');
      if (svgElements.length > 0 && svgElements[0].getAttribute('viewBox')) {
        setViewBox(svgElements[0].getAttribute('viewBox'));
      } else {
        // Fallback: jeśli Twój plik nie miałby viewBox, przepisujemy szerokość i wysokość
        if (svgElements.length > 0) {
          const w = svgElements[0].getAttribute('width') || '411';
          const h = svgElements[0].getAttribute('height') || '343';
          setViewBox(`0 0 ${w} ${h}`);
        }
      }

      // Zmiana: Szukamy tagu <path> przez getElementsByTagName
      const pathElements = doc.getElementsByTagName('path');
      if (pathElements.length > 0 && pathElements[0].getAttribute('d')) {
        setPathData(pathElements[0].getAttribute('d'));
      } else {
        console.error('W podanym pliku SVG nie znaleziono znacznika <path> z atrybutem "d"');
      }
      setLoading(false);
    })
    .catch((err) => {
      console.error('Błąd podczas ładowania mapy:', err);
      setLoading(false);
    });
}, [svgUrl]);

  // KROK 2: Animacja punktów (odpala się dopiero gdy pathData się załaduje)
  useEffect(() => {
    const path = trackPathRef.current;
    if (!path || !pathData) return;

    const pathLength = path.getTotalLength();
    const progressOffset = { VER: 0.05, LEC: 0.15, NOR: 0.3, HAM: 0.99, PIA: 0.55 };
    let animationFrameId;

    const animate = () => {
      const updatedPositions = {};

      drivers.forEach(driver => {
        progressOffset[driver.code] += driver.speed * -0.005;

        if (progressOffset[driver.code] <= 0) {
          progressOffset[driver.code] += 1; 
        }

        // 3. Obliczamy pozycję na podstawie długości
        const currentLength = progressOffset[driver.code] * pathLength;
        const point = path.getPointAtLength(currentLength);

        updatedPositions[driver.code] = { x: point.x, y: point.y };
      });

      setPositions(updatedPositions);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [pathData, drivers]);


  return (
    <div className="live-data-container app-shell">
      <div className="live-header">
        <div className="header-item">
          <Flag className="icon yellow" />
          <span>STATUS: <strong className="green-text">TRACK CLEAR</strong></span>
        </div>
        <div className="header-item">
          <Clock className="icon" />
          <span>LAP: <strong>{lap}/78</strong></span>
        </div>
      </div>

      <div className="main-live-grid">
        <div className="map-card">
          <h2 className="card-title">Circuit de Monaco</h2>
          <div className="svg-wrapper">
            {loading ? (
              <div className="loading-text">Ładowanie mapy toru...</div>
            ) : (
              /* Przekazujemy dynamiczny viewBox wyciągnięty z Twojego pliku */
              <svg viewBox={viewBox} className="track-svg">
                {pathData && (
                  <path
                    ref={trackPathRef}
                    d={pathData} /* Dynamicznie wstrzyknięta ścieżka */
                    className="track-line"
                  />
                )}

                {/* Punkty kierowców */}
                {pathData && drivers.map((driver) => {
                  const pos = positions[driver.code];
                  if (!pos) return null;
                  return (
                    <g key={driver.id} className="driver-dot-group">
                      <circle cx={pos.x} cy={pos.y} r="8" className={`dot-glow ${driver.code}`} />
                      <circle cx={pos.x} cy={pos.y} r="5" className={`driver-dot ${driver.code}`} />
                      <text x={pos.x + 8} y={pos.y + 4} className="driver-label">
                        {driver.code}
                      </text>
                    </g>
                  );
                })}
              </svg>
            )}
          </div>
        </div>

        {/* TABELA POZYCJI (Bez zmian) */}
        <div className="timing-card">
          <h2 className="card-title">Live Timing</h2>
          <div className="table-wrapper">
            <table className="timing-table">
              <thead>
                <tr>
                  <th>POS</th>
                  <th>DRV</th>
                  <th>TEAM</th>
                  <th>INTERVAL</th>
                </tr>
              </thead>
              <tbody>
                {drivers.map((driver) => (
                  <tr key={driver.id} className="table-row">
                    <td className="position-col">
                      {driver.pos === 1 ? <Trophy className="gold-trophy" /> : driver.pos}
                    </td>
                    <td>
                      <span className={`team-strip ${driver.code}`}></span>
                      <strong>{driver.code}</strong> <span className="full-name">{driver.name}</span>
                    </td>
                    <td className="team-cell">{driver.team}</td>
                    <td className="interval-cell">{driver.interval}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}