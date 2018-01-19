import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Flight from './Flight';
import FlightDetails from './FlightDetails';
import Button from '../Button/Button';

jest.mock('../../mocks/flight');
const flight = require('../../mocks/flight');
const flightDetails = require('../../mocks/flight-details');

describe('Flight Component', () => {
  const wrapper = shallow(<Flight key={flight.id} details={flight} isReturnFlight={false} />);
  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render without crashing', () => {
    expect(wrapper.length).toBe(1);
  });
  it('should render one Button component', () => {
    expect(wrapper.find(Button).length).toBe(1);
  });
  it('should have one wrapping <div> element', () => {
    expect(wrapper.find('div.flight').length).toBe(1);
  });
  it('should have one <figure> and one <img> element', () => {
    expect(wrapper.find('figure').length).toBe(1);
    expect(wrapper.find('img').length).toBe(1);
  });
  it('should have a container for the flight details', () => {
    expect(wrapper.find('div.flight--details-container').length).toBe(1);
  });
  it('should have a container for the total flight price', () => {
    expect(wrapper.find('div.flight--price').length).toBe(1);
  });
});

describe('FlightDetails Component', () => {
  const wrapper = shallow(<FlightDetails key={0} index={0} details={flightDetails} />);
  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render without crashing', () => {
    expect(wrapper.length).toBe(1);
  });
  it('should have three <div> elements', () => {
    expect(wrapper.find('div').length).toBe(3);
  });
  it('should have six <span> elements', () => {
    expect(wrapper.find('span').length).toBe(6);
  });
  it('should have one wrapping <div> element', () => {
    expect(wrapper.find('div.flight--details').length).toBe(1);
  });
  it('should have details about flight number', () => {
    expect(wrapper.find('span.flight-details--flightNumber').length).toBe(1);
  });
  it('should have details about where the flight will depart', () => {
    expect(wrapper.find('span.flight-details--fromTo').length).toBe(1);
  });
  it('should have details about departure and arrival time', () => {
    expect(wrapper.find('div.flight-details--time').length).toBe(2);
  });
});
