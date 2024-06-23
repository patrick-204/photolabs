import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {

  return (
    <div className="photo-list__item">
      <img src={props.photo.imageSource} className="photo-list__image" />

      <img src={props.photo.profile} className="photo-list__image" />

      <div className="photo-list__user-profile">
        <div className="photo-list__user-detail">
          <span className="photo-list__user-details">{props.photo.username}</span>
        </div>
        <span className="photo-list__user-location">{props.photo.location.city}</span>, <span className="country">{props.photo.location.country}</span>
      </div>
    </div>
  );
};

export default PhotoListItem;
