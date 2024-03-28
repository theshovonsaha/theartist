import React from 'react';
import Tile from './Tile';
import '../styles/_tileGrid.scss';

const TileGrid = ({ tiles }) => {
  // Check if tiles prop exists and is an array
  if (!tiles || !Array.isArray(tiles)) {
    console.error('Invalid tiles prop:', tiles);
    return null;
  }

  return (
    <div className="tile-grid">
      {tiles.map((tile) => (
          <Tile tile={tile} />
      ))}
    </div>
  );
};

export default TileGrid;
