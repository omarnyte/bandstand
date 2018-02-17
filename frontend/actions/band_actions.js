import * as BandAPIUtil from '../utils/band_api_util';
import * as FollowAPIUtil from '../utils/follow_api_utils';

export const RECEIVE_BAND = 'RECEIVE_BAND';
export const RECEIVE_ALL_BANDS = 'RECEIVE_ALL_BANDS';
export const RECEIVE_FOLLOWED_BANDS = 'RECEIVE_FOLLOWED_BANDS';

// Thunk actions
export const fetchBands = () => dispatch => (
  BandAPIUtil.fetchBands()
    .then(bandsResp => dispatch(receiveAllBands(bandsResp)))
);

export const fetchBand = (bandId) => dispatch => (
  BandAPIUtil.fetchBand(bandId)
    .then(bandResp => dispatch(receiveBand(bandResp)))
);

export const fetchFollowedBands = (userId) => dispatch => (
  BandAPIUtil.fetchFollowedBands(userId)
    .then(bandsResp => dispatch(receiveFollowedBands(bandsResp)))
);

export const followBand = (bandId) => dispatch => (
  FollowAPIUtil.followBand(bandId)
    .then(bandResp => dispatch(receiveBand(bandResp)))
);

export const unfollowBand = (bandId) => dispatch => (
  FollowAPIUtil.unfollowBand(bandId)
    .then(bandResp => dispatch(receiveBand(bandResp)))
);


// Sync actions
const receiveBand = (payload) => ({
  type: RECEIVE_BAND,
  payload
});

const receiveAllBands = (bands) => ({
  type: RECEIVE_ALL_BANDS,
  bands
});

const receiveFollowedBands = (bands) => ({
  type: RECEIVE_FOLLOWED_BANDS,
  bands
});
