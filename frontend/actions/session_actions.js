import * as SessionAPIUtil from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

// thunk action creators
export const login = (userCredentials) => dispatch => (
  SessionAPIUtil.login(userCredentials).then(
    userResp => (dispatch(receiveCurrentUser(userResp))),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  )
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout().then(userResp => dispatch(receiveCurrentUser(null)))
);

export const signup = (user) => dispatch => (
  SessionAPIUtil.signup(user).then(
    userResp => dispatch(receiveCurrentUser(userResp)),
    (errors) => dispatch(receiveErrors(errors.responseJSON)))
);



// sync action creators
const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});
