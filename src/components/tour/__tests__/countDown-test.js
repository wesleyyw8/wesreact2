import countDown from '../countDown';

describe('countDown', () => {
  test('the seconds should be decreased in one', () => {
    const timer = new Date(2018, 11, 14, 23, 4, 14);
    expect(countDown(timer)).toEqual(new Date(2018, 11, 14, 23, 4, 13));
  });
  test('the minutes should be decreased in one', () => {
    const timer = new Date(2018, 11, 14, 23, 4, 0);
    expect(countDown(timer)).toEqual(new Date(2018, 11, 14, 23, 3, 0));
  });
  test('the hours should be decreased in one', () => {
    const timer = new Date(2018, 11, 14, 23, 0, 0);
    expect(countDown(timer)).toEqual(new Date(2018, 11, 14, 22, 59, 59));
  });
  test('the days should be decreased in one', () => {
    const timer = new Date(2018, 11, 14, 0, 0, 0);
    expect(countDown(timer)).toEqual(new Date(2018, 11, 13, 23, 59, 59));
  });
  test('the months should be decreased in one', () => {
    const timer = new Date(2018, 11, 1, 0, 0, 0);
    expect(countDown(timer)).toEqual(new Date(2018, 10, 0, 23, 59, 59));
  });
  test('the year should be decreased in one', () => {
    const timer = new Date(2018, 1, 1, 0, 0, 0);
    expect(countDown(timer)).toEqual(new Date(2017, 0, 0, 23, 59, 59));
  });
});