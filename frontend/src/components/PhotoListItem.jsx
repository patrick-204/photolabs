import React, { useState } from "react";
import PhotoFavButton from "./PhotoFavButton";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const [favourite, setFavourite]  = useState(false);

  const handleClick = () => {
    setFavourite((prevFavourite) => !prevFavourite);
  }


  return (
    <div className="photo-list__item">
      <img src={props.photo.urls.full} className="photo-list__image" />

      <div className="photo-list__user-details">
        <img src={props.photo.user.profile} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <span>{props.photo.user.name}</span>
          <div className="photo-list__user-location">
            {props.photo.location.city}, 
            {props.photo.location.country}
          </div>
        </div>
      </div>

      <PhotoFavButton
        favourite={favourite}
        handleClick={handleClick}
        photoId={props.photo.id} 
      />
    </div>
  );
};

export default PhotoListItem;
