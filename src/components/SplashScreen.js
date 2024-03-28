import React, { useState } from 'react';
import TileGrid from './TileGrid';
import '../styles/_splashScreen.scss';

const SplashScreen = () => {
  const [pageId, setPageId] = useState(null);

  const handleTileClick = () => {

    setPageId(2); // Set pageId to 2 when clicking "Book a Service"
  };

  const renderTiles = () => {
    switch (pageId) {
      case 1:
        return (
          <>
            <div className="splash-screen__title">Capturing Memories and Moments</div>
            <div className="splash-screen__question">What would you like us to help you with?</div>
            <TileGrid
              tiles={[
                { id: 1, label: 'Just Browsing', link: '/home' },
                { id: 2, label: 'Book a Service', onClick: handleTileClick },
              ]}
            />
          </>
        );
      case 2:
        return (
          <>
            <div className="splash-screen__title">What service do you want?</div>
            <TileGrid
              tiles={[
                { id: 3, label: 'Wedding', link: '/portfolio/wedding' },
                { id: 4, label: 'Family Shoots', link: '/portfolio/family' },
                { id: 5, label: 'Events', link: '/portfolio/events' },
                { id: 6, label: 'Portraits', link: '/portfolio/portraits' },
                { id: 7, label: 'Cars', link: '/portfolio/cars' },
                { id: 8, label: 'Candids', link: '/portfolio/candids' },
                { id: 9, label: 'Nature', link: '/portfolio/nature' },
                { id: 10, label: 'Videography', link: '/videography' },
              ]}
            />
          </>
        );
      default:
        setPageId(1); // Set default pageId to 1
        return null;
    }
  };

  return (
    <div className="splash-screen">
      {renderTiles()}
    </div>
  );
};

export default SplashScreen;
