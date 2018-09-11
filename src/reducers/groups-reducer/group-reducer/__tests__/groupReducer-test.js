import groupReducer from '../groupReducer';
import { REDUCE_SEATS_LEFT } from 'Actions/actionTypes';

describe('group reducer', () => {
  const state = {
    tours: [{
        tourName: 'Tour Name 1',
        seatsLeft: 5,
        timer: {
          days: 182,
          hours: 15,
          minutes: 20,
          seconds: 12
        },
        isAvailable: true
      },
      {
        tourName: 'Tour Name 2',
        seatsLeft: 4,
        timer: {
          days: 181,
          hours: 15,
          minutes: 20,
          seconds: 0
        },
        isAvailable: true
      },
      {
        tourName: 'Tour Name 3',
        seatsLeft: 11,
        timer: {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 10
        },
        isAvailable: true
      }
    ]
  };
  it('reduces the seatsLeft for an specific tourIndex', () => {
    const action = {
      type: REDUCE_SEATS_LEFT,
      data: {
        tourIndex: 2
      }
    };
    expect(groupReducer(state, action)).toEqual({
      tours: [{
          tourName: 'Tour Name 1',
          seatsLeft: 5,
          timer: {
            days: 182,
            hours: 15,
            minutes: 20,
            seconds: 12
          },
          isAvailable: true
        },
        {
          tourName: 'Tour Name 2',
          seatsLeft: 4,
          timer: {
            days: 181,
            hours: 15,
            minutes: 20,
            seconds: 0
          },
          isAvailable: true
        },
        {
          tourName: 'Tour Name 3',
          seatsLeft: 10,
          timer: {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 10
          },
          isAvailable: true
        }
      ]
    });
  });
  it('returns an empty array when groupReducer is called with no args', () => {
    expect(groupReducer()).toEqual([]);
  })
});