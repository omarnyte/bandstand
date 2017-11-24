import * as BandAPIUtil from '../utils/band_api_util';

export const RECEIVE_ALL_BANDS = 'RECEIVE_ALL_BANDS';
export const RECEIVE_BAND = 'RECEIVE_BANDS';

// Thunk actions
export const fetchBands = () => dispatch => (
  BandAPIUtil.fetchBands()
  .then(bandsResp => dispatch(receiveAllBands(bandsResp)))
);

export const fetchBand = (bandId) => dispatch => (
  BandAPIUtil.fetchBand(bandId)
  .then(bandResp => dispatch(receiveBand(bandResp)))
);


// Sync actions
const receiveAllBands = (bands) => ({
  type: RECEIVE_ALL_BANDS,
  bands
});

const receiveBand = (band) => ({
  type: RECEIVE_BAND,
  band
});
