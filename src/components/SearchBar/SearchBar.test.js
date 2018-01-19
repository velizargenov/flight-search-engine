import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import SearchBar from './SearchBar';
import Button from '../Button/Button';
import Form from './Form';
import Range from './Range';
import InputField from './InputField';
import InputDate from './InputDate';

describe('SearchBar Component', () => {
  const wrapper = shallow(<SearchBar />);
  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render without crashing', () => {
    expect(wrapper.length).toBe(1);
  });
  it('should render Button, Form, Range components', () => {
    expect(wrapper.containsAllMatchingElements([
      <Button />,
      <Form />,
      <Range />,
    ]));
  });
  it('should render two Button components', () => {
    expect(wrapper.find(Button).length).toBe(2);
  });
  it('should render one of each Form, Range components', () => {
    expect(wrapper.find(Form).length).toBe(1);
    expect(wrapper.find(Range).length).toBe(1);
  });
  it('should have two <div> elements', () => {
    expect(wrapper.find('div').length).toBe(2);
  });
  it('should have one <div> element wrapping the two Button components', () => {
    expect(wrapper.find('div.search-bar--buttons').length).toBe(1);
  });
  it('should have one wrapping <div> element', () => {
    expect(wrapper.find('div.search-bar').length).toBe(1);
  });
});

describe('Form Component', () => {
  const wrapper = shallow(<Form />);
  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render without crashing', () => {
    expect(wrapper.length).toBe(1);
  });
  it('should render InputField, InputDate, Button components', () => {
    expect(wrapper.containsAllMatchingElements([
      <InputField />,
      <InputDate />,
      <Button />,
    ]));
  });
  it('should render three InputField components', () => {
    expect(wrapper.find(InputField).length).toBe(3);
  });
  it('should render two InputField components', () => {
    expect(wrapper.find(InputDate).length).toBe(2);
  });
  it('should render one Button component', () => {
    expect(wrapper.find(Button).length).toBe(1);
  });
  it('should have one <form> element', () => {
    expect(wrapper.find('form').length).toBe(1);
  });
});

describe('InputField Component', () => {
  const wrapper = shallow(<InputField />);
  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render without crashing', () => {
    expect(wrapper.length).toBe(1);
  });
  it('should have one of each <label>, <span>, <input> elements', () => {
    expect(wrapper.find('label').length).toBe(1);
    expect(wrapper.find('span').length).toBe(1);
    expect(wrapper.find('input').length).toBe(1);
  });
  it('renders text in span element correctly', () => {
    expect(wrapper.find('span').text()).toMatch(/From|Destination/);
  });
});

describe('InputDate Component', () => {
  const wrapper = shallow(<InputDate />);
  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render without crashing', () => {
    expect(wrapper.length).toBe(1);
  });
  it('should have one <div> element', () => {
    expect(wrapper.find('div').length).toBe(1);
  });
  it('should have two <span> elements', () => {
    expect(wrapper.find('span').length).toBe(2);
  });
  it('renders text in span element correctly', () => {
    expect(wrapper.find('span.input--text').text()).toMatch(/Departure Date|Return Date/);
  });
  it('should have one wrapping <div> element', () => {
    expect(wrapper.find('div.search-bar--date').length).toBe(1);
  });
});

describe('Range Component', () => {
  const wrapper = shallow(<Range />);
  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render without crashing', () => {
    expect(wrapper.length).toBe(1);
  });
  it('should have one <div> element', () => {
    expect(wrapper.find('div').length).toBe(1);
  });
  it('should have one <span> element', () => {
    expect(wrapper.find('span').length).toBe(1);
  });
  it('renders text in span element correctly', () => {
    expect(wrapper.find('span.input--text').text()).toMatch('Refine Flight Search');
  });
  it('should have one wrapping <div> element', () => {
    expect(wrapper.find('div.search-bar--input-range').length).toBe(1);
  });
});
