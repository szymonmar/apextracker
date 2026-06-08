import { useState, useEffect, useRef } from 'react';
import { Search, X, Zap, User, MapPin, Crosshair, Wind, Eye, Camera } from 'lucide-react';
import '../css/CameraSelectPopup.css';

const CATEGORIES = [
  { id: 'all',          label: 'All',           icon: Camera },
  { id: 'onboard',      label: 'Onboards',      icon: User },
  { id: 'pitlane',      label: 'Pit Lane',      icon: MapPin },
  { id: 'straight',     label: 'Main Straight', icon: Wind },
  { id: 'attackpoint',  label: 'Attack Points', icon: Crosshair },
  { id: 'static',       label: 'Static',        icon: Eye },
  { id: 'aerial',       label: 'Aerial',        icon: Zap },
];

const ALL_CAMERA_VIEWS = [
  // Auto
  { id: 'auto',    label: 'Auto',               sublabel: 'Director\'s choice',  category: 'all',       color: '#6366f1', isAuto: true },
  // Onboards
  { id: 'ob-ver',  label: 'Onboard — VER',       sublabel: 'Max Verstappen',      category: 'onboard',   color: '#004a90' },
  { id: 'ob-nor',  label: 'Onboard — NOR',       sublabel: 'Lando Norris',        category: 'onboard',   color: '#FF8700' },
  { id: 'ob-lec',  label: 'Onboard — LEC',       sublabel: 'Charles Leclerc',     category: 'onboard',   color: '#cd001f' },
  { id: 'ob-ham',  label: 'Onboard — HAM',       sublabel: 'Lewis Hamilton',      category: 'onboard',   color: '#cd001f' },
  { id: 'ob-pia',  label: 'Onboard — PIA',       sublabel: 'Oscar Piastri',       category: 'onboard',   color: '#FF8700' },
  { id: 'ob-rus',  label: 'Onboard — RUS',       sublabel: 'George Russell',      category: 'onboard',   color: '#00D2BE' },
  { id: 'ob-ant',  label: 'Onboard — ANT',       sublabel: 'Kimi Antonelli',      category: 'onboard',   color: '#00D2BE' },
  { id: 'ob-gas',  label: 'Onboard — GAS',       sublabel: 'Pierre Gasly',        category: 'onboard',   color: '#1879d4' },
  { id: 'ob-col',  label: 'Onboard — COL',       sublabel: 'Franco Colapinto',    category: 'onboard',   color: '#1879d4' },
  // Pit Lane
  { id: 'pit-main',   label: 'Pit Lane — Entry',    sublabel: 'Entry Gate',       category: 'pitlane',   color: '#374151' },
  { id: 'pit-box',    label: 'Pit Box — RB',        sublabel: 'Red Bull Racing',  category: 'pitlane',   color: '#004a90' },
  { id: 'pit-box-mc', label: 'Pit Box — MCL',       sublabel: 'McLaren',          category: 'pitlane',   color: '#FF8700' },
  { id: 'pit-exit',   label: 'Pit Exit Cam',        sublabel: 'Pit Exit',         category: 'pitlane',   color: '#6b7280' },
  // Main Straight
  { id: 'str-t1',   label: 'Start / Finish',       sublabel: 'T1 Entry',          category: 'straight',  color: '#374151' },
  { id: 'str-drs',  label: 'DRS Zone',             sublabel: 'Back Straight',     category: 'straight',  color: '#374151' },
  // Attack Points
  { id: 'ap-t1',    label: 'Turn 1 Brake',         sublabel: 'Attack Point',      category: 'attackpoint', color: '#7c3aed' },
  { id: 'ap-t3',    label: 'Turn 3 Chicane',       sublabel: 'Attack Point',      category: 'attackpoint', color: '#7c3aed' },
  { id: 'ap-t8',    label: 'Turn 8 Hairpin',       sublabel: 'Attack Point',      category: 'attackpoint', color: '#7c3aed' },
  { id: 'ap-t12',   label: 'Turn 12 Complex',      sublabel: 'Attack Point',      category: 'attackpoint', color: '#7c3aed' },
  // Static
  { id: 'st-heli',  label: 'Helicopter Shot',      sublabel: 'Aerial Static',     category: 'aerial',    color: '#374151' },
  { id: 'st-tower', label: 'Control Tower',        sublabel: 'Paddock Static',    category: 'static',    color: '#374151' },
  { id: 'st-podium',label: 'Podium Area',          sublabel: 'Static',            category: 'static',    color: '#374151' },
  // Aerial
  { id: 'ae-drone', label: 'Drone Cam',            sublabel: 'Aerial Dynamic',    category: 'aerial',    color: '#0f766e' },
  { id: 'ae-heli2', label: 'Helicopter 2',         sublabel: 'Wide Aerial',       category: 'aerial',    color: '#0f766e' },
];

export default function CameraSelectPopup({ isOpen, onClose, slotId, slotLabel, currentViewId, onSelect }) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const overlayRef = useRef(null);
  const searchRef = useRef(null);

  // Reset state when opening
  useEffect(() => {
    if (isOpen) {
      setSearch('');
      setActiveCategory('all');
      setTimeout(() => searchRef.current?.focus(), 80);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!isOpen) return null;

  const filtered = ALL_CAMERA_VIEWS.filter((v) => {
    const matchesCategory = activeCategory === 'all' || v.category === activeCategory || v.isAuto;
    const matchesSearch = search.trim() === '' ||
      v.label.toLowerCase().includes(search.toLowerCase()) ||
      v.sublabel.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSelect = (view) => {
    onSelect(slotId, view);
    onClose();
  };

  return (
    <div
      className="csp-overlay"
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      <div className="csp-panel">
        {/* Header */}
        <div className="csp-header">
          <div className="csp-header-left">
            <Camera size={15} className="csp-header-icon" />
            <div>
              <p className="csp-header-title">Select Camera View</p>
              <p className="csp-header-sub">Slot {slotId} · currently <em>{slotLabel}</em></p>
            </div>
          </div>
          <button className="csp-close-btn" onClick={onClose}>
            <X size={16} />
          </button>
        </div>

        {/* Search */}
        <div className="csp-search-row">
          <Search size={14} className="csp-search-icon" />
          <input
            ref={searchRef}
            className="csp-search-input"
            type="text"
            placeholder="Search cameras…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button className="csp-search-clear" onClick={() => setSearch('')}>
              <X size={12} />
            </button>
          )}
        </div>

        {/* Categories */}
        <div className="csp-categories">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                className={`csp-cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <Icon size={12} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Camera grid */}
        <div className="csp-grid-scroll">
          {filtered.length === 0 ? (
            <div className="csp-empty">No cameras match your search.</div>
          ) : (
            <div className="csp-grid">
              {filtered.map((view) => {
                const isActive = view.id === currentViewId;
                return (
                  <button
                    key={view.id}
                    className={`csp-view-card ${isActive ? 'csp-view-active' : ''} ${view.isAuto ? 'csp-view-auto' : ''}`}
                    onClick={() => handleSelect(view)}
                  >
                    {/* Fake miniature feed */}
                    <div className="csp-view-preview" style={{ '--card-color': view.color }}>
                      <div className="csp-preview-scanlines" />
                      <div className="csp-preview-vignette" />
                      {view.isAuto && (
                        <div className="csp-auto-badge">
                          <Zap size={10} />
                          AUTO
                        </div>
                      )}
                      {isActive && <div className="csp-active-indicator" />}
                    </div>

                    {/* Card label */}
                    <div className="csp-view-info">
                      <span className="csp-view-label">{view.label}</span>
                      <span className="csp-view-sublabel">{view.sublabel}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}