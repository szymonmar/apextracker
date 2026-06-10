import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Header from './components/js/Header';
import LivePage from './pages/js/LivePage';
import SeriesPage from './pages/js/SeriesPage';
import SingleSeriePage from './pages/js/SingleSeriePage';
import SchedulePage from './pages/js/SchedulePage';
import HomePage from './pages/js/HomePage';
import LiveDataPage from './pages/js/LiveDataPage';
import LoginPage from './pages/js/LoginPage';
import RegistrationPage from './pages/js/RegistrationPage';
import NotFoundPage from './pages/js/NotFoundPage';
import { hotjar } from 'react-hotjar'
import ReactGA from "react-ga4";
import AnalyticsListener from "./components/js/AnalyticsListener";



function RoundDetail() {
  return <h1>Round Detail</h1>;
}


function AppContent() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/registration';

  return (
    <>
      {!isAuthPage && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/series" element={<SeriesPage />} />
        <Route path="/series/:slug" element={<SingleSeriePage />} />
        <Route path="/round/:id" element={<RoundDetail />} />
        <Route path="/live" element={<LivePage />} />
        <Route path="/live/:sessionId" element={<LiveDataPage svgUrl='/paths/RaceCircuitMonaco.svg' />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}


function App() {
  useEffect(() => {
    const siteId = 871612;
    const hotjarVersion = 6;
    hotjar.initialize(siteId, hotjarVersion);
    ReactGA.initialize("G-E7379C3V5B");
  }, []);

  return (
    <BrowserRouter>
      <AnalyticsListener />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;