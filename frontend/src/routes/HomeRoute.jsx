import React from 'react';
import PropTypes from 'prop-types'; 
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} favouritesCount={props.favourites.length} toggleFavourite={props.toggleFavourite} />
      <PhotoList photos={props.photos} favourites={props.favourites} toggleFavourite={props.toggleFavourite} onPhotoClick={props.onPhotoClick} />
    </div>
  );
};

export default HomeRoute;
