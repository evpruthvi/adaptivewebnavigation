'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import NotFoundPage from './components/NotFoundPage';
import post_list_item from './components/post_list_item';
import post_list from './components/post_list';
import tag_results from './components/tag_results';
import user_results from './components/user_results';
import qa_page from './components/qa_page';
import default_results from './components/default_results';
import search_results from './components/search_results';
import qa_page_votes from './components/qa_page_votes';

const routes = (
  <Route path="/" component={Layout}>
    <Route path="/default" component={default_results}/>
    <Route path="/search/bar/(:search)" component={search_results}/>
    <Route path="/search/tag/:tag" component={tag_results}/>
    <Route path="/search/user/:userid" component={user_results}/>
    <Route path="/search/qa/:title" component={qa_page}/>
    <Route path="/search/qa/votes/:title" component={qa_page_votes}/>
    <Route path = "/so" component={post_list_item}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
