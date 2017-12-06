import React, {Component} from 'react';
import PostList from './post_list';
import NotFoundPage from './NotFoundPage'
import elasticdb from '../elasticdb';
import cookie from 'react-cookie';
import axios from 'axios';
import HotTopicsList from './sidebar_hot_topics'

/*
  This module renders the questions to be posted by default
  on the initial page. If the user is logged-in the the browser
  cookie is varified and corresponding usermodel tags are obtained
  from the database, upon which elastic search query is run.
  If no user-is logged in , we give a hard-coded by default tag-based
  elastic search results.
 */


class DefaultResult extends Component{
  constructor(props){
    super(props);
    this.state = { hits: [], hotTopics:[]};

    //If user logged-in(cookie is set) then get the results from the usermodel database
    if(cookie.load('userid')){

      //axios api call to the backend
      axios.get('/users/api')
        .then(function(response) {
          let tag = response.data[0];
          console.log("before search"+tag);
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
        }.bind(this))
        .catch(function (error) {
        //  console.log(error);
        });
    }

    //If user logged-in(cookie not set) then
    else {
      var tag = 'java';
      elasticdb.search({
        index: 'stackoverflow-data',
        type: 'stackoverflowdata',
        size: 10,
        body: {
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
          this.setState({hits: resp.hits.hits});
        }.bind(this),
        function (error) {
      //    console.trace(error.message);
        });


    }

    axios.get('/users/hottopics')
      .then(function (response) {
        let tag = response.data[0];
        this.setState({hotTopics:tag});
      }.bind(this))
      .catch(function (error) {
       // console.log(error);
      });
  }

  render(){
    return(
      <div>
        <PostList posts = {this.state.hits} />
        <HotTopicsList hposts = {this.state.hotTopics} />
      </div>
    );
  }
}

export default DefaultResult;
