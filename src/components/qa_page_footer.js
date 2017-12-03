import React from 'react';

const QaFooter = function(){


  return(
    <div>
    <form id="post-form" action="/questions/47446738/answer/submit" method="post" className="post-form">
      <div id="post-editor" className="post-editor js-post-editor">
        <input id="post-id" value="47446738" type="hidden"/>
        <input id="qualityBanWarningShown" name="qualityBanWarningShown" value="false" type="hidden"/>
        <input name="referrer" value="https://stackoverflow.com/" type="hidden"/>
        <div id="post-editor" className="post-editor js-post-editor"/>
        <div className="form-submit cbt">
          <input id="submit-button" value="Post Your Answer" tabIndex="110" type="submit"/>
          <a href="#" className="btn-clear discard-answer dno">discard</a>
        </div>
      </div>
      </form>
    </div>
  );
}
export default QaFooter;
