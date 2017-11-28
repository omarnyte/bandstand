import merge from 'lodash/merge';

import { RECEIVE_SONG, CLEAR_SONG } from '../actions/playback_actions';

const _nullSong = ({
   song_location: ''
});

const PlaybackReducer = (oldState = _nullSong, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SONG:
      return merge({}, action.song);
    case CLEAR_SONG:
      return _nullSong;  
    default:
      return oldState;
  }
};

export default PlaybackReducer;
