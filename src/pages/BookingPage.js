import React from 'react';
import Nav from '../components/Nav';
import '../styles/_bookingPage.scss';

const BookingPage = () => {
  return (
    <div className="booking-page">
      <Nav />
      <div className="booking-page__content">
        <h1 className="booking-page__title">Book a Service</h1>
        {/* Render booking form */}
      </div>
    </div>
  );
};

export default BookingPage;