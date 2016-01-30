import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Count from './components/Count/Count';
import Project from './components/Survey/Project';
import Type from './components/Survey/Type';
import Section from './components/Survey/Section';
import Browser from './components/Survey/Browser';
import Email from './components/Survey/Email';
import Report from './components/Survey/Report';

import UserStore from './stores/UserStore';

const requireAuth = (nextState, replace) => {
  const state = UserStore.getState();

  if (!state.user) replace('/login');
};

const routes = (
  <Route component={App}>
    <Route path="/" component={Home} onEnter={requireAuth} />
    <Route path="/login" component={Login} />
    <Route path="/count" component={Count} />
    <Route path="/survey" onEnter={requireAuth}>
      <IndexRoute component={Project} />
      <Route path="project" component={Project} />
      <Route path="type" component={Type} />
      <Route path="section" component={Section} />
      <Route path="browser" component={Browser} />
      <Route path="email" component={Email} />
      <Route path="reports" component={Report} />
    </Route>
  </Route>
);

export default routes;
