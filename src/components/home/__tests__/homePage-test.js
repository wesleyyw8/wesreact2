import React from 'react';
import {mount, shallow} from 'enzyme';
import {HomePage} from '../HomePage';

describe('Home page component', () => {
  const props = {
    groups: [{
      groupName: 'test',
      tours: []
    }, {
      groupName: 'test2',
      tours: []
    }],
    bookTourAction: () => {},
    disableTourAction: () => {}
  }
  test('home page has 2 groups titles if there are two groups in the state', () => {
    const wrapper = mount(<HomePage {...props}/>);
    expect(wrapper.find('h2').length).toEqual(2);
  });
  test('first group name rendered should match with first group defined on props', () => {
    const wrapper = mount(<HomePage {...props}/>);
    expect(wrapper.find('h2').first().text()).toEqual('test');
  });
  test('second group name rendered should match with second group defined on props', () => {
    const wrapper = mount(<HomePage {...props}/>);
    expect(wrapper.find('h2').last().text()).toEqual('test2');
  });
});