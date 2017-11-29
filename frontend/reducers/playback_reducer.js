import merge from 'lodash/merge';

import { FETCH_ALBUM } from '../actions/album_actions';
import {
          SET_FIRST_SONG,
          RECEIVE_SONG,
          CLEAR_SONG,
          TOGGLE_PLAY_PAUSE,
          HANDLE_VOLUME_CHANGE } from '../actions/playback_actions';

const _nullSong = ({
   song_location: '',
   currently_playing: false,
   volume: 1
});

const PlaybackReducer = (oldState = _nullSong, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch (action.type) {

    case FETCH_ALBUM:
    newState.currently_playing = false;
      return merge({}, newState, action.payload.songs[0]);

    case SET_FIRST_SONG:
    newState.currently_playing = false;
      return merge({}, newState, action.currentSongs[0]);

    case RECEIVE_SONG:
      if (oldState.id === action.song.id) {
        newState.currently_playing = !oldState.currently_playing;
      } else {
        newState.currently_playing = true;
      }
      return merge({}, newState, action.song);

    case TOGGLE_PLAY_PAUSE:
      newState.currently_playing = !oldState.currently_playing;
      return merge({}, newState);

    case HANDLE_VOLUME_CHANGE:
      newState.volume = action.e.target.value;
      return merge({}, newState);

    case CLEAR_SONG:
      return _nullSong;
    default:
      return oldState;
  }
};

export default PlaybackReducer;
