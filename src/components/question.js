import React from 'react';

const Question = (props) => {
  if(!props.qpost){
    return <div>Loading</div>
  }

  var userLink = `/search/user/${props.qpost._source.user_id}`;
  var titleLink = `/search/qa/${props.qpost._source.title}`;
  var tag=[];
  for(var i=0;i<3;i++){
    tag[i]=props.qpost._source.tag.split(" ")[i];
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
        <div className="question" data-questionid="47446738" id="question">
          <table>
            <tbody><tr>
            <td className="votecell">

            <div className="vote">
              <input name="_id_" value="47446738" type="hidden"/>
              <a className="vote-up-off" title="Good one!"><img src="/img/upvote.png"/>up vote</a>
              <span itemProp="upvoteCount" className="vote-count-post ">{props.qpost._source.vote}</span>
              <a className="vote-down-off" title="Not bad!"><img src="/img/downvote.png"/>down vote</a>
            </div>
            </td>
            
            <td className="postcell">
            <div>
                <div className="post-text" itemProp="text">
                    <p>{props.qpost._source.text}</p>

                  <pre className="default prettyprint prettyprinted" styles=""><code>
                      {props.qpost._source.code}
                    </code>
                  </pre>
                </div>
                <div className="post-taglist">
                  <a href={tagLink[0]} className="post-tag" title={tagTitle[0]} rel="tag">{tag[0]}</a> <a href={tagLink[2]} className="post-tag" title={tagTitle[1]} rel="tag">{tag[1]}</a> <a href={tagLink[2]} className="post-tag" title={tagTitle[2]} rel="tag">{tag[2]}</a>
                </div>
                <table className="fw">
                  <tbody>
                    <tr className="post-signature" align="right">

                      <td className="post-signature owner">
                          <div className="user-info ">
                            <div className="user-action-time">
                                asked on <span title="2017-11-23 02:41:01Z" className="relativetime">{(new Date(props.qpost._source.time * 1000)).toDateString()}</span>
                            </div>
                            <div className="user-gravatar32">
                                <a href={userLink}><div className="gravatar-wrapper-32"><img src="/img/user.png" alt="" width="32" height="32"/></div></a>
                            </div>
                            <div className="user-details">
                                <a href={userLink}>userID: {props.qpost._source.user_id}</a>
                                <div className="-flair">
                                    <span className="reputation-score" title="reputation score " dir="ltr">{props.qpost._source.reputaion}</span>
                                </div>
                            </div>
                          </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </td>
            </tr>
            </tbody>
        </table>

      <a name="tab-top"></a>
      <div id="answers-header">
        <div className="subheader answers-subheader">
          <h2>
            <span itemProp="answerCount">{props.nanswers} Answers</span>
          </h2>
          <div>
            <div id="tabs">
              <a href="https://stackoverflow.com/questions/47446738/trigger-function-only-if-no-mouse-clicks-in-x-seconds?answertab=active#tab-top" data-nav-xhref="" title="Answers with the latest activity first" data-value="active" data-shortcut="A">
                active</a>
              <a href="https://stackoverflow.com/questions/47446738/trigger-function-only-if-no-mouse-clicks-in-x-seconds?answertab=oldest#tab-top" data-nav-xhref="" title="Answers in the order they were provided" data-value="oldest" data-shortcut="O">
                oldest</a>
              <a className="youarehere" href="https://stackoverflow.com/questions/47446738/trigger-function-only-if-no-mouse-clicks-in-x-seconds?answertab=votes#tab-top" data-nav-xhref="" title="Answers with the highest score first" data-value="votes" data-shortcut="V">
                votes</a>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};
export default Question;
