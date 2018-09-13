import get from 'lodash/get';
import { REDUCE_SEATS_LEFT, DISABLE_TOUR } from 'Actions/actionTypes';

const toursReducer = (state = [], action = {}) => {
  switch (action.type) {
    case REDUCE_SEATS_LEFT:
      return Object.assign({}, state, {seatsLeft: (state.seatsLeft- 1)});
    case DISABLE_TOUR:
      return Object.assign({}, state, {isAvailable: false});
    default: 
      return state;
  }
};

export default toursReducer;