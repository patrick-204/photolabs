import React, { useState } from "react";

import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import PhotoDetailsModal from "./PhotoDetailsModal";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  const { topics, photos, onPhotoClick } = props;
  
  const [favourites, setFavourites] = useState([]);

  // Function to toggle favourite status
  const toggleFavourite = (photoId) => {
    if (favourites.includes(photoId)) {
      setFavourites(favourites.filter(id => id !== photoId));
    } else {
      setFavourites([...favourites, photoId]);
    }
  };

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favouritesCount={favourites.length} toggleFavourite={toggleFavourite} />
      <PhotoList photos={photos} favourites={favourites} toggleFavourite={toggleFavourite} onPhotoClick={onPhotoClick}/>
    </div>
  );
};

export default HomeRoute;