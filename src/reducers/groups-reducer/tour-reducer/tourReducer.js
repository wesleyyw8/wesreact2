import get from 'lodash/get';
import { EDIT_SEATS_LEFT, LOAD_AVAILABILITY_SUCCESS } from 'Actions/actionTypes';

function toursReducer(state = [], action = {}) {
  switch (action.type) {
    case EDIT_SEATS_LEFT:
      return state;
    default: 
      return state;
  }
}

export default toursReducer;