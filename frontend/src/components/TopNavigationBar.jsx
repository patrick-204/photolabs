import React from 'react';

import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {
  const { topics, favouritesCount, onTopicClick } = props;

  const handleTopicClick = (topicId) => {
    onTopicClick(topicId); 
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} onTopicClick={handleTopicClick} />
      {<FavBadge favouritesCount={favouritesCount} />}
    </div>
  );
};

export default TopNavigation;