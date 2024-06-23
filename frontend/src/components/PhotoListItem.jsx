import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {

  return (
    <div className="photo-list__item">
      <img src={props.photo.imageSource} className="photo-list__image" />

      <div className="photo-list__user-details">
        <img src={props.photo.profile} className="photo-list__user-profile" />
        <span className="photo-list__user-info ">{props.photo.username}</span>
      </div>

      <div className="photo-list__user-location">
        <span>{props.photo.location.city}</span>, <span>{props.photo.location.country}</span>
      </div>
    </div>
  );
};

export default PhotoListItem;
