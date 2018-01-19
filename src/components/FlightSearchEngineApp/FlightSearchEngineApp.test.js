import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import FlightSearchEngineApp from './FlightSearchEngineApp';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import ResultTable from '../ResultTable/ResultTable';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<FlightSearchEngineApp />);
});

describe('FlightSearchEngineApp Component', () => {
  describe('Rendering', () => {
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
});
