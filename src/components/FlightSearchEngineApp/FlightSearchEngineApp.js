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
      from: '',
      destination: '',
      departureDate: formatDate(moment()), 
      returnDate: 'not selected',
      numberOfPassengers: "1",
      rangeValue: { min: 0, max: 200 },
      userHasSearched: false,
      flights: []
    }

    this.handleClicksOnOneWayButton = this.handleClicksOnOneWayButton.bind(this);
    this.handleClicksOnReturnButton = this.handleClicksOnReturnButton.bind(this);
    this.handleDepartureDateChange = this.handleDepartureDateChange.bind(this);
    this.handleReturnDateChange = this.handleReturnDateChange.bind(this);
    this.handlePassengerNumberChange = this.handlePassengerNumberChange.bind(this);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleDestinationChange = this.handleDestinationChange.bind(this);
    this.handleRangeValueChange = this.handleRangeValueChange.bind(this);
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

  handlePassengerNumberChange(numberOfPassengers) {
    this.setState({
      numberOfPassengers: numberOfPassengers
    })
  }

  handleFromChange (value) {
    this.setState({
      from: value
    })
  }

  handleDestinationChange (value) {
    this.setState({
      destination: value
    })
  }

  handleRangeValueChange(rangeValue) {
    this.setState({
      rangeValue: rangeValue
    })
  }

  render () {
    const { isReturnFlight, departureDate, returnDate, rangeValue } = this.state
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
            onPassengerNumberChange={this.handlePassengerNumberChange}
            onFromChange={this.handleFromChange}
            onDestinationChange={this.handleDestinationChange}
            rangeValue={rangeValue}
            handleRangeValueChange={this.handleRangeValueChange}
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
