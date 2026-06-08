import React from 'react';

const StatusCard = ({ title, message, timestamp, variant = 'default' }) => {
  const variantClass = {
    'red': 'red-accent',
    'blue': 'blue-accent',
    'green': 'green-accent',
    'default': ''
  }[variant] || '';

  return (
    <div className="status-card">
      <h4 className={`card-title ${variantClass}`}>{title}</h4>
      <p>{message}</p>
      <span className="timestamp">{timestamp}</span>
    </div>
  );
};

export default StatusCard;
