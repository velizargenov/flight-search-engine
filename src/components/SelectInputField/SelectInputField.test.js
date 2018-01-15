import React from 'react';
import { shallow } from 'enzyme';
import SelectInputField from './SelectInputField';

describe('<SelectInputField /> component', () => {
  it('should render <SelectInputField /> correctly', () => {
    const wrapper = shallow(<SelectInputField />);
    expect(wrapper.length).toBe(1);
  });
});
