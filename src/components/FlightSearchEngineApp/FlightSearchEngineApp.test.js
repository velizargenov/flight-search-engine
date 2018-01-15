import React from 'react';
import { render } from 'react-dom';
import { shallow } from 'enzyme';
import FlightSearchEngineApp from './FlightSearchEngineApp';

describe('<FlightSearchEngineApp /> component', () => {
  it('render <FlightSearchEngineApp /> without crashing', () => {
    const div = document.createElement('div');
    render(<FlightSearchEngineApp />, div);
  });

  it('should render <FlightSearchEngineApp /> correctly', () => {
    const wrapper = shallow(<FlightSearchEngineApp />);
    expect(wrapper.length).toBe(1);
  });
});
