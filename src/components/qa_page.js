import React, {Component} from 'react';
import answer from './answer_list_item';
import QuestionPost from './question';
import AnswerList from './answer_list';
import elasticdb from '../elasticdb';

class QAPage extends Component{
  constructor(props) {
    super(props);
    this.state = {question: [], answers:[]};

    elasticdb.search({
      index:'stackoverflow-data',
      type:'stackoverflowdata',
      size: 10,
      body:{
        query:{
          match:{
            tag:'java'
          }
        }
      }
    }).then(function (resp) {
        this.setState({question: resp.hits.hits});
        this.setState({ answers:resp.hits.hits });
      }.bind(this),
      function(error){
        console.trace(error.message);
      }
    );
  }
    render(){
      return(
        <div>
          <AnswerList aposts = {this.state.answers} />;
        </div>
      );
    }
}
export default QAPage;
