import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './components/App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Navigation />
  </Provider>,
  document.getElementById('root')
);
