import merge from 'lodash/merge';
import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_BAND,
  CLEAR_ERRORS} from '../actions/session_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_BAND:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};
