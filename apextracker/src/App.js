import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';

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
      <Header />

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
