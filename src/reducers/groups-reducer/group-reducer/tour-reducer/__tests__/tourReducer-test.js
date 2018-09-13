import tourReducer from '../tourReducer';
import { REDUCE_SEATS_LEFT, DISABLE_TOUR } from 'Actions/actionTypes';

describe('tours reducer', () => {
  const state = {
    seatsLeft: 4,
    isAvailable: true
  };
  it('reduces the quantity of seats with type REDUCE_SEATS_LEFT', () => {
    const action = {
      type: REDUCE_SEATS_LEFT
    };
    expect(tourReducer(state, action)).toEqual({
      seatsLeft: 3,
      isAvailable: true
    });
  });
  it('makes an available tour disabled with type DISABLE_TOUR', () => {
    const action = {
      type: DISABLE_TOUR
    }
    expect(tourReducer(state, action)).toEqual({
      seatsLeft: 4,
      isAvailable: false
    });
  });
  it('calls the tourReducer with no args', () => {
    expect(tourReducer()).toEqual([]);
  });
});