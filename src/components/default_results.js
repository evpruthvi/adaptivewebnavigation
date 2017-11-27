import React, {Component} from 'react';
import PostList from './post_list';
import NotFoundPage from './NotFoundPage'
import elasticdb from '../elasticdb';

class DefaultResult extends Component{
  constructor(props){
    super(props);
    this.state = { hits: []};
    var tag  = 'java';

    elasticdb.search({
      index:'stackoverflow-data',
      type:'stackoverflowdata',
      size: 10,
      body:{
        query: {
          bool: {
            must: [
              {
                match: {
                  tag: tag
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
        this.setState({ hits:resp.hits.hits});
      }.bind(this),
      function(error){
        console.trace(error.message);
      }

    );
  }

  render(){
    return(
      <div>
        <PostList posts = {this.state.hits} />
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
    return a._source.time - b._source.time;
  });
  return output;
}

export default DefaultResult;
