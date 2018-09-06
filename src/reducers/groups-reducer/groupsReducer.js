import get from 'lodash/get';
import { EDIT_SEATS_LEFT, LOAD_AVAILABILITY_SUCCESS } from 'Actions/actionTypes';
import tourReducer from 'tour-reducer/tourReducer';

function groupsReducer(state = [], action = {}) {
  switch (action.type) {
    case LOAD_AVAILABILITY_SUCCESS: 
      const groups = get(action, 'groups', null);
      return [
        ...groups
      ];
    case EDIT_SEATS_LEFT:
      tourReducer(state, action);
    default: 
      return state;
  }
}

export default groupsReducer;