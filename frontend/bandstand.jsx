import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

// begin test
// import { login, logout, signup } from './actions/session_actions';
// import {
//   fetchBands,
//   fetchBand,
//   followBand,
//   unfollowBand } from './actions/band_actions';
// import {
//   fetchAlbums,
//   fetchAlbum,
//   createAlbum,
//   deleteAlbum } from './actions/album_actions';
// import { searchDB } from './actions/search_actions';
// import {
  // fetchPermittedGenres,
  // fetchBandsByGenreId,
  // fetchBandsByGenre} from './actions/discover_actions';
import {
  fetchFollowedBands } from './actions/band_actions';
// end test

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
  }
  const store = configureStore(preloadedState);
  ReactDOM.render(<Root store={ store } />, root);

  // begin test
  window.store = store;
  // window.login = login;
  // window.logout = logout;
  //
  // window.signup = signup;
  // window.fetchBands = fetchBands;
  // window.fetchBand = fetchBand;
  //
  // window.fetchAlbums = fetchAlbums;
  // window.fetchAlbum = fetchAlbum;
  // window.createAlbum = createAlbum;
  // window.deleteAlbum = deleteAlbum;
  // window.searchDB = searchDB;
  // window.fetchPermittedGenres = fetchPermittedGenres;
  // window.fetchBandsByGenreId = fetchBandsByGenreId;
  // window.fetchBandsByGenre = fetchBandsByGenre;
  window.fetchFollowedBands = fetchFollowedBands;
  // window.followBand = followBand;
  // window.unfollowBand = unfollowBand;
  // end test
});
