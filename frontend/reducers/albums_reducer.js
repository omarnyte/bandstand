import merge from 'lodash/merge';

import {
  RECEIVE_ALL_ALBUMS,
  RECEIVE_ALBUM,
  REMOVE_ALBUM } from '../actions/album_actions';
import { RECEIVE_BAND } from '../actions/band_actions';

const AlbumsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_ALBUMS:
      return merge({}, action.albums);
    case RECEIVE_ALBUM:
      // adds and array of song indeces under the received album's slice
      // of state
      const albumBundle = action.payload.album;
      albumBundle.song_ids = action.payload.songs.map(song => song.id);
      return merge({}, oldState, {[albumBundle.id]: albumBundle});
    case REMOVE_ALBUM:
      let newState = merge({}, oldState);
      delete newState[action.album.id];
      return newState;
    case RECEIVE_BAND:
    // converts an array of songs objects (returned by RECEIVE_BAND)
    // into a single object of key-value pairs with the song id as a key
    // and the song object as a value
      const albums = action.payload.albums.reduce((acc, album) => {
        acc[album.id] = album;
        return acc;
      }, {});
      return merge({}, oldState, albums);
    default:
      return oldState;
  }
};

export default AlbumsReducer;
