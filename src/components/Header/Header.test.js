import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header /> component', () => {
  it('should render <FlightSearchEngineApp /> correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.length).toBe(1);
  });
});
