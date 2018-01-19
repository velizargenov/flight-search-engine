import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Header from './Header';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Header />);
});

describe('Header component', () => {
  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render without crashing', () => {
    expect(wrapper.length).toBe(1);
  });
  it('should have one <header> element', () => {
    expect(wrapper.find('header').length).toBe(1);
  });
  it('should match text inside <header> element', () => {
    expect(wrapper.text()).toMatch('Flight Search Engine');
  });
});
