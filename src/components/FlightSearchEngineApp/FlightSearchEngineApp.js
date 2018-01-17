import React, { Component } from 'react';
import moment from 'moment';
import './FlightSearchEngineApp.css';

import { formatDate } from '../helpers';
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
      departureDate: formatDate(moment()), 
      returnDate: 'not selected',
      numberOfPassengers: "1",
      priceRange: { min: 0, max: 200 },
      userHasSearched: false,
      flights: []
    }

    this.handleClicksOnOneWayButton = this.handleClicksOnOneWayButton.bind(this);
    this.handleClicksOnReturnButton = this.handleClicksOnReturnButton.bind(this);
    this.handleDepartureDateChange = this.handleDepartureDateChange.bind(this);
    this.handleReturnDateChange = this.handleReturnDateChange.bind(this);
    this.onPassengerNumberChange = this.onPassengerNumberChange.bind(this);
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

  handleDepartureDateChange (date) {
    this.setState({
      departureDate: formatDate(date)
    })
  }

  handleReturnDateChange (date) {
    this.setState({
      returnDate: formatDate(date)
    })
  }

  onPassengerNumberChange(numberOfPassengers) {
    this.setState({
      numberOfPassengers: numberOfPassengers
    })
  }

  render () {
    const { isReturnFlight, departureDate, returnDate } = this.state
    return (
      <React.Fragment>
        <Header />
        <main>
          <SearchBar 
            handleClicksOnOneWayButton={this.handleClicksOnOneWayButton} 
            handleClicksOnReturnButton={this.handleClicksOnReturnButton}
            handleDepartureDateChange={this.handleDepartureDateChange}
            handleReturnDateChange={this.handleReturnDateChange}
            isReturnFlight={isReturnFlight}
            departureDate={departureDate}
            returnDate={returnDate}
            onPassengerNumberChange={this.onPassengerNumberChange}
          />
          <ResultTable 
            flights={this.props.flights}
            isReturnFlight={isReturnFlight}
            departureDate={departureDate}
            returnDate={returnDate}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default FlightSearchEngineApp;
