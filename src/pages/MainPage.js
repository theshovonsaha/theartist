import React from 'react';
import Nav from '../components/Nav';
import TileGrid from '../components/TileGrid';
import '../styles/_mainPage.scss';

const MainPage = () => {
  const tiles = [
    { id: 1, label: 'Wedding', link: '/portfolio/wedding' },
    { id: 2, label: 'Family Shoots', link: '/portfolio/family' },
    { id: 3, label: 'Events', link: '/portfolio/events' },
    { id: 4, label: 'Portraits', link: '/portfolio/portraits' },
    { id: 5, label: 'Cars', link: '/portfolio/cars' },
    { id: 6, label: 'Candids', link: '/portfolio/candids' },
    { id: 7, label: 'Nature', link: '/portfolio/nature' },
    { id: 8, label: 'Videography', link: '/videography' },
  ];

  return (
    <div className="main-page">
      <Nav />
      <div className="main-page__content">
        <h1 className="main-page__title">Explore Our Portfolios</h1>
        <TileGrid className="main-page__tileGrid" tiles={tiles} />
      </div>
    </div>
  );
};

export default MainPage;