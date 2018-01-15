import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';

describe('<SearchBar /> component', () => {
  it('should render <SearchBar /> correctly', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.length).toBe(1);
  });
});
