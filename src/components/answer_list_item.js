import React from 'react';

const AnswerListItem = (props)=>{
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
        <div id="answers">
          <div id="answer-47446778" className="answer" data-answerid="47446778" itemScope="" itemType="http://schema.org/Answer">

          <table>
            <tbody>
            <tr>
                <td className="votecell">
                  <div className="vote">
                    <input name="_id_" value="47446738" type="hidden"/>
                      <tr><a className="vote-up-off" title="This question shows research effort; it is useful and clear"><img src="/img/upvote.png"/>upvote</a></tr>
                      <tr><span itemProp="upvoteCount" className="vote-count-post ">{props.post._source.vote}</span></tr>
                      <tr><a className="vote-down-off" title="This question does not show any research effort; it is unclear or not useful"><img src="/img/downvote.png"/>down vote</a></tr>
                  </div>
                </td>
                <td>
                  <div className="post-text" itemProp="text">
                    <div dangerouslySetInnerHTML={{ __html: props.post._source.content.replace(/\\n/g,'')}} />
                 <pre className="default prettyprint prettyprinted">
                    <code><span className="kwd">
                      {props.post._source.code}
                    </span></code>
                  </pre>
                  </div>
                </td>
            </tr>
          </tbody>
          </table>
          </div>
          <div className="started fr">
            <div className="user-info ">
              <div className="user-action-time">
                asked <span className="relativetime"> {(new Date(props.post._source.time * 1000)).toDateString()}</span>
              </div>
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
        <a name="47340028"></a>
    </div>

  );
};
export default AnswerListItem;
