import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const { topics, favourites, toggleFavourite, photos, onPhotoClick, fetchPhotosByTopic } = props;

  const handleTopicClick = (topicId) => {
    fetchPhotosByTopic(topicId);
  };

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        favouritesCount={favourites.length}
        toggleFavourite={toggleFavourite}
        onTopicClick={handleTopicClick}
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
