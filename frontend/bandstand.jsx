import React from 'react';
import ReactDOM from 'react-dom';

// import Root from './components/root';
import configureStore from './store/store';

// begin test
import * as BandAPIUtil from './util/band_api_util';
// end test

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  const root = document.getElementById("root");
  ReactDOM.render((<span>Currently in bandstand.jsx</span>), root);

  // begin test
  window.fetchBands = BandAPIUtil.fetchBands;
  window.fetchBand = BandAPIUtil.fetchBand;
  window.store = store;
  // end test
});
