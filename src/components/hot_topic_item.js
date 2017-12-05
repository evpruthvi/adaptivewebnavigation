import React from 'react';

const HotTopicItem = (props)=>{
  var titleLink = `/search/tag/${props.post}`;
  return(
    <div className="spacer js-gps-track">
      <a href={titleLink} className="question-hyperlink">{props.post}</a>
    </div>
  );
};
export default HotTopicItem;
