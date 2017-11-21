import React from 'react';
import ReactDOM from 'react-dom';

// import Root from './components/root';
// import configureStore from './store/store';

// begin test
import * as BandAPIUtil from './util/band_api_util';

document.addEventListener("DOMContentLoaded", () => {
  // begin test
  window.fetchBands = BandAPIUtil.fetchBands;
  window.fetchBand = BandAPIUtil.fetchBand; 
  // end test

  const root = document.getElementById("root");
  ReactDOM.render((<span>Currently in bandstand.jsx</span>), root);
});
