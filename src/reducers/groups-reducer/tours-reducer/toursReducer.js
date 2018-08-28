import get from 'lodash/get';
import { EDIT_SEATS_LEFT, LOAD_AVAILABILITY_SUCCESS } from 'Actions';

function tours(state = {}, action = {}) {
  switch (action.type) {
    case LOAD_AVAILABILITY_SUCCESS: 
      const { isAvailable } = get(action, 'data', null);
      // return {
      //   ...state,
      //   isAvailable
      // }
    default: 
      return state;
  }
};

export default tours