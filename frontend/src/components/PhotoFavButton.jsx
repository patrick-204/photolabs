import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [favourite, setFavourite]  = useState(false);

  const handleClick = () => {
    setFavourite((prevFavourite) => !prevFavourite);
  }

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <button onClick={handleClick}>
          <span style={{ backgroundColor: favourite ? 'red' : 'white' }}>
            <FavIcon />
          </span>
        </button>
      </div>
    </div>
  );
}

export default PhotoFavButton;