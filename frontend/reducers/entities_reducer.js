import { combineReducers } from 'redux';

import bandsReducer from './bands_reducer';
import albumsReducer from './albums_reducer';
import songsReducer from './songs_reducer';

export default combineReducers({
  bands: bandsReducer,
  albums: albumsReducer,
  songs: songsReducer
});
