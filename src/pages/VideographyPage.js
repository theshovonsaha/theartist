import React from 'react';
import Nav from '../components/Nav';
import '../styles/_videographyPage.scss';

const VideographyPage = () => {
  return (
    <div className="videography-page">
      <Nav />
      <div className="videography-page__content">
        <h1 className="videography-page__title">Videography</h1>
      </div>
    </div>
  );
};

export default VideographyPage;