import get from 'lodash/get';
import { REDUCE_SEATS_LEFT, LOAD_AVAILABILITY_SUCCESS } from 'Actions/actionTypes';
import tourReducer from './tour-reducer/tourReducer';

const groupsReducer = (state = [], action = {}) => {
  switch (action.type) {
    case REDUCE_SEATS_LEFT:
      const tourIndex = get(action, 'data.tourIndex', null);
      return Object.assign({}, state, { tours: [
        ...state.tours.slice(0, tourIndex),
        tourReducer(state.tours[tourIndex], action),
        ...state.tours.slice(tourIndex+1)
      ] });
    default: 
      return state;
  }
}

export default groupsReducer;