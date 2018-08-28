import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import groups from './groups-reducer/groupsReducer';

const rootReducer = combineReducers({
  groups,
  routing: routerReducer
});

export default rootReducer;