import React from 'react';
import Nav from '../components/Nav';
import '../styles/_portfolioPage.scss';

const PortfolioPage = () => {
  return (
    <div className="portfolio-page">
      <Nav />
      <div className="portfolio-page__content">
        <h1 className="portfolio-page__title">Portfolio at a Glance</h1>
        <img src="" alt='Block'></img>
         <img src="" alt='Block'></img>
          <img src="" alt='Block'></img>
           <img src="" alt='Block'></img>
            <img src="" alt='Block'></img>
      </div>
    </div>
  );
};

export default PortfolioPage;