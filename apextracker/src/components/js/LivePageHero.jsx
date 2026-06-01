import { useState, useEffect } from 'react';
import '../css/LivePageHero.css';

function LivePageHero({ startTime, finished, imageUrl }) {
  const [timeDiff, setTimeDiff] = useState(0);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const start = new Date(startTime).getTime();
      const diff = start - now;

      if (finished) {
        setIsLive(false);
        setTimeDiff(Math.abs(diff));
      } else if (diff <= 0) {
        setIsLive(true);
        setTimeDiff(Math.abs(diff));
      } else {
        setIsLive(false);
        setTimeDiff(diff);
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, [startTime, finished]);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hrs = Math.floor(totalSeconds / 3600);
    const min = Math.floor((totalSeconds % 3600) / 60);
    const sec = totalSeconds % 60;

    return {
      hrs: String(hrs).padStart(2, '0'),
      min: String(min).padStart(2, '0'),
      sec: String(sec).padStart(2, '0'),
    };
  };

  const { hrs, min, sec } = formatTime(timeDiff);

  const getStatusText = () => {
    if (finished) return 'FINISHED';
    if (isLive) return 'LIVE NOW';
    return 'COUNTDOWN TO GREEN LIGHT';
  };

  // Funkcja, która zwraca odpowiednią klasę dla indykatora stanu
  const getStatusClass = () => {
    if (finished) return 'status-indicator state-finished';
    if (isLive) return 'status-indicator state-live';
    return 'status-indicator state-countdown';
  };

  return (
    <section className="live-page-hero-grid">
      <div className="countdown-panel">
        
        {/* Dynamiczna klasa nadrzędna kontenera statusu */}
        <div className={getStatusClass()}>
          <span className="dot"></span> 
          {getStatusText()}
        </div>
        
        <div className="timer">
          <div className="time-box">
            <span className="number">{hrs}</span>
            <span className="label">HRS</span>
          </div>
          <span className="separator">:</span>
          <div className="time-box">
            <span className="number">{min}</span>
            <span className="label">MIN</span>
          </div>
          <span className="separator">:</span>
          <div className="time-box">
            <span className="number red">{sec}</span>
            <span className="label">SEC</span>
          </div>
        </div>
        
        <div className="action-buttons">
          {!finished && <button className="btn-red">▶ JOIN BROADCAST</button>}
          <button className="btn-outline">
            {finished ? 'WATCH REPLAY' : 'SET REMINDER'}
          </button>
        </div>
      </div>

      <div className="event-image" style={{ backgroundImage: `url(${imageUrl || 'https://placehold.co/600x400'})` }}></div>
    </section>
  );
}

export default LivePageHero;