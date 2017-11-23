import React from 'react';

const AnswerListItem = (props)=>{
  return(
    <div>
      <li>
        <div id="answers">
          <table>
            <tbody><tr>
              <td className="votecell">
                <div className="vote">
                  <input name="_id_" value="47446778" type="hidden"/>
                  <a className="vote-up-off" title="This answer is useful">up vote</a>
                  <span itemProp="upvoteCount" className="vote-count-post ">0</span>
                  <a className="vote-down-off" title="This answer is not useful">down vote</a>
                </div>
              </td>
            </tr>
            </tbody>
          </table>

          <div className="post-text" itemProp="text">
            <p>{props.post._source.text}</p>

            <pre className="default prettyprint prettyprinted">
                  <code><span className="kwd">
                    {props.post._source.code}
                  </span></code>
                </pre>
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
        <a name="47340028"></a>
        <hr/>
      </li>
    </div>

  );
};
export default AnswerListItem;
