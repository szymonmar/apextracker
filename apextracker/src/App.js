import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/js/Header';
import LivePage from './pages/js/LivePage';
import SeriesPage from './pages/js/SeriesPage';
import SingleSeriePage from './pages/js/SingleSeriePage';
import SchedulePage from './pages/js/SchedulePage';
import HomePage from './pages/js/HomePage';


function RoundDetail() {
  return <h1>Round Detail</h1>;
}


function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/series" element={<SeriesPage />} />
          <Route path="/series/:slug" element={<SingleSeriePage />} />
          <Route path="/round/:id" element={<RoundDetail />} />
          <Route path="/live" element={<LivePage />} />
        </Routes>
    </BrowserRouter>
      
  );
}

export default App;
