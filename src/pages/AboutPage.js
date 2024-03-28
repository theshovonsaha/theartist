import React from 'react';
import Nav from '../components/Nav';
import '../styles/_aboutPage.scss';

const AboutPage = () => {
  return (
    <div className="about-page">
      <Nav />
      <div className="about-page__content">
        <h1 className="about-page__title">About</h1>
        {/* Render about content */}
      </div>
    </div>
  );
};

export default AboutPage;