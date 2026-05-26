import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Hero from './components/Hero';
import HeroPanel from './components/HeroPanel';
import PopularSeries from './components/PopularSeries';
import UpcomingCalendar from './components/UpcomingCalendar';
import RecentReplays from './components/RecentReplays';
import LiveSession from './components/LiveSession';
import SeriesView from './components/SeriesView';
import ApexTracker from './components/ApexTracker';

function Home() {
  return (
    <div className="home-page">
      <Hero
        title="Grand Prix of Monaco / Lap 42/78"
        isLive={true}
        ctaText="Watch Live Now"
        ctaLink="/live"
      >
        <HeroPanel label="VER" value="+2.238s" />
        <HeroPanel label="LEC" value="Leader" />
        <HeroPanel label="Race Info" value="Monaco" />
      </Hero>
      <div className="app-shell">
        <PopularSeries />
        <UpcomingCalendar />
        <RecentReplays />
      </div>
    </div>
  );
}

function Schedule() {
  return <h1>Schedule</h1>;
}

function SeriesList() {
  return <h1>Series List</h1>;
}

function SeriesDetail() {
  return <h1>Series Detail</h1>;
}

function RoundDetail() {
  return <h1>Round Detail</h1>;
}

function Live() {
  return <LiveSession />;
}

function App() {
  return (
    <BrowserRouter>
      <Header />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/series" element={<SeriesView />} />
        <Route path="/series/:slug" element={<ApexTracker />} />
        <Route path="/round/:id" element={<RoundDetail />} />
        <Route path="/live" element={<Live />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
