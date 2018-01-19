import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow, mount } from 'enzyme';

import FlightSearchEngineApp from './FlightSearchEngineApp';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import Form from '../SearchBar/Form';
import InputField from '../SearchBar/InputField';
import ResultTable from '../ResultTable/ResultTable';
import Button from '../Button/Button';

jest.mock('../../mocks/flight-details');

describe('FlightSearchEngineApp Component', () => {
  describe('Rendering', () => {
    const wrapper = shallow(<FlightSearchEngineApp />);
    it('matches snapshot', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render without crashing', () => {
      expect(wrapper.length).toBe(1);
    });
    it('should render Header, SearchBar and ResultTable components', () => {
      expect(wrapper.containsAllMatchingElements([
        <Header />,
        <SearchBar />,
        <ResultTable />,
      ]));
    });
    it('should render one of each Header, SearchBar, ResultTable components', () => {
      expect(wrapper.find(Header).length).toBe(1);
      expect(wrapper.find(SearchBar).length).toBe(1);
      expect(wrapper.find(ResultTable).length).toBe(1);
    });
    it('should render one <React.Fragment> element', () => {
      expect(wrapper.find('main').length).toBe(1);
    });
    it('should render one <main> element', () => {
      expect(wrapper.find('main').length).toBe(1);
    });
  });

  describe('State', () => {
    const wrapper = shallow(<FlightSearchEngineApp />);
    it('should start with a default value of "true" for isReturnFlight', () => {
      expect(wrapper.state('isReturnFlight')).toBe(true);
    });
    it('should start with a default value of empty string for from', () => {
      expect(wrapper.state('from')).toBe('');
    });
    it('should start with a default value of empty string for destination', () => {
      expect(wrapper.state('destination')).toBe('');
    });
    it('should start with a default value of "18-01-2018" for departureDate', () => {
      expect(wrapper.state('departureDate')).toBe('18-01-2018');
    });
    it('should start with a default value of "not selected" for returnDate', () => {
      expect(wrapper.state('returnDate')).toBe('not selected');
    });
    it('should start with a default value of "1" for numberOfPassengers', () => {
      expect(wrapper.state('numberOfPassengers')).toBe('1');
    });
    it('should start with a default value of "{min: 0, max: 200}" for numberOfPassengers', () => {
      expect(wrapper.state('rangeValue').min).toBe(0);
      expect(wrapper.state('rangeValue').max).toBe(200);
    });
    it('should start with a default value of "false" for userHasSearched', () => {
      expect(wrapper.state('userHasSearched')).toBe(false);
    });
    it('should start with a default value of empty array for flights', () => {
      expect(wrapper.state('flights')).toEqual([]);
    });
  });

  describe('Functionality', () => {
    const wrapper = mount(<FlightSearchEngineApp />);
    const searchBar = wrapper.find(SearchBar);
    const form = searchBar.find(Form);

    it('handleClicksOnOneWayButton should change the state of isReturnFlight and returnDate', () => {
      wrapper.instance().handleClicksOnOneWayButton();
      expect(wrapper.state('isReturnFlight')).toBe(false);
      expect(wrapper.state('returnDate')).toBe('not selected');
    });
    it('clicks on the "one-way" button in SearchBar should trigger handleClicksOnOneWayButton', () => {
      const oneWayButton = searchBar.find(Button).at(0).find('input');
      oneWayButton.simulate('click');
      expect(wrapper.state('isReturnFlight')).toBe(false);
      expect(wrapper.state('returnDate')).toBe('not selected');
    });
    it('handleClicksOnReturnButton should change the state of isReturnFlight', () => {
      wrapper.instance().handleClicksOnReturnButton();
      expect(wrapper.state('isReturnFlight')).toBe(true);
      expect(wrapper.state('returnDate')).toBe('not selected');
    });
    it('clicks on the "return" button in SearchBar should trigger handleClicksOnReturnButton', () => {
      const returnButton = searchBar.find(Button).at(1).find('input');
      returnButton.simulate('click');
      expect(wrapper.state('isReturnFlight')).toBe(true);
    });
    it('handlePassengerNumberChange should change the state of handlePassengerNumberChange', () => {
      wrapper.instance().handleClicksOnReturnButton();
      expect(wrapper.state('isReturnFlight')).toBe(true);
      expect(wrapper.state('returnDate')).toBe('not selected');
    });
    it('change in passangers in Form should trigger handlePassengerNumberChange', () => {
      const passangerInput = form.find(InputField).at(2).find('input');
      passangerInput.simulate('change', {
        target: {
          value: '2',
        },
      });
      expect(wrapper.state('numberOfPassengers')).toBe('2');
    });
    it('handleFromChange should change the state of from', () => {
      const fromInput = form.find(InputField).at(0).find('input');
      fromInput.simulate('change', {
        target: {
          value: 'Pune',
        },
      });
      expect(wrapper.state('from')).toBe('Pune');
    });
    it('handleDestinationChange should change the state of destination', () => {
      const toInput = form.find(InputField).at(1).find('input');
      toInput.simulate('change', {
        target: {
          value: 'Delhi',
        },
      });
      expect(wrapper.state('destination')).toBe('Delhi');
    });
    it('handleClicksOnSearch should change the state of userHasSearched and flights', () => {
      const searchButton = form.find(Button).at(0).find('input');
      searchButton.simulate('click');
      expect(wrapper.state('userHasSearched')).toBe(true);
      expect(wrapper.state('flights')).not.toEqual([]);
    });
  });
});
