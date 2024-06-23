import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {

  return (
    <div className="App">
      <div className="photo-details">
        <img src={props.photo.imageSource} />
      </div>
      <div className="user-profile">
        <img src={props.photo.profile} />
        <span>{props.photo.username}</span>
        <div className="location">
          <span>{props.photo.location.city}</span>, <span className="country">{props.photo.location.country}</span>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
