import React from 'react';
import { render } from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('<App /> component', () => {
  it('render <App /> without crashing', () => {
    const div = document.createElement('div');
    render(<App />, div);
  });

  it('should render <App /> correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).toBe(1);
  });
});
