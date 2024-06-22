import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {

  return (
    <div className="photo-list-item">
      <div className="photo-details">
        <img src={props.imageSource} />
      </div>
      <div className="user-profile">
        <img src={props.profile} />
        <span>{props.username}</span>
        <div className="location">
          <span>{props.location.city}</span>, <span className="country">{props.location.country}</span>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
