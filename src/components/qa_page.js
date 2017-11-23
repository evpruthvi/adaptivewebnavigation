import React, {Component} from 'react';
import AnswerList from './answer_list';
import Question from './question';
import QaFooter from './qa_page_footer';
import NotFoundPage from './NotFoundPage'
import elasticdb from '../elasticdb';

class qaresult extends Component{
  constructor(props){
    super(props);
    this.state = { answers: [], question: [] };
    var user_id  = props.params.tag;


    elasticdb.search({
      index:'stackoverflow-data',
      type:'stackoverflowdata',
      size: 10,
      body:{
        query:{
          match:{
            tag:user_id
          }
        }
      }
    }).then(function (resp) {
        this.setState({question:resp.hits.hits[0]});
        this.setState({ answers:resp.hits.hits });
      }.bind(this),
      function(error){
        console.trace(error.message);
      }
    );
  }

  render(){
    console.log(this.state.question);
    return(
      <div>
        <AnswerList aposts = {this.state.answers} />
        <QaFooter />
      </div>
    );
  }
}
export default qaresult;
