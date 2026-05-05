import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1>Home</h1>;
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
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/schedule">Schedule</Link> |{" "}
        <Link to="/series">Series</Link> |{" "}
        <Link to="/series/formula-1">Formula 1</Link> |{" "}
        <Link to="/round/1">Round 1</Link> |{" "}
        <Link to="/round/2">Round 2</Link> |{" "}
        <Link to="/live">Live</Link>
      </nav>

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
    </BrowserRouter>
  );
}

export default App;
