import React, {Component} from 'react';
import AnswerList from './answer_list';
import QuestionHeader from './question_header';

import Question from './question';
import QaFooter from './qa_page_footer';
import NotFoundPage from './NotFoundPage'
import elasticdb from '../elasticdb';
import SidebarList from './sidebar_list';

class qaresult extends Component{
  constructor(props){
    super(props);
    this.state = { question:'', answers: [], recommendations:[]};
    var title  = props.params.title;

    elasticdb.search({
      index:'stackoverflow-data',
      type:'stackoverflowdata',
      body:{
        query:{
          match:{
            title:title
          }
        }
      }
    }).then(function (resp) {
        var output = processQuestionClickedResults(title,resp.hits.hits);
        var questionPost = output.shift();
        this.setState({ question: questionPost, answers:output});
      }.bind(this),
      function(error){
        console.trace(error.message);
      }
    );



    elasticdb.search({
      index:'stackoverflow-data',
      type:'stackoverflowdata',
      size: 20,
      body:{
        query: {
          bool: {
            must: [
              {
                match: {
                  title: title
                }
              },
              {
                match: {
                  type: 'question'
                }
              }
            ]
          }
        }
      }
    }).then(function (resp) {
        var output = processRecommendations(title,resp.hits.hits);
        this.setState({ recommendations: output.slice(0,10)});
      }.bind(this),
      function(error){
        console.trace(error.message);
      }
    );

  }

  render(){
    return(
      <div className="inner-content">
        <QuestionHeader qpost = {this.state.question} />
        <div id="mainbar" role="main" aria-label="question and answers">
          <Question qpost = {this.state.question} nanswers = {this.state.answers.length}/>
          <AnswerList aposts = {this.state.answers} />
          <QaFooter />

        </div>
        <SidebarList recposts = {this.state.recommendations} />
      </div>
    );
  }
}

function processQuestionClickedResults(question,hits) {
  var output = [];
  for(var i = 0; i < hits.length; i++){
    if(hits[i]._source.title.indexOf(question) !== -1){
      output.push(hits[i]);
    }
  }
  output.sort(function (a,b) {
    return b._source.vote - a._source.vote;
  });
  return output;
}


function processRecommendations(question,hits) {
  var output = [];
  for(var i = 0; i < hits.length; i++){
    if(hits[i]._source.title.indexOf(question) == -1){
      output.push(hits[i]);
    }
  }
  output.sort(function (a,b) {
    return b._source.vote - a._source.vote;
  });
  return output;
}



export default qaresult;
