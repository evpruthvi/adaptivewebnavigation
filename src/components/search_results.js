import React, { Component } from 'react';
import elasticdb from '../elasticdb';
import PostList from './post_list';

class SearchResults extends  Component{
  constructor(props){
    super(props);
    this.state = { hits: [] };

    /*
        Get the user id appended to the url from post request
        Do the elastic search, set the state
         */
    var searchText  = props.location.query.q;
    //console.log(props.location.query.q);
    elasticdb.search({
      index:'stackoverflow-data',
      type:'stackoverflowdata',
      size: 10,
      body:{
        query:{
          bool: {
            must: [
              {
                match: {
                  type: "question"
                }
              },
              {
                multi_match:{
                  query:searchText,
                  fields:["title","content","text","code","tag"]
                }
              }
            ]
          }
        }
      }
    }).then(function (resp) {
        this.setState({hits: resp.hits.hits});
    }.bind(this),function (err) {
      console.log('No data with this Tag!');
    });
  }
    render(){
        return(
        <div>
           <PostList posts = {this.state.hits} />
        </div>
        );
    }
}

export default SearchResults;
