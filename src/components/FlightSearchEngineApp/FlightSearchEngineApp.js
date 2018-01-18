import React, { Component } from 'react';
import moment from 'moment';
import './FlightSearchEngineApp.css';

import flights from '../../data';
import { formatDate, isValidInput } from '../helpers';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import ResultTable from '../ResultTable/ResultTable';

class FlightSearchEngineApp extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isReturnFlight: true,
      from: '',
      destination: '',
      departureDate: formatDate(moment()),
      returnDate: 'not selected',
      numberOfPassengers: '1',
      rangeValue: { min: 0, max: 200 },
      userHasSearched: false,
      flights: [],
    };

    this.handleClicksOnOneWayButton = this.handleClicksOnOneWayButton.bind(this);
    this.handleClicksOnReturnButton = this.handleClicksOnReturnButton.bind(this);
    this.handleDepartureDateChange = this.handleDepartureDateChange.bind(this);
    this.handleReturnDateChange = this.handleReturnDateChange.bind(this);
    this.handlePassengerNumberChange = this.handlePassengerNumberChange.bind(this);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleDestinationChange = this.handleDestinationChange.bind(this);
    this.handleRangeValueChange = this.handleRangeValueChange.bind(this);
    this.handleClicksOnSearch = this.handleClicksOnSearch.bind(this);
    this.returnFilteredFlights = this.returnFilteredFlights.bind(this);
    this.getFilteredReturnFlights = this.getFilteredReturnFlights.bind(this);
  }

  handleClicksOnOneWayButton () {
    this.setState({
      isReturnFlight: false,
      returnDate: 'not selected',
    });
  }

  handleClicksOnReturnButton () {
    this.setState({ isReturnFlight: true });
  }

  handleDepartureDateChange (date) {
    this.setState({ departureDate: formatDate(date) });
  }

  handleReturnDateChange (date) {
    this.setState({ returnDate: formatDate(date) });
  }

  handlePassengerNumberChange (numberOfPassengers) {
    this.setState({ numberOfPassengers });
  }

  handleFromChange (value) {
    this.setState({ from: value });
  }

  handleDestinationChange (value) {
    this.setState({ destination: value });
  }

  handleRangeValueChange (rangeValue) {
    if (!this.state.userHasSearched) {
      this.setState({ rangeValue });
    } else {
      this.setState({
        rangeValue,
        flights: this.returnFilteredFlights(),
      });
    }
  }

  returnFilteredFlights () {
    // filter one way flights based on criteria in validateDate()
    const filteredFlights = flights.filter((flight) => {
      const details = (flight && flight.details && flight.details[0]) || {};
      if (flight.details.length === 2 || flight.details.length === 3) {
        // remove return flight details before updating the state
        flight.details.pop();
      }
      return this.validateFlightsData(details, 'from', 'to', this.state.departureDate);
    });
    if (this.state.isReturnFlight) {
      this.getFilteredReturnFlights(filteredFlights);
    }
    return filteredFlights;
  }

  validateFlightsData (details, first, second, third) {
    const { from, to, rangeValue } = this.state;

    // Make regex with user input from state
    const userInputFrom = new RegExp(from, 'i');
    const userInputTo = new RegExp(to, 'i');
    const userInputDeparture = new RegExp(third, 'i');
    const flightPrice = Number(details.price); // TODO: compute price for return flights before comparison
    const matchesFrom = userInputFrom.test(details[first]);
    const matchesTo = userInputTo.test(details[second]);
    const matchesDeparture = userInputDeparture.test(details.departure);
    const fitsIntoPriceRange = (flightPrice >= rangeValue.min) && (flightPrice <= rangeValue.max);

    return matchesFrom && matchesTo && matchesDeparture && fitsIntoPriceRange;
  }

  getFilteredReturnFlights (filteredFlights) {
    const filteredReturnFlights = flights.filter((flight) => {
      const details = (flight && flight.details && flight.details[0]) || {};
      return this.validateFlightsData(details, 'to', 'from', this.state.returnDate);
    });

    filteredFlights.forEach((oneWayFlight, i) => {
      if (oneWayFlight.details.length < 2) {
        filteredReturnFlights.forEach((returnFlight, j) => {
          if (oneWayFlight.airlineName === returnFlight.airlineName) {
            // retrieve returned flight data and push it to the details for the filteredFlights
            filteredFlights[i].details.push(filteredReturnFlights[j].details[0]);
          }
        });
      }
    });
    return filteredFlights;
  }
  handleClicksOnSearch () {
    const { from, destination } = this.state;
    const inputFromIsValid = isValidInput(from);
    const inputToIsValid = isValidInput(destination);

    if (inputFromIsValid && inputToIsValid) {
      this.setState({
        userHasSearched: true,
        flights: this.returnFilteredFlights(),
      });
    }
  }

  render () {
    const {
      from,
      destination,
      isReturnFlight,
      departureDate,
      returnDate,
      rangeValue,
    } = this.state;

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
            handleClicksOnSearch={this.handleClicksOnSearch}
          />
          <ResultTable
            from={from}
            destination={destination}
            flights={this.state.flights}
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
