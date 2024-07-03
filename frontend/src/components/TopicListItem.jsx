import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {

  const handleClick = () => {
    props.onTopicClick(props.topic.id); 
  };

  return (
    <div className="topic-list__item">
      <a
        // href={`/topics/${props.topic.slug}`}
        className="topic-list__link"
        onClick={handleClick} 
      >
        {props.topic.title}
      </a>
    </div>
  );
};

export default TopicListItem;
