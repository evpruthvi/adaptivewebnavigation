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

      <h2 className="bottom-notice" data-loc="1">
        Not the answer you're looking for?
        Browse other questions tagged <a href="https://stackoverflow.com/questions/tagged/javascript" className="post-tag" title="show questions tagged 'javascript'" rel="tag">javascript</a> <a href="https://stackoverflow.com/questions/tagged/jquery" className="post-tag" title="show questions tagged 'jquery'" rel="tag">jquery</a>  or <a href="https://stackoverflow.com/questions/ask">ask your own question</a>.
      </h2>
    </div>
  );
}
export default QaFooter;
