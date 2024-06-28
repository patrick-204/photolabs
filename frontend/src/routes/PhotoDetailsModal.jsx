import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const { photo, onClose } = props;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__content">
        <img src={photo.urls.full} alt={photo.alt_description} className="photo-details-modal__image" />

        <div className="photo-details-modal__header">{photo.description}</div>

        <div className="photo-details-modal__photographer-details">
          <img src={photo.user.profile} alt={`${photo.user.name}'s profile`} className="photo-details-modal__photographer-profile" />
          <div className="photo-details-modal__photographer-info">
            <div>{photo.user.name}</div>
            <div className="photo-details-modal__photographer-location">
              {photo.location.city}, {photo.location.country}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
};

export default PhotoDetailsModal;
