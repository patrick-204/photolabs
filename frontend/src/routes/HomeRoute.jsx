import React from "react";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({
  topics,
  photos,
  onPhotoClick,
  favourites,
  toggleFavourite,
}) => {
  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        favouritesCount={favourites.length}
        toggleFavourite={toggleFavourite}
      />
      <PhotoList
        photos={photos}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        onPhotoClick={onPhotoClick}
      />
    </div>
  );
};

export default HomeRoute;
