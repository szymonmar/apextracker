import React from 'react';

const TimelineTable = ({ events, onActionClick }) => {
  return (
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
        {events.map((event, index) => (
          <div key={index} className={`table-row ${event.isActive ? 'active-row' : ''}`}>
            <div>{event.session}</div>
            <div>
              {event.statusTag ? (
                <span className={`tag ${event.statusTag.className}`}>{event.statusTag.label}</span>
              ) : (
                <span className="status-text muted">{event.status}</span>
              )}
            </div>
            <div>{event.time}</div>
            <div>{event.trackTemp}</div>
            <div>
              {event.action ? (
                event.actionType === 'button' ? (
                  <button 
                    className="btn-red-small"
                    onClick={() => onActionClick?.(event, 'button')}
                  >
                    {event.action}
                  </button>
                ) : (
                  <a 
                    href="#" 
                    className="action-link"
                    onClick={(e) => {
                      e.preventDefault();
                      onActionClick?.(event, 'link');
                    }}
                  >
                    {event.action}
                  </a>
                )
              ) : (
                <span className="muted">{event.actionDisabled || 'N/A'}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimelineTable;
