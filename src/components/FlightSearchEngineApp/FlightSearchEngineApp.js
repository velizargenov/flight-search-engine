import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import './FlightSearchEngineApp.css';

import flights from '../../data';
import { formatDate, isValidInput, indicateActiveButton, calculateFlightPrice } from '../helpers';
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
      departureDate: formatDate(moment('2018-01-18')),
      returnDate: 'not selected',
      numberOfPassengers: '1',
      rangeValue: {
        min: 0, max: 200,
      },
      userHasSearched: false,
      data: [],
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
    this.handleClicksOnSearchThisFlight = this.handleClicksOnSearchThisFlight.bind(this);
  }

  componentDidMount () {
    const url = 'http://localhost:3001/flights';
    axios.get(url)
      .then((res) => {
        this.setState({
          data: res.data,
        });
      })
      .catch((err) => {
        console.log('res: ', err);
      });
  }

  handleClicksOnOneWayButton (e) {
    this.setState({
      isReturnFlight: false,
      returnDate: 'not selected',
    });
    indicateActiveButton(e, 'active');
  }

  handleClicksOnReturnButton (e) {
    this.setState({
      isReturnFlight: true,
    });
    indicateActiveButton(e, 'active');
  }

  handleDepartureDateChange (date) {
    this.setState({
      departureDate: formatDate(date),
    });
  }

  handleReturnDateChange (date) {
    this.setState({
      returnDate: formatDate(date),
    });
  }

  handlePassengerNumberChange (numberOfPassengers) {
    this.setState({
      numberOfPassengers,
    });
  }

  handleFromChange (value) {
    this.setState({
      from: value,
    });
  }

  handleDestinationChange (value) {
    this.setState({
      destination: value,
    });
  }

  handleRangeValueChange (rangeValue) {
    if (!this.state.userHasSearched) {
      this.setState({
        rangeValue,
      });
    } else {
      this.setState({
        rangeValue,
        flights: this.returnFilteredFlights(),
      });
    }
  }

  returnFilteredFlights () {
    const filteredFlights = this.state.data.filter((flight) => {
      const details = (flight && flight.details && flight.details[0]);
      if (flight.details.length === 2 || flight.details.length === 3) {
        flight.details.pop();
      }
      return this.validateFlightsData(details, 'from', 'to', this.state.departureDate, flight.price);
    });
    if (this.state.isReturnFlight) {
      this.getFilteredReturnFlights(filteredFlights);
    }
    calculateFlightPrice(filteredFlights);
    return filteredFlights;
  }

  validateFlightsData (details, firstMatchFromOrTo, secondMatchFromOrTo, departure, price) {
    const { from, destination, rangeValue } = this.state;
    const userInputFrom = new RegExp(from, 'i');
    const userInputTo = new RegExp(destination, 'i');
    const userInputDeparture = new RegExp(departure, 'i');
    const flightPrice = Number(price);
    const matchesFrom = userInputFrom.test(details[firstMatchFromOrTo]);
    const matchesTo = userInputTo.test(details[secondMatchFromOrTo]);
    const matchesDeparture = userInputDeparture.test(details.departure);
    const fitsIntoPriceRange = (flightPrice >= rangeValue.min) && (flightPrice <= rangeValue.max);

    return matchesFrom && matchesTo && matchesDeparture && fitsIntoPriceRange;
  }

  getFilteredReturnFlights (filteredFlights) {
    const filteredReturnFlights = flights.filter((flight) => {
      const details = (flight && flight.details && flight.details[0]) || {

      };
      return this.validateFlightsData(details, 'to', 'from', this.state.returnDate, flight.price);
    });

    filteredFlights.forEach((oneWayFlight, i) => {
      if (oneWayFlight.details.length < 2) {
        filteredReturnFlights.forEach((returnFlight, j) => {
          if (oneWayFlight.airlineName === returnFlight.airlineName) {
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

  handleClicksOnSearchThisFlight (newData) {
    this.setState({
      flights: newData,
    });
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
            handleClicksOnSearchThisFlight={this.handleClicksOnSearchThisFlight}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default FlightSearchEngineApp;
