import countDown from '../countDown';

describe('countDown', () => {
  test('the seconds should be decreased in one', () => {
    const timer = {
      days: 3,
      hours: 22,
      minutes: 4,
      seconds: 15
    }
    expect(countDown(timer)).toEqual({
      days: 3,
      hours: 22,
      minutes: 4,
      seconds: 14
    });
  });
});