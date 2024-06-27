import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item">
      <a href={`/topics/${props.topic.slug}`} className="topic-list__link">
        {props.topic.title}
      </a>
    </div>
  );
};

export default TopicListItem;
