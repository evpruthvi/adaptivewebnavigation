import React from 'react';

const AnswerListItem = (props)=>{
  return(
    <div id="answers">
      <a name="tab-top"></a>
      <div id="answers-header">
        <div className="subheader answers-subheader">
          <h2>
            {props.posts.length}
            <span style="display:none;" itemprop="answerCount">1</span>
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

      <a name="47446778"></a>
      <div id="answer-47446778" className="answer" data-answerid="47446778" itemscope="" itemtype="http://schema.org/Answer">
        <table>
          <tbody><tr>
            <td className="votecell">
              <div className="vote">
                <input name="_id_" value="47446778" type="hidden"/>
                  <a className="vote-up-off" title="This answer is useful">up vote</a>
                  <span itemprop="upvoteCount" className="vote-count-post ">0</span>
                  <a className="vote-down-off" title="This answer is not useful">down vote</a>
              </div>
            </td>
            <td className="answercell">
              <div className="post-text" itemprop="text">
                <p>{props.post._source.text}</p>

                <pre className="default prettyprint prettyprinted" style="">
                  <code><span className="kwd">
                    {this.props._source.code}
                  </span></code>
                </pre>
              </div>

              <table className="fw">
                <tbody><tr>
                  <td className="vt">
                      <td className="post-signature" align="right">
                        <div className="user-info user-hover">
                          <div className="user-action-time">
                            answered <span title="2017-11-23 02:47:54Z" className="relativetime">{this.props._si=ource.time}</span>
                          </div>
                          <div className="user-gravatar32">
                            <a href="https://stackoverflow.com/users/6264243/shadow-fiend"><div className="gravatar-wrapper-32"><img src="/img/user.png" alt="" width="32" height="32"/></div></a>
                          </div>
                          <div className="user-details">
                            <a href="https://stackoverflow.com/users/6264243/shadow-fiend">Shadow Fiend</a>
                            <div className="-flair">
                              <span className="reputation-score" title="reputation score " dir="ltr">1,705</span><span title="1 gold badge"><span className="badge1"></span><span className="badgecount">1</span></span><span title="3 silver badges"><span className="badge2"></span><span className="badgecount">3</span></span><span title="12 bronze badges"><span className="badge3"></span><span className="badgecount">12</span></span>
                            </div>
                          </div>
                        </div>
                  </td>
                  </td>
                  </tr>
            </tbody></table>
            </td>
          </tr>
        </tbody>
        </table>
      </div>

      <a name="new-answer"></a>
      <form id="post-form" action="/questions/47446738/answer/submit" method="post" className="post-form">
        <input id="post-id" value="47446738" type="hidden"/>
          <input id="qualityBanWarningShown" name="qualityBanWarningShown" value="false" type="hidden"/>
            <input name="referrer" value="https://stackoverflow.com/" type="hidden"/>
              <h2 className="space">Your Answer</h2>

              <div id="post-editor" className="post-editor js-post-editor"/>

          <div className="form-submit cbt">
            <input id="submit-button" value="Post Your Answer" tabindex="110" type="submit"/>
              <a href="#" className="btn-clear discard-answer dno">discard</a>
          </div>
      </form>

      <h2 className="bottom-notice" data-loc="1">
        Not the answer you're looking for?
        Browse other questions tagged <a href="https://stackoverflow.com/questions/tagged/javascript" className="post-tag" title="show questions tagged 'javascript'" rel="tag">javascript</a> <a href="https://stackoverflow.com/questions/tagged/jquery" className="post-tag" title="show questions tagged 'jquery'" rel="tag">jquery</a>  or <a href="https://stackoverflow.com/questions/ask">ask your own question</a>.
      </h2>
    </div>
);
};
export default AnswerListItem;
