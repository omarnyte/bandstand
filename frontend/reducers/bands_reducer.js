import merge from 'lodash/merge';

import { RECEIVE_ALL_BANDS,
         RECEIVE_BAND } from '../actions/band_actions';
import { RECEIVE_ALBUM } from '../actions/album_actions';

const BandsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_BANDS:
      return merge({}, action.bands);
    case RECEIVE_BAND:
      // adds and array of album indeces under the received band's 
      // slice of state
      const bandBundle = action.payload.band;
      bandBundle.song_ids = action.payload.albums.map(album => album.id);
      return merge({}, oldState, {[bandBundle.id]: bandBundle});
    case RECEIVE_ALBUM:
      return merge({}, oldState, {[action.payload.band.id]: action.payload.band});
    default:
      return oldState;
  }
};

export default BandsReducer;
