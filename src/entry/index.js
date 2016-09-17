/* load component*/
import '../style/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { useRouterHistory } from 'react-router';
import { routerReducer } from 'react-router-redux';
import withScroll from 'scroll-behavior';
import { createHashHistory } from 'history';
import * as reducers from '../reducers';
import Routers from '../routes';

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

// Add the reducer to your store on the `routing` key
const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

const hashWithHistory = useRouterHistory(createHashHistory)({ queryKey: false });
const historyWithScroll = withScroll(hashWithHistory, (prevLocation, location) => (
  // Don't scroll if the pathname is the same.
  !prevLocation || location.pathname !== prevLocation.pathname
));


ReactDOM.render(
  <Provider store={store} key="provider">
    <Routers history={historyWithScroll} />
  </Provider>,
  document.getElementById('main-wrapper')
);


