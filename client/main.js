import React from 'react';
import ReactDOM from 'react-dom';
import {Router, useRouterHistory} from 'react-router';
import routes from './routes';
import {createHistory} from 'history';

export const browserHistory = useRouterHistory(createHistory)({basename: '/'});

// Expose globally
window.React = React;

ReactDOM.render(
    <Router routes={routes} history={browserHistory}/>, document.getElementById('app'));
