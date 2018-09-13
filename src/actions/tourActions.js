import { REDUCE_SEATS_LEFT, DISABLE_TOUR } from './actionTypes';

export const bookTourAction = (groupIndex, tourIndex) => {
  return {
    type: REDUCE_SEATS_LEFT, 
    data: {
      tourIndex, groupIndex
    }
  };
};

export const disableTourAction = (groupIndex, tourIndex) => {
  return {
    type: DISABLE_TOUR, 
    data: {
      tourIndex, groupIndex
    }
  };
};