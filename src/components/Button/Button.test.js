import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('<Button /> component', () => {
  it('should render <Button /> correctly', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.length).toBe(1);
  });
});
