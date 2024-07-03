import React, { useState } from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';
import axios from 'axios';

const TopNavigation = (props) => {
  const { topics, favouritesCount, onTopicClick, setSearchResults } = props;
  const [searchTerm, setSearchTerm] = useState('');

  const handleTopicClick = (topicId) => {
    onTopicClick(topicId);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8001/api/photos`, {
        params: {
          search: searchTerm,
        },
      });
      setSearchResults(response.data); 
    } catch (error) {
      console.error('Error finding photos:', error);
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleButtonClick = () => {
    handleSearch();
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__search">
        <input
          type="text"
          placeholder="Search Photos..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button onClick={handleButtonClick}>Search</button>
      </div>
      <TopicList topics={topics} onTopicClick={handleTopicClick} />
      {<FavBadge favouritesCount={favouritesCount} />}
    </div>
  );
};

export default TopNavigation;
