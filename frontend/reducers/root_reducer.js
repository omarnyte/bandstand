import { combineReducers } from 'redux';

import BandsReducer from './bands_reducer';

export default combineReducers({
  bands: BandsReducer
});
