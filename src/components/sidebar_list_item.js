import React from 'react';

const SidebarItem = (props)=>{
  return(
    <div className="spacer js-gps-track">
      <a href="https://stackoverflow.com/q/31044?rq=1" title="Vote score (upvotes - downvotes)">
        <div className="answer-votes answered-accepted extra-large">{props.post._source.reputation}</div>
      </a>
      <a href="https://stackoverflow.com/questions/31044/is-there-an-exists-function-for-jquery?rq=1" className="question-hyperlink">{props.post._source.title}</a>
    </div>
  );
};
export default SidebarItem;
