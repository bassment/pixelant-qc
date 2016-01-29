import React from 'react';
import { Route } from 'react-router';

import App from './components/App';
import Home from './components/Home/Home';
import Count from './components/Count/Count';
import Survey from './components/Survey/Survey';
import Type from './components/Survey/Type';
import Section from './components/Survey/Section';
import Browser from './components/Survey/Browser';
import Email from './components/Survey/Email';
import Report from './components/Survey/Report';

import UserStore from './stores/UserStore';

const requireAuth = (nextState, replace) => {
  const state = UserStore.getState();

  if (!state.user) replace('/');
};

const routes = (
  <Route component={App}>
    <Route path="/" component={Home} />
    <Route path="/count" component={Count} onEnter={requireAuth} />
    <Route path="/survey" component={Survey} onEnter={requireAuth} />
    <Route path="/survey/type" component={Type} onEnter={requireAuth} />
    <Route path="/survey/section" component={Section} onEnter={requireAuth} />
    <Route path="/survey/browser" component={Browser} onEnter={requireAuth} />
    <Route path="/survey/email" component={Email} onEnter={requireAuth} />
    <Route path="/survey/reports" component={Report} onEnter={requireAuth} />
  </Route>
);

export default routes;
