import { combineReducers } from 'redux';

import BandsReducer from './bands_reducer';
import SessionReducer from './session_reducer'; 

export default combineReducers({
  bands: BandsReducer
});
