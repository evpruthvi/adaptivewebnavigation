import React from 'react';

const SidebarItem = (props)=>{
  var titleLink = `/search/qa/${props.post._source.title}`;
  return(
    <div className="spacer js-gps-track">
      <a title="Vote score (upvotes - downvotes)">
        <div className="answer-votes answered-accepted extra-large">{props.post._source.vote}</div>
      </a>
      <a href={titleLink} className="question-hyperlink">{props.post._source.title}</a>
    </div>
  );
};
export default SidebarItem;
