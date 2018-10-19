import formatTime from '../formatTime';

describe('format time', () => {
  it('sends a milisseconds value and returns a formated object with the time', () => {
    expect(formatTime(123123123123)).toEqual({
      days: 1425,
      hours: "00",
      minutes: 52,
      seconds: "03"
    });
  });
});