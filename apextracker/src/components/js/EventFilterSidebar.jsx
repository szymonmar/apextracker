import "../css/EventFilterSidebar.css";

function EventFilterSidebar({ seriesList }) {
    const today = new Date();
    const formattedToday = today.toISOString().slice(0, 10);
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);
    const formattedNextWeek = nextWeek.toISOString().slice(0, 10);

    return (
        <aside className="schedule-filters">
        <div className="filters-header">
          <h4>FILTERS</h4>
          <button className="reset-btn">RESET</button>
        </div>

        <div className="filter-group">
          <label className="group-title">Racing Series</label>
          <div className="checkboxes">
            {seriesList.map((s, idx) => (
              <label key={s} htmlFor={s}><input type="checkbox" id={s} defaultChecked={idx === 0} /> {s}</label>
            ))}
          </div>
        </div>

        <div className="filter-group date-range">
          <span className="group-title">Date range</span>
          <div className="date-inputs">
            <div className="date-input">
                <label htmlFor="date-from">From</label>
                <input type="date" id="date-from" defaultValue={formattedToday} />
            </div>

            <div className="date-input" >
                <label htmlFor="date-to">To</label>
                <input type="date" id="date-to" defaultValue={formattedNextWeek} />
            </div>
          </div>
        </div>

        {/* <div className="filter-group small">
          <label htmlFor="year-season" className="group-title">Year / Season</label>
          <select id="year-season" defaultValue={new Date().getFullYear()}>
            <option>{new Date().getFullYear()}</option>
            <option>{new Date().getFullYear() + 1}</option>
          </select>
        </div> */}
        
      </aside>
    );
}

export default EventFilterSidebar;