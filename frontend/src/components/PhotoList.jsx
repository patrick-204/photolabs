import React from "react";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const { similarPhotos, photos, onPhotoClick, toggleFavourite, favourites } = props;

  // console.log(photos);
  console.log(similarPhotos);

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

      {similarPhotos.map((photo) => (
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
