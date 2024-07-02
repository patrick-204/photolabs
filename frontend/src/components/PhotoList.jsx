import React from "react";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const { photos, displayedPhotos, onPhotoClick, toggleFavourite, favourites } = props;

  // Ensure displayedPhotos is an array before mapping
  const photosToDisplay = displayedPhotos ? displayedPhotos : photos;

  return (
    <ul className="photo-list">
      {photosToDisplay.map((photo) => (
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
