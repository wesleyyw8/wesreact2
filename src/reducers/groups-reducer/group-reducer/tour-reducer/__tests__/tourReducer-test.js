import tourReducer from '../tourReducer';
import { REDUCE_SEATS_LEFT } from 'Actions/actionTypes';

describe('tours reducer', () => {
  it('reduces the quantity of seats', () => {
    const state = {
      seatsLeft: 4
    };
    const action = {
      type: REDUCE_SEATS_LEFT
    };
    expect(tourReducer(state, action)).toEqual({
      seatsLeft: 3
    });
  });
  it('calls the tourReducer with no args', () => {
    expect(tourReducer()).toEqual([]);
  });
});