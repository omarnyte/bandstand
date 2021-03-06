import merge from 'lodash/merge';

import { RECEIVE_ALBUM } from '../actions/album_actions';

const SongsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_ALBUM:
      // converts an array of album objects (returned by RECEIVE_ALBUM)
      // into a single object of key-value pairs with the album id as a
      // key and the album object as a value
      const songs = action.payload.songs.reduce((acc, song) => {
        acc[song.id] = song;
        return acc;
      }, {});
      return merge({}, oldState, songs);
    default:
      return oldState;
  }
};

export default SongsReducer;
