import get from 'lodash/get';
// import { EDIT_SEATS_LEFT, EDIT_AVAILABILITY } from '../../actions/actionTypes';
import { EDIT_SEATS_LEFT, EDIT_AVAILABILITY } from 'Actions';

const availability = (state = {}, action = {}) => {
  const groupIndex = get(action, 'data.groupIndex', null);
  switch (action.type) {
    case EDIT_SEATS_LEFT: 
      return {
        groups: [
          ...state.groups.slice(0, groupIndex),
          // groups(state.groups[groupIndex], action),
          ...state.groups.slice(groupIndex+1)
        ]
      };
    case EDIT_AVAILABILITY:
      return {
        groups: [
          ...state.groups.slice(0, groupIndex),
          // groups(state.groups[groupIndex], action),
          ...state.groups.slice(groupIndex+1)
        ]
      };
    default: 
      return state;
  }
};

export default availability;