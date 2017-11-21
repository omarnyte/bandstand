import merge from 'lodash/merge';

import { RECEIVE_ALL_BANDS,
         RECEIVE_BAND } from '../actions/band_actions';

const BandsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_BANDS:
      return merge({}, action.bands);
    case RECEIVE_BAND:
      return merge({}, oldState, {[action.band.id]: action.band});
    default:
      return oldState;
  }
};

export default BandsReducer;
