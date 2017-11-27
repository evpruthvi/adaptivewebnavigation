import React from 'react';

const PostListItem = (props)=>{
    var userLink = `/search/user/${props.post._source.user_id}`;
    var titleLink = `/search/qa/${props.post._source.title}`;
    var tag=[];
    for(var i=0;i<3;i++){
      tag[i]=props.post._source.tag.split(" ")[i];
    }
    var tagLink = [];
    for(var i=0;i<3;i++){
      tagLink[i]=`/search/tag/${tag[i]}`;
    }
    var tagTitle = [];
    for(var i=0;i<3;i++){
      tagTitle[i]=`show questions tagged ${tag[i]}`;
    }
     return(
        <div>
        <div className="question-summary" id="question-summary-47254184">
    <div className="statscontainer">
        <div className="statsarrow"></div>
        <div className="stats">
            <div className="vote">
                <div className="votes">
                    <span className="vote-count-post "><strong>{props.post._source.vote}</strong></span>
                    <div className="viewcount">vote</div>
                </div>
            </div>
         </div>
        </div>
    <div className="summary">
        <div> <h3><a href={titleLink} className="question-hyperlink">{props.post._source.title}</a></h3></div>
        <div className="excerpt">{props.post._source.text}</div>          
        <div className="tags t-ajax t-wordpress t-twig t-timber">
            <a href={tagLink[0]} className="post-tag" title={tagTitle[0]} rel="tag">{tag[0]}</a> <a href={tagLink[2]} className="post-tag" title={tagTitle[1]} rel="tag">{tag[1]}</a> <a href={tagLink[2]} className="post-tag" title={tagTitle[2]} rel="tag">{tag[2]}</a>
        </div>
        <div className="started fr">
            <div className="user-info ">
                <div className="user-action-time">
                  asked on <span className="relativetime"> {(new Date(props.post._source.time * 1000)).toDateString()}</span>                </div>
                <div className="user-gravatar32">
                   <a href={userLink}><div className="gravatar-wrapper-32"><img src="/img/user.png"/></div></a>
                </div>
                <div className="user-details">
                     <a href={userLink}>{props.post._source.user_id}</a>
                  <div className="-flair">
                     <span className="reputation-score" title="reputation score " dir="ltr">{props.post._source.reputation}</span>
                  </div>
             </div>
             </div>
        </div>  
    </div>    
    </div>
    </div>
    );
};
export default PostListItem;
