import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <button onClick={props.handleClick}>
          <FavIcon selected={props.favourite} />
        </button>
      </div>
      {/* <span className="photo-id">{props.photoId}</span> */}
    </div>
  );
}

export default PhotoFavButton;