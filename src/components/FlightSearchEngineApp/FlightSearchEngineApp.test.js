import React from 'react';
import { mount } from 'enzyme';

import flights from '../../data';
import FlightSearchEngineApp from './FlightSearchEngineApp';
import Header from '../Header/Header';
import ResultTable from '../ResultTable/ResultTable';

let wrapper;
beforeEach(() => {
  wrapper = mount(<FlightSearchEngineApp flights={flights} />);
});

describe('<FlightSearchEngineApp /> component', () => {
  describe('Renders child components correctly', () => {
    it('should render <FlightSearchEngineApp /> without crashing', () => {
      expect(wrapper.length).toBe(1);
    });
    it('renders <Header /> component inside <FlightSearchEngineApp /> component', () => {
      expect(wrapper.find(Header).length).toBe(1);
    });
    it('renders <ResultTable /> component inside <FlightSearchEngineApp /> component', () => {
      expect(wrapper.find(ResultTable).length).toBe(1);
    });
  });
});
