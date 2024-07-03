import React, { useState, useEffect } from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const { topics, favourites, toggleFavourite, onPhotoClick, fetchPhotosByTopic, photos } = props;
  const [displayedPhotos, setDisplayedPhotos] = useState([]);

  // Displays all photos on component mount
  useEffect(() => {
    setDisplayedPhotos(photos);
  }, [photos]);

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
        allPhotos={photos} 
      />
      <PhotoList
        photos={displayedPhotos}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        onPhotoClick={onPhotoClick}
        allPhotos={photos}
      />
    </div>
  );
};

export default HomeRoute;
