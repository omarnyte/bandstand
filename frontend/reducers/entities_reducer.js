import { combineReducers } from 'redux';

import bandsReducer from './bands_reducer';
import albumsReducer from './albums_reducer';

export default combineReducers({
  bands: bandsReducer,
  albums: albumsReducer
}); 
