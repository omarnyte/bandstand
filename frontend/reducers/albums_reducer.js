import merge from 'lodash/merge';

import {
  RECEIVE_ALL_ALBUMS,
  RECEIVE_ALBUM,
  REMOVE_ALBUM } from '../actions/album_actions';

const AlbumsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_ALBUMS:
      return merge({}, action.albums);
    case RECEIVE_ALBUM:
      return merge({}, oldState, {[action.album.id]: action.album});
    case REMOVE_ALBUM:
      let newState = merge({}, oldState);
      delete newState[action.album.id];
      return newState;
    default:
      return oldState;
  }
};

export default AlbumsReducer;
