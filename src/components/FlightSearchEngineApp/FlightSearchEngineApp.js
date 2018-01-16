import React, { Component } from 'react';
import './FlightSearchEngineApp.css';

import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import ResultTable from '../ResultTable/ResultTable';

/* eslint-disable */
class FlightSearchEngineApp extends Component {
  render () {
    return (
      <React.Fragment>
        <Header />
        <main>
          <SearchBar />
          <ResultTable flights={this.props.flights} />
        </main>
      </React.Fragment>
    );
  }
}

export default FlightSearchEngineApp;
