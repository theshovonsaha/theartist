import React from 'react';
import Nav from '../components/Nav';
import '../styles/_portfolioPage.scss';

const FamilyShootsPage = () => {
  return (
    <div className="portfolio-page">
      <Nav />
      <div className="portfolio-page__content">
        <h1 className="portfolio-page__title">Family Shoots Portfolio</h1>
        {/* Render portfolio content */}
      </div>
    </div>
  );
};

export default FamilyShootsPage;
