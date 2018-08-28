import get from 'lodash/get';
import tours from './tours-reducer/toursReducer';
import { EDIT_SEATS_LEFT, LOAD_AVAILABILITY_SUCCESS } from 'Actions';

function groups(state = {}, action = {}) {
  const groups = get(action, 'groups', null);
  switch (action.type) {
    case LOAD_AVAILABILITY_SUCCESS: 
      return [
        ...groups
      ]
    default: 
      return state;
  }
};

export default groups;