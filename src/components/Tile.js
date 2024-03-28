import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/_tile.scss';

const Tile = ({ tile }) => {
  const handleClick = () => {
    if (tile.onClick) {
      tile.onClick(); // Execute custom onClick function if provided
    }
  };

  return tile.onClick ? (
    <div className="tile" onClick={handleClick}>
      <div className="tile__content">
        <h3 className="tile__label">{tile.label}</h3>
      </div>
    </div>
  ) : (
    <Link to={tile.link} className="tile">
      <div className="tile__content">
        <h3 className="tile__label">{tile.label}</h3>
      </div>
    </Link>
  );
};

export default Tile;
