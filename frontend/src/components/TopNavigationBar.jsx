import React from 'react';

import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {
  const { topics, favouritesCount } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />
      {favouritesCount > 0 && <FavBadge favouritesCount={favouritesCount}/>}
    </div>
  )
}

export default TopNavigation;