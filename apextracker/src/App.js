import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Hero from './components/Hero';
import HeroPanel from './components/HeroPanel';
import "@fontsource/space-grotesk";

function Home() {
  return (
    <Hero
      title="Apex Legends Championship 2026"
      backgroundImage="https://images.unsplash.com/photo-1538481143235-259d08be6815?w=1920&h=600&fit=crop"
      isLive={true}
      ctaText="Oglądaj teraz"
      ctaLink="/live"
    >
      <HeroPanel label="Zespoły" value="32" />
      <HeroPanel label="Nagroda" value="$1M" />
      <HeroPanel label="Widzowie" value="2.5M" />
    </Hero>
  );
}

function Schedule() {
  return <h1>Schedule</h1>;
}

function Series() {
  return <h1>Series</h1>;
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
  return <h1>Live</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Header />  
      <div className="app-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/series" element={<Series />}>
            <Route index element={<SeriesList />} />
            <Route path="/series/:slug" element={<SeriesDetail />} />
          </Route>
          <Route path="/round/:id" element={<RoundDetail />} />
          <Route path="/live" element={<Live />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
