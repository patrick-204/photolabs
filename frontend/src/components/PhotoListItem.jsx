import React, { useState } from "react";
import PhotoFavButton from "./PhotoFavButton";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { photo, toggleFavourite, favourites } = props;

  const isFavourite = favourites.includes(photo.id);

  const handleClick = () => {
    toggleFavourite(photo.id);
  };

  return (
    <div className="photo-list__item">
      <img src={photo.urls.full} className="photo-list__image" />

      <div className="photo-list__user-details">
        <img src={photo.user.profile} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <span>{photo.user.name}</span>
          <div className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </div>
        </div>
      </div>

      <PhotoFavButton
        favourite={isFavourite}
        handleClick={handleClick}
        photoId={photo.id}
      />
    </div>
  );
};

export default PhotoListItem;
