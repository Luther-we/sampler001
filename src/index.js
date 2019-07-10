import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'

import { createBrowserHistory } from 'history'

const history = createBrowserHistory();

// // Get the current location.
// const location = history.location;

// // Listen for changes to the current location.
// const unlisten = history.listen((location, action) => {
//   // location is an object like window.location
//   console.log(action, location.pathname, location.state);
// });

// Use push, replace, and go to navigate around.
// history.push('/home', { some: 'state' });

// To stop listening, call the function returned from listen().
// unlisten();

const target = document.getElementById('root')

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>
, target)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
