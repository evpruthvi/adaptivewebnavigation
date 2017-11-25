import React from 'react';

const QuestionHeader = (props) => {
  if(!props.qpost){
    return <div>Loading</div>
  }
return(
  <div id="question-header">
    <h1 itemProp="name"><a href="https://stackoverflow.com/questions/47446738/trigger-function-only-if-no-mouse-clicks-in-x-seconds" className="question-hyperlink">{props.qpost._source.title}</a></h1>
      <div className="aside-cta" role="navigation" aria-label="ask new question">
      <a href="https://stackoverflow.com/questions/ask" className="btn">Ask Question</a>
    </div>
  </div>
);
};
export default QuestionHeader;
