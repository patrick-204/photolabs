import React, { useState } from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const { topics, favourites, toggleFavourite, onPhotoClick, fetchPhotosByTopic, photos } = props;
  const [displayedPhotos, setDisplayedPhotos] = useState([]);

  const handleTopicClick = (topicSlug) => {
    fetchPhotosByTopic(topicSlug);
  };

  const handleSearchResults = (results) => {
    setDisplayedPhotos(results);
  };

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        favouritesCount={favourites.length}
        toggleFavourite={toggleFavourite}
        onTopicClick={handleTopicClick}
        setSearchResults={handleSearchResults}
        allPhotos={photos} // Pass all photos for management
      />
      <PhotoList
        photos={displayedPhotos ? displayedPhotos : photos} // Display search results if available, otherwise all photos
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        onPhotoClick={onPhotoClick}
        allPhotos={photos} // Pass all photos for management
      />
    </div>
  );
};

export default HomeRoute;
