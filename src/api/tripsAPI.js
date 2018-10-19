import delay from './delay';

const availability = {
  groups: [{
    groupName: 'Group1',
    tours: [
    {
      tourName: 'Tour Name 1',
      seatsLeft: 5,
      timer: new Date(2017, 8, 23),
      isAvailable: true
    },
    {
      tourName: 'Tour Name 2',
      seatsLeft: 4,
      timer: new Date(2019, 10, 12),
      isAvailable: true
    }, 
    {
      tourName: 'Tour Name 3',
      seatsLeft: 11,
      timer: new Date(2018, 9, 19),
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
      timer: new Date(2018, 11, 20),
      isAvailable: true
    }, {
      tourName: 'Tour Name 5',
      seatsLeft: 2,
      timer: new Date(2018, 11, 22),
      isAvailable: true
    }, {
      tourName: 'Tour Name 6',
      seatsLeft: 7,
      timer: new Date(2018, 11, 24),
      isAvailable: true
    }
    ]
  },{
    groupName: 'Group3',
    tours: [{
      tourName: 'Tour Name 7',
      seatsLeft: 5,
      timer: new Date(2018, 11, 25),
      isAvailable: false
    }, {
      tourName: 'Tour Name 8',
      seatsLeft: 5,
      timer: new Date(2018, 11, 27),
      isAvailable: true
    }]
  }
  ]
};

class TripsAPI {
  static getAvailability() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], availability));
      }, delay);
    });
  }
}

export default TripsAPI;