import { REDUCE_SEATS_LEFT } from './actionTypes';

export const bookTourAction = (groupIndex, tourIndex) => {
  return {
    type: REDUCE_SEATS_LEFT, 
    data: {
      tourIndex, groupIndex
    }
  };
};