import React from 'react';
import { shallow } from 'enzyme';
import PriceFilter from './PriceFilter';

describe('<PriceFilter /> component', () => {
  it('should render <PriceFilter /> correctly', () => {
    const wrapper = shallow(<PriceFilter />);
    expect(wrapper.length).toBe(1);
  });
});
