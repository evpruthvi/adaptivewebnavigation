import React from 'react';

const Question = (props) => {
  if(!props.qpost){
    return <div>Loading</div>
  }
  return(
    <div>
      <div id="question-header">
          <h1 itemProp="name"><a href="https://stackoverflow.com/questions/47446738/trigger-function-only-if-no-mouse-clicks-in-x-seconds" className="question-hyperlink">{props.qpost._source.title}</a></h1>

          <div className="aside-cta" role="navigation" aria-label="ask new question">
                  <a href="https://stackoverflow.com/questions/ask" className="btn">Ask Question</a>
          </div>
      </div>

      <div id="mainbar" role="main" aria-label="question and answers">
        <div className="question" data-questionid="47446738" id="question">
          <table>
            <tbody><tr>
            <td className="votecell">

            <div className="vote">
              <input name="_id_" value="47446738" type="hidden"/>
              <a className="vote-up-off" title="This question shows research effort; it is useful and clear"><img src="/img/upvote.png"/>up vote</a>
              <span itemProp="upvoteCount" className="vote-count-post ">{props.qpost._source.vote}</span>
              <a className="vote-down-off" title="This question does not show any research effort; it is unclear or not useful"><img src="/img/downvote.png"/>down vote</a>

              <a className="star-off" href="#" title="Click to mark as favorite question (click again to undo)">favorite</a>
              <div className="favoritecount"><b></b></div>
            </div>
            </td>
            
            <td className="postcell">
            <div>
                <div className="post-text" itemProp="text">
                    <p>{props.qpost._source.text}</p>

                  <pre className="default prettyprint prettyprinted" styles=""><code>
                    <span className="kwd">
                      {props.qpost._source.code}
                    </span></code>
                  </pre>
                </div>
                <div className="post-taglist">
                    <a href="https://stackoverflow.com/questions/tagged/javascript" className="post-tag js-gps-track" title="show questions tagged 'javascript'" rel="tag">javascript</a> <a href="https://stackoverflow.com/questions/tagged/jquery" className="post-tag js-gps-track" title="show questions tagged 'jquery'" rel="tag">jquery</a>
                </div>
                <table className="fw">
                  <tbody>
                    <tr className="post-signature" align="right">

                      <td className="post-signature owner">
                          <div className="user-info ">
                            <div className="user-action-time">
                                asked <span title="2017-11-23 02:41:01Z" className="relativetime">{props.qpost._source.time} mins ago</span>
                            </div>
                            <div className="user-gravatar32">
                                <a href="https://stackoverflow.com/users/2648536/sporedev"><div className="gravatar-wrapper-32"><img src="/img/user.png" alt="" width="32" height="32"/></div></a>
                            </div>
                            <div className="user-details">
                                <a href="https://stackoverflow.com/users/2648536/sporedev">{props.qpost._source.user_id}</a>
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
        </div>
      </div>

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
