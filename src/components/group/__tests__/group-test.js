import React from 'react';
import {mount, shallow} from 'enzyme';
import Group from '../Group';

describe('group component', () => {
  const setup = () => {
    const props = {
      tours: [{}],
      groupName: 'GROUP NAME TEST 123',
      onBookingNowClick: () => {},
      groupIndex: 0,
      onCountDownFinished: () => {}
    }
    return shallow(
      <Group {...props} />);
  };

  test('if group name is on the screen', () => {
    const wrapper = setup();
    expect(wrapper.find('h2').text()).toEqual('GROUP NAME TEST 123');
  });
});