import merge from 'lodash/merge';

import {
  RECEIVE_ALL_ALBUMS,
  RECEIVE_ALBUM,
  REMOVE_ALBUM } from '../actions/album_actions';

const AlbumsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_ALBUMS:
      return merge({}, action.albumxs);
    case RECEIVE_ALBUM:
      console.log(action.payload);
      const albumBundle = action.payload.album;
      albumBundle.song_ids = action.payload.songs.map(song => song.id);

      return merge({}, oldState, {[albumBundle.id]: albumBundle});
    case REMOVE_ALBUM:
      let newState = merge({}, oldState);
      delete newState[action.album.id];
      return newState;
    default:
      return oldState;
  }
};

export default AlbumsReducer;
