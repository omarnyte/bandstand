import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import playbackReducer from './playback_reducer';
import entitiesReduer from './entities_reducer';
import errorsReducer from './errors_reducer';

export default combineReducers({
  entities: entitiesReduer,
  session: sessionReducer,
  errors: errorsReducer
});
