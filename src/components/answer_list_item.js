import React from 'react';

const AnswerListItem = (props)=>{
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
                asked on <span className="relativetime"> {(new Date(props.post._source.time * 1000)).toDateString()}</span>
              </div>
              <div className="user-gravatar32">
                <a href="/users/3109293/rmh"><div className="gravatar-wrapper-32"><img src="/img/user.png"/></div></a>
              </div>
              <div className="user-details">
                <a href="/users/3109293/rmh">userID: {props.post._source.user_id}</a>
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
