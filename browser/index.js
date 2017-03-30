import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import NewsFeed from './NewsFeed';
import Reactions from './Reactions';
import MainContainer from './MainContainer';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={MainContainer}>
      <Route path="news" component={NewsFeed} />
      <Route path="reactions" component={Reactions} />
      <IndexRoute component={NewsFeed} />
    </Route>
  </Router>,
  document.getElementById('app')
);


