import * as SessionAPIUtil from '../utils/session_api_util';

export const RECEIVE_CURRENT_BAND = 'RECEIVE_CURRENT_BAND';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

// thunk action creators
export const login = (bandCredentials) => dispatch => (
  SessionAPIUtil.login(bandCredentials).then(
    bandResp => (dispatch(receiveCurrentBand(bandResp))),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout().then(bandResp => dispatch(receiveCurrentBand(null)))
);

export const signup = (band) => dispatch => (
  SessionAPIUtil.signup(band).then(
    bandResp => dispatch(receiveCurrentBand(bandResp)),
    (errors) => dispatch(receiveErrors(errors.responseJSON)))
);


// sync action creators
const receiveCurrentBand = (currentBand) => ({
  type: RECEIVE_CURRENT_BAND,
  currentBand
});

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});
