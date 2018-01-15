import React from 'react';
import { shallow } from 'enzyme';
import FlightDetails from './FlightDetails';

describe('<FlightDetails /> component', () => {
  it('should render <FlightDetails /> correctly', () => {
    const wrapper = shallow(<FlightDetails />);
    expect(wrapper.length).toBe(1);
  });
});
