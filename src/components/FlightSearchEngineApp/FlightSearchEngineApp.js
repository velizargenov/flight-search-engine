import React, { Component } from 'react';
import moment from 'moment';
import './FlightSearchEngineApp.css';

import flights from '../../data';
import { formatDate } from '../helpers';
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
    this.filterFlights = this.filterFlights.bind(this);
  }

  componentDidMount () {
    // setTimeout(() => { // simulating a data retrieval from an endpoint
    //   this.setState({
    //     flights,
    //   });
    //   console.log(this.state);
    //   this.filterFlights();
    // }, 1000);
  }

  handleClicksOnOneWayButton () {
    this.setState({
      isReturnFlight: false,
    });
  }

  handleClicksOnReturnButton () {
    this.setState({
      isReturnFlight: true,
    });
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
        flights: this.filterFlights(),
      });
    }
  }

  filterFlights () {
    return flights.filter((flight) => {
      const {
        from,
        destination,
        departureDate,
        rangeValue,
      } = this.state;
      const userInputFrom = new RegExp(from, 'i');
      const userInputDestination = new RegExp(destination, 'i');
      const userInputDepartureDate = new RegExp(departureDate, 'i');
      const flightPrice = Number(flight.price);

      const matchesFrom = userInputFrom.test(flight.origin);
      const matchesDestination = userInputDestination.test(flight.destination);
      const matchesDepartureDate = userInputDepartureDate.test(flight.arrival);
      const fitsIntoPriceRange = (flightPrice >= rangeValue.min) && (flightPrice <= rangeValue.max);

      return matchesFrom && matchesDestination && matchesDepartureDate && fitsIntoPriceRange;
    });
  }

  handleClicksOnSearch () {
    this.setState({
      userHasSearched: true,
      flights: this.filterFlights(),
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
          />
        </main>
      </React.Fragment>
    );
  }
}

export default FlightSearchEngineApp;
