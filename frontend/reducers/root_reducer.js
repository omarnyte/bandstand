import { combineReducers } from 'redux';

import bandsReducer from './bands_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';

export default combineReducers({
  bands: bandsReducer,
  session: sessionReducer,
  errors: errorsReducer
});
