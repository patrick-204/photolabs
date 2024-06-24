import React from "react";
import PhotoFavButton from "./PhotoFavButton";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {

  return (
    <div className="photo-list__item">
      <img src={props.photo.imageSource} className="photo-list__image" />

      <div className="photo-list__user-details">
        <img src={props.photo.profile} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <span>{props.photo.username}</span>
          <div className="photo-list__user-location">
            {props.photo.location.city}
            {props.photo.location.country}
          </div>
        </div>
      </div>

      <PhotoFavButton />
    </div>
  );
};

export default PhotoListItem;
