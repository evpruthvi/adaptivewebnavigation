import React, {Component} from 'react';
import PostList from './post_list';
import NotFoundPage from './NotFoundPage'
import elasticdb from '../elasticdb';

class DefaultResult extends Component{
  constructor(props){
    super(props);
    this.state = { hits: [] };
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
      }}).then(function (resp) {
        this.setState({ hits:resp.hits.hits });
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
export default DefaultResult;
