import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Grafik from './pages/Grafik';
import Galeri from './pages/Galeri';
import Statistics from './pages/Statistics';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/grafik" element={<Grafik />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path ="/statistics" element={<Statistics />} />
      </Routes>
    </Router>
  );
}

export default App;