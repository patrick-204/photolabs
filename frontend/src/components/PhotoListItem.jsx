import React, { useState } from 'react';
import PhotoFavButton from './PhotoFavButton';

import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  const { photo, toggleFavourite, favourites = [], onPhotoClick } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isFavourite = favourites.includes(photo.id);

  const handleClick = () => {
    toggleFavourite(photo.id);
  };

  const handlePhotoClick = () => {
    setIsModalOpen(true);
    onPhotoClick(photo);
  };

  return (
    <div className="photo-list__item">
      <div className="photo-list__image-container">
        <img src={photo.urls.full} className="photo-list__image" onClick={handlePhotoClick} />
        <div className="photo-list__fav-button">
          <PhotoFavButton favourite={isFavourite} handleClick={handleClick} photoId={photo.id} />
        </div>
      </div>

      <div className="photo-list__user-details">
        <img src={photo.user.profile} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <span>{photo.user.name}</span>
          <div className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
