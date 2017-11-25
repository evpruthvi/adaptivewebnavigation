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
    this.state = { answers: []};
    var title  = props.params.title;

    elasticdb.search({
      index:'stackoverflow-data',
      type:'stackoverflowdata',
      size: 10,
      body:{
        query:{
          match:{
            title:title
          }
        }
      }
    }).then(function (resp) {
        this.setState({ answers: resp.hits.hits});
      }.bind(this),
      function(error){
        console.trace(error.message);
      }
    );
  }

  render(){
    return(
      <div className="inner-content">
        <QuestionHeader qpost = {this.state.answers[0]} />
        <div id="mainbar" role="main" aria-label="question and answers">
          <Question qpost = {this.state.answers[0]} nanswers = {this.state.answers.length}/>
          <AnswerList aposts = {this.state.answers} />
          <QaFooter />

        </div>
          <SidebarList recposts = {this.state.answers} />
      </div>
    );
  }
}
export default qaresult;
