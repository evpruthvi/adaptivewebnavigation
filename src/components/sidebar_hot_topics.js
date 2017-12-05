import React, {Component} from 'react';
import HotTopicItem from './hot_topic_item';

const HotTopic = (props)=> {
  /*
    if(!(props.lastActive && props.asked && props.recposts)){
      return <div>Loading..</div>
    }
  */
  var count =0;
  const HotTopicList = props.hposts.map((post) => {
    count++;
    return <HotTopicItem key={count} post={post}/>
  });

  return(
    <div id="sidebar" className="show-votes" role="complementary" aria-label="sidebar">
      <div className="module sidebar-related">
        <h4 id="h-related">Hot Topics Trending</h4>
        <div className="related js-gps-related-questions" data-tracker="rq=1">
          {HotTopicList}
        </div>
      </div>
    </div>
  );
}

export default HotTopic;
