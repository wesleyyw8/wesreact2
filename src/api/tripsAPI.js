import delay from './delay';

const availability = {
  groups: [{
    groupName: 'Group1',
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
    }, {
      tourName: 'Tour Name 2',
      seatsLeft: 4,
      timer: {
        days: 181,
        hours: 15,
        minutes: 20,
        seconds: 0
      },
      isAvailable: true
    }, {
      tourName: 'Tour Name 3',
      seatsLeft: 11,
      timer: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 10
      },
      isAvailable: true
    }]
  },{
    groupName: 'Group2',
    tours: [{
      tourName: 'Tour Name 4',
      seatsLeft: 6,
      timer: {
        days: 152,
        hours: 15,
        minutes: 20,
        seconds: 0
      },
      isAvailable: true
    }, {
      tourName: 'Tour Name 5',
      seatsLeft: 2,
      timer: {
        days: 122,
        hours: 15,
        minutes: 20,
        seconds: 0
      },
      isAvailable: true
    }, {
      tourName: 'Tour Name 6',
      seatsLeft: 7,
      timer: {
        days: 92,
        hours: 15,
        minutes: 20,
        seconds: 0
      },
      isAvailable: true
    }]
  },{
    groupName: 'Group3',
    tours: [{
      tourName: 'Tour Name 7',
      seatsLeft: 5,
      timer: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      },
      isAvailable: false
    }, {
      tourName: 'Tour Name 8',
      seatsLeft: 5,
      timer: {
        days: 212,
        hours: 15,
        minutes: 20,
        seconds: 0
      },
      isAvailable: true
    }]
  }]
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