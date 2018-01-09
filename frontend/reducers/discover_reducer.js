import merge from 'lodash/merge';

import {
    RECEIVE_PERMITTED_GENRES,
    RECEIVE_BANDS_BY_GENRE_ID
  } from '../actions/discover_actions';


const DiscoverReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_PERMITTED_GENRES:
      return merge({},  action.genres);
    default:
      return oldState;
  }
};

export default DiscoverReducer;
