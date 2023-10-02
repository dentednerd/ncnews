import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';

import reducer from './redux/reducer';
import ScrollToTop from './components/atoms/ScrollToTop';
import App from './App';

const store = createStore(reducer, applyMiddleware(thunk));
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <ScrollToTop />
      <App />
    </Router>
  </Provider>, document.getElementById('root'));
