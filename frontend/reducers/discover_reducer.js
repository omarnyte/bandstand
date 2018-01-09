import merge from 'lodash/merge';

import {
    // RECEIVE_PERMITTED_GENRES,
    // RECEIVE_BANDS_BY_GENRE_ID,
    RECEIVE_DISCOVER_BANDS
  } from '../actions/discover_actions';


const DiscoverReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_DISCOVER_BANDS:
      return merge({},  action.bands);
    default:
      return oldState;
  }
};

export default DiscoverReducer;
