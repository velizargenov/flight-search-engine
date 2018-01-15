import React from 'react';
import { shallow } from 'enzyme';
import ResultTable from './ResultTable';

describe('<ResultTable /> component', () => {
  it('should render <ResultTable /> correctly', () => {
    const wrapper = shallow(<ResultTable />);
    expect(wrapper.length).toBe(1);
  });
});
