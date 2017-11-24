import { combineReducers } from 'redux';

import bandsReducer from './bands_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import albumsReducer from './albums_reducer';

export default combineReducers({
  bands: bandsReducer,
  albums: albumsReducer,
  session: sessionReducer,
  errors: errorsReducer
});
