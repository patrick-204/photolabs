import React from "react";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const { photos, onPhotoClick, toggleFavourite, favourites } = props;

  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          onPhotoClick={onPhotoClick}
          toggleFavourite={toggleFavourite}
          favourites={favourites}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
