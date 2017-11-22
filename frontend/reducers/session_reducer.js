import merge from 'lodash/merge';

import { RECEIVE_CURRENT_BAND } from '../actions/session_actions';

const _nullBand = Object.freeze({ currentBand: null});

const sessionReducer = (state = _nullBand, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_BAND:
        const currentBand = action.currentBand;
        return merge({}, { currentBand });
    default:
      return state;
  }
};

export default sessionReducer;
