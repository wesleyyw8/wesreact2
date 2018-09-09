import get from 'lodash/get';
import { REDUCE_SEATS_LEFT, LOAD_AVAILABILITY_SUCCESS } from 'Actions/actionTypes';

const toursReducer = (state = [], action = {}) => {
  switch (action.type) {
    case REDUCE_SEATS_LEFT:
      return Object.assign({}, state, {seatsLeft: (state.seatsLeft- 1)});
    default: 
      return state;
  }
};

export default toursReducer;