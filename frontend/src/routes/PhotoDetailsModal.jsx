import React from 'react';

import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const { photo, similarPhotos, onClose, toggleFavourite, favourites } = props

  // Check to see if photo is favourited
  const isFavourite = favourites.includes(photo.id);

  const handleFavouriteClick = () => {
    toggleFavourite(photo.id);
  };

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      
      <img src={photo.urls.full} alt={photo.alt_description} className="photo-details-modal__image" />
      <PhotoFavButton favourite={isFavourite} handleClick={handleFavouriteClick} />
      
      <div className="photo-details-modal__header">
        <h2>{photo.description}</h2>
        <div className="photo-details-modal__photographer-details">
          <img
            src={photo.user.profile}
            alt={`${photo.user.name}'s profile`}
            className="photo-details-modal__photographer-profile"
          />
          <div className="photo-details-modal__photographer-info">
            <div>{photo.user.name}</div>
            <div className="photo-details-modal__photographer-location">
              {photo.location.city}, {photo.location.country}
            </div>
          </div>
        </div>
      </div>


      {/* Similar Photos Section */}
      {similarPhotos && (
        <div className="photo-details-modal__similar-photos">
          <h3>Similar Photos</h3>
          <PhotoList photos={similarPhotos} />
        </div>
      )}
    </div>
  );
};

export default PhotoDetailsModal;
