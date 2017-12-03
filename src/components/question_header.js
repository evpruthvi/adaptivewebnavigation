import React from 'react';

const QuestionHeader = (props) => {
  if(!props.qpost){
    return <div>Loading</div>
  }
return(
  <div id="question-header">
    <h1 itemProp="name"><a className="question-hyperlink">{props.qpost._source.title}</a></h1>
      <div className="aside-cta" role="navigation" aria-label="ask new question">
      <a className="btn">Ask Question</a>
    </div>
  </div>
);
};
export default QuestionHeader;
