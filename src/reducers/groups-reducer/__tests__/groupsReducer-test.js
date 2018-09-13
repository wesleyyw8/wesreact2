import { REDUCE_SEATS_LEFT, LOAD_AVAILABILITY_SUCCESS, DISABLE_TOUR } from 'Actions/actionTypes';
import groupsReducer from '../groupsReducer';

describe('groups reducer', () => {
  const state = [{
    groupName: 'Group1',
    tours: [
      {
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
    ]},{
    groupName: 'Group2',
    tours: [
      {
        tourName: 'Tour Name 4',
        seatsLeft: 6,
        timer: {
          days: 152,
          hours: 15,
          minutes: 20,
          seconds: 0
        },
        isAvailable: true
      },
      {
        tourName: 'Tour Name 5',
        seatsLeft: 2,
        timer: {
          days: 122,
          hours: 15,
          minutes: 20,
          seconds: 0
        },
        isAvailable: true
      },
      {
        tourName: 'Tour Name 6',
        seatsLeft: 7,
        timer: {
          days: 92,
          hours: 15,
          minutes: 20,
          seconds: 0
        },
        isAvailable: true
      }
    ]
  },{
    groupName: 'Group3',
    tours: [
      {
        tourName: 'Tour Name 7',
        seatsLeft: 5,
        timer: {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        },
        isAvailable: false
      },
      {
        tourName: 'Tour Name 8',
        seatsLeft: 5,
        timer: {
          days: 212,
          hours: 15,
          minutes: 20,
          seconds: 0
        },
        isAvailable: true
      }
    ]
  }];
  it('REDUCE_SEATS_LEFT reduces the seats left property for an specific tourIndex and groupIndex', () => {
    const action = {
      type: REDUCE_SEATS_LEFT,
      data: {
        tourIndex: 2,
        groupIndex: 1
      }
    }
    expect(groupsReducer(state, action)).toEqual([{
        groupName: 'Group1',
        tours: [
          {
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
      },
      {
        groupName: 'Group2',
        tours: [
          {
            tourName: 'Tour Name 4',
            seatsLeft: 6,
            timer: {
              days: 152,
              hours: 15,
              minutes: 20,
              seconds: 0
            },
            isAvailable: true
          },
          {
            tourName: 'Tour Name 5',
            seatsLeft: 2,
            timer: {
              days: 122,
              hours: 15,
              minutes: 20,
              seconds: 0
            },
            isAvailable: true
          },
          {
            tourName: 'Tour Name 6',
            seatsLeft: 6,
            timer: {
              days: 92,
              hours: 15,
              minutes: 20,
              seconds: 0
            },
            isAvailable: true
          }
        ]
      },
      {
        groupName: 'Group3',
        tours: [
          {
            tourName: 'Tour Name 7',
            seatsLeft: 5,
            timer: {
              days: 0,
              hours: 0,
              minutes: 0,
              seconds: 0
            },
            isAvailable: false
          },
          {
            tourName: 'Tour Name 8',
            seatsLeft: 5,
            timer: {
              days: 212,
              hours: 15,
              minutes: 20,
              seconds: 0
            },
            isAvailable: true
          }
        ]
      }
    ]);
  });
  it('LOAD_AVAILABILITY_SUCCESS, sets the groups of the state', () => {
    const action = {
      groups: [{
        a: 3
      }],
      type: LOAD_AVAILABILITY_SUCCESS
    };
    expect(groupsReducer(null, action)).toEqual([{
      a: 3
    }]);
  });
  it('makes an tour unavailable by tourIndex and groupIndex with type DISABLE_TOUR', () => {
    const action = {
      type: DISABLE_TOUR,
      data: {
        tourIndex: 1,
        groupIndex: 0
      }
    };
    const expectedState = state;
    console.log(expectedState)
    expectedState[0].tours[1].isAvailable = false;
    expect(groupsReducer(state, action)).toEqual(expectedState);

  });
  it('calls groupsReducer with no args', () => {
    expect(groupsReducer()).toEqual([])
  });
});