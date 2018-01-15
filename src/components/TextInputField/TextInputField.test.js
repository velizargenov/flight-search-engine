import React from 'react';
import { shallow } from 'enzyme';
import TextInputField from './TextInputField';

describe('<TextInputField /> component', () => {
  it('should render <TextInputField /> correctly', () => {
    const wrapper = shallow(<TextInputField />);
    expect(wrapper.length).toBe(1);
  });
});
