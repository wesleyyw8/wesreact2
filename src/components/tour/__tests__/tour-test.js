import React from 'react';
import {mount, shallow} from 'enzyme';
import Tour from '../Tour';

describe('Tour component', () => {
  const setup = () => {
    const props = {
      key: 0,
      tourIndex: 0,
      groupIndex: 0,
      tour: {
        tourName: 'test',
        seatsLeft: 2,
        isAvailable: true,
        timer: new Date(2019, 2, 1, 10, 2)
      },
      onCountDownFinished: () => {},
      onBookingNowClick: () => {}
    };
    return shallow(
      <Tour {...props} />);
  };

  test('Card Title has only one item and its content should be the tourName', () => {
    const wrapper = setup();
    expect(wrapper.find('h4').length).toEqual(1);
    expect(wrapper.find('h4').text()).toEqual('test');
  });

  test('Card Title has only one item and its content should be the tourName', () => {
    const wrapper = setup();
    expect(wrapper.find('.card-text').length).toEqual(1);
    expect(wrapper.find('.card-text').text()).toEqual('Seats left: 2');
  });
  test('Card Header should have the date formated', () => {
    const wrapper = setup();
    expect(wrapper.find('.card-header.text-center').text()).toEqual('1 year 1 days and 10:02:00');
  });
});