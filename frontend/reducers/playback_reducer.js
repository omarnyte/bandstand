import merge from 'lodash/merge';

import { RECEIVE_SONG } from '../actions/playback_actions';

const PlaybackReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SONG:
      return merge({}, action.song); 
    default:
      return oldState;
  }
};

export default PlaybackReducer;
