import React from 'react';
import Nav from '../components/Nav';
import '../styles/_portfolioPage.scss';

const CandidsPage = () => {
  return (
    <div className="portfolio-page">
      <Nav />
      <div className="portfolio-page__content">
        <h1 className="portfolio-page__title">Candids Portfolio</h1>
        {/* Render portfolio content */}
      </div>
    </div>
  );
};

export default CandidsPage;
