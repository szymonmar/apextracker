import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/js/Header';
import LivePage from './pages/js/LivePage';
import SeriesView from './pages/js/SeriesView';
import ApexTracker from './pages/js/ApexTracker';
import Schedule from './pages/js/Schedule';
import Home from './pages/js/Home';


function RoundDetail() {
  return <h1>Round Detail</h1>;
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
        <Route path="/live" element={<LivePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
