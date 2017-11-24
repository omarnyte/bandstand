import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

// begin test
import { fetchBands, fetchBand } from './actions/band_actions';
import { login, logout, signup } from './actions/session_actions';
// end test

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  let preloadedState = undefined;
  if (window.currentBand) {
    preloadedState = {
      session: {
        currentBand: window.currentBand
      }
    };
  }
  const store = configureStore(preloadedState);
  ReactDOM.render(<Root store={ store } />, root);

  // begin test
  window.fetchBands = fetchBands;
  window.fetchBand = fetchBand;
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.store = store;

  // end test
});
