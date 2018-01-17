import React, { Component } from 'react';
import './FlightSearchEngineApp.css';

import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import ResultTable from '../ResultTable/ResultTable';

/* eslint-disable */
class FlightSearchEngineApp extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isReturnFlight: true,
      origin: '',
      destination: '',
      departureDate: '', 
      returnDate: '',
      numberOfPassengers: 0,
      priceRange: { min: 0, max: 200 },
      userHasSearched: false,
      flights: []
    }

    this.handleClicksOnOneWayButton = this.handleClicksOnOneWayButton.bind(this);
    this.handleClicksOnReturnButton = this.handleClicksOnReturnButton.bind(this);
  }

  handleClicksOnOneWayButton() {
    this.setState({
      isReturnFlight: false
    })
  }

  handleClicksOnReturnButton() {
    this.setState({
      isReturnFlight: true
    })
  }

  render () {
    const { isReturnFlight } = this.state
    return (
      <React.Fragment>
        <Header />
        <main>
          <SearchBar 
            handleClicksOnOneWayButton={this.handleClicksOnOneWayButton} 
            handleClicksOnReturnButton={this.handleClicksOnReturnButton}
            isReturnFlight={isReturnFlight}
          />
          <ResultTable flights={this.props.flights} />
        </main>
      </React.Fragment>
    );
  }
}

export default FlightSearchEngineApp;
