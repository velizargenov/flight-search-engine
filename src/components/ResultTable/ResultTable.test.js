import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import ResultTable from './ResultTable';

jest.mock('../../data');

describe('ResultTable Component', () => {
  const data = require('../../data');
  const wrapper = shallow(<ResultTable flights={data} />);

  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render without crashing', () => {
    expect(wrapper.length).toBe(1);
  });
  it('should have two <div> elements', () => {
    expect(wrapper.find('div').length).toBe(2);
  });
  it('should have one <h2> element', () => {
    expect(wrapper.find('h2').length).toBe(1);
  });
  it('should match text inside <h2> element', () => {
    expect(wrapper.text()).toMatch('Your Results');
  });
  it('should have one <section> element', () => {
    expect(wrapper.find('section').length).toBe(1);
  });
  it('should have six <span> elements', () => {
    expect(wrapper.find('span').length).toBe(6);
  });
  it('should have one <h1> element', () => {
    expect(wrapper.find('h1').length).toBe(1);
  });
  it('should match text inside <h1> element', () => {
    expect(wrapper.text()).toMatch('No flights');
  });
  it('should have one wrapping <div> element', () => {
    expect(wrapper.find('div.result-table').length).toBe(1);
  });
  it('should have one <div> wrapping <h2> and <section>', () => {
    expect(wrapper.find('div.result-table--header').length).toBe(1);
  });
});
