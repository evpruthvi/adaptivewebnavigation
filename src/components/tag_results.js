import React, {Component} from 'react';
import PostList from './post_list';
import NotFoundPage from './NotFoundPage'
import elasticdb from '../elasticdb';
import cookie from 'react-cookie';
import axios from 'axios';
import HotTopicsList from './sidebar_hot_topics'


/*
  This module takes the tags appended in URL entered and gives the related questions
  from the elastic search database. We implemented the most relevant content matching
  only as of now(content), collaboration filtering with respect to votes is in progress.
 */
class result extends Component{

  constructor(props){
		super(props);
   	this.state = { hits: [], hotTopics:[] };
		var tag  = props.params.tag;
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
        });


    axios.get('/users/hottopics')
      .then(function (response) {
        let tag = response.data[0];
        this.setState({hotTopics:tag});
        console.log("sidebar search" + tag);

      }.bind(this))
      .catch(function (error) {
        console.log(error);
      });

  }

    	render(){
	      console.log(cookie.load('userid'));
        return(
				<div>
					<PostList posts = {this.state.hits} />
          <HotTopicsList hposts = {this.state.hotTopics} />

        </div>
			);
		}
} 
export default result;
