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

const routes = (
  <Route path="/" component={Layout}>
    <Route path="/default" component={default_results}/>
    <Route path="/search/tag/:tag" component={tag_results}/>
    <Route path="/search/user/:userid" component={user_results}/>
    <Route path="/search/qa/:tag" component={qa_page}/>
    <Route path = "/so" component={post_list_item}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
