import React from 'react';

const PostListItem = (props)=>{
    return(
        <div>
        <li>
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
            <div className="status answered">
                <strong>1</strong>answer
            </div>
            </div>
            <div className="views " title="99 views">99 views</div>
        </div>
    <div className="summary">
        <div> <h3><a href="/questions/47254184/timber-wordpress-append-data-json-to-timber-post-object-after-ajax-call" className="question-hyperlink">{props.post._source.title}</a></h3></div>
        <div className="excerpt">{props.post._source.text}</div>          
        <div className="tags t-ajax t-wordpress t-twig t-timber">
            <a href="/questions/tagged/ajax" className="post-tag" title="show questions tagged &#39;ajax&#39;" rel="tag">ajax</a> <a href="/questions/tagged/{props.post._source.tag}" className="post-tag" title="show questions tagged &#39;wordpress&#39;" rel="tag">wordpress</a> <a href="/questions/tagged/twig" className="post-tag" title="show questions tagged &#39;twig&#39;" rel="tag">twig</a> <a href="/questions/tagged/timber" className="post-tag" title="show questions tagged &#39;timber&#39;" rel="tag">timber</a> 
        </div>
        <div className="started fr">
            <div className="user-info ">
                <div className="user-action-time">
                  asked <span title="2017-11-12 21:28:53Z" className="relativetime"> {props.post._source.time}</span>
                </div>
                <div className="user-gravatar32">
                   <a href="/users/3109293/rmh"><div className="gravatar-wrapper-32"><img src="/img/user.png"/></div></a>
                </div>
                <div className="user-details">
                     <a href="/users/3109293/rmh">{props.post._source.user_id}</a>
                  <div className="-flair">
                     <span className="reputation-score" title="reputation score " dir="ltr">{props.post._source.reputation}</span>
                  </div>
             </div>
             </div>
        </div>  
    </div>    
    </div>    
    </li>
    </div>
    );
};
export default PostListItem;
