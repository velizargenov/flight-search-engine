import React from 'react';
import { shallow } from 'enzyme';
import DetailsForm from './DetailsForm';

describe('<DetailsForm /> component', () => {
  it('should render <DetailsForm /> correctly', () => {
    const wrapper = shallow(<DetailsForm />);
    expect(wrapper.length).toBe(1);
  });
});
