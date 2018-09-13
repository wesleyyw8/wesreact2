import get from 'lodash/get';
import { REDUCE_SEATS_LEFT, LOAD_AVAILABILITY_SUCCESS, DISABLE_TOUR } from 'Actions/actionTypes';
import groupReducer from './group-reducer/groupReducer';

const groupsReducer = (state = [], action = {}) => {
  let tourIndex;
  let groupIndex;
  switch (action.type) {
    case LOAD_AVAILABILITY_SUCCESS: 
      const groups = get(action, 'groups', null);
      return [
        ...groups
      ];
    case REDUCE_SEATS_LEFT:
      tourIndex = get(action, 'data.tourIndex', null);
      groupIndex = get(action, 'data.groupIndex', null);
      return [
        ...state.slice(0, groupIndex),
        groupReducer(state[groupIndex], action),
        ...state.slice(groupIndex+1)
      ];
    case DISABLE_TOUR:
      tourIndex = get(action, 'data.tourIndex', null);
      groupIndex = get(action, 'data.groupIndex', null);
      return [
        ...state.slice(0, groupIndex),
        groupReducer(state[groupIndex], action),
        ...state.slice(groupIndex+1)
      ];
    default: 
      return state;
  }
};

export default groupsReducer;