import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  return (
    <div className="photo-list__fav-icon">
      <button className="fav-button" onClick={props.handleClick}>
        <FavIcon selected={props.favourite} />
      </button>
    </div>
  );
}

export default PhotoFavButton;
