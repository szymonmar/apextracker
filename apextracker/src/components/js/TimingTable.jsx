import React from 'react';
import { Trophy } from 'lucide-react';

const TimingTable = ({ drivers, onDriverClick }) => {
  return (
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
              <tr 
                key={driver.id} 
                className="table-row"
                onClick={() => onDriverClick?.(driver)}
                style={{ cursor: onDriverClick ? 'pointer' : 'default' }}
              >
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
  );
};

export default TimingTable;
