import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import MainPage from './pages/MainPage';
import PortfolioPage from './pages/PortfolioPage';
import VideographyPage from './pages/VideographyPage';
import BookingPage from './pages/BookingPage';
import AboutPage from './pages/AboutPage';
import Wedding from './pages/Wedding';
import FamilyShoots from './pages/family-shoots';
import Events from './pages/events';
import Portraits from './pages/portraits';
import Cars from './pages/cars';
import Candids from './pages/candids';
import Nature from './pages/nature';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SplashScreen/>} />
        <Route path="/home" element={<MainPage/>} />
        <Route path="/portfolio" element={<PortfolioPage/>} />
        <Route path="/videography" element={<VideographyPage/>} />
        <Route path="/booking" element={<BookingPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/portfolio/wedding" element={<Wedding/>} />
        <Route path="/portfolio/family" element={<FamilyShoots />} />
<Route path="/portfolio/events" element={<Events />} />
<Route path="/portfolio/portraits" element={<Portraits />} />
<Route path="/portfolio/cars" element={<Cars />} />
<Route path="/portfolio/candids" element={<Candids />} />
<Route path="/portfolio/nature" element={<Nature />} />

      </Routes>
    </Router>
  );
}

export default App;
