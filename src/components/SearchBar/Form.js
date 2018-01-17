import React, { Component } from 'react';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-input-range/lib/css/index.css';
import Button from '../Button/Button';
import InputField from './InputField';
import InputDate from './InputDate';

class Form extends Component {
  constructor (props) {
    super(props);

    this.handlePassengerNumberChange = this.handlePassengerNumberChange.bind(this);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleDestinationChange = this.handleDestinationChange.bind(this);
  }
  handlePassengerNumberChange (e) {
    this.props.onPassengerNumberChange(e.target.value);
  }
  handleFromChange (e) {
    this.props.onFromChange(e.target.value);
  }
  handleDestinationChange (e) {
    this.props.onDestinationChange(e.target.value);
  }

  render () {
    const {
      isReturnFlight,
      departureDate,
      returnDate,
      handleDepartureDateChange,
      handleReturnDateChange,
    } = this.props;

    return (
      <form>
        <InputField
          htmlFor="fromInput"
          text="From"
          placeholder="Enter your input here..."
          type="text"
          onChange={this.handleFromChange}
        />
        <InputField
          htmlFor="fromInput"
          text="Destination"
          placeholder="Enter your input here..."
          type="text"
          onChange={this.handleDestinationChange}
        />
        <InputDate
          selectedDate={departureDate}
          dateType="departure"
          text="Departure Date"
          handleDateChange={handleDepartureDateChange}
        />
        {
          isReturnFlight
            ? <InputDate
              selectedDate={returnDate}
              dateType="Return Date"
              text="Return Date"
              handleDateChange={handleReturnDateChange}
            />
            : null
        }
        <InputField
          htmlFor="passenger"
          text="Passenger"
          type="number"
          defaultValue="1"
          min="1"
          max="5"
          onChange={this.handlePassengerNumberChange}
        />
        <Button
          htmlFor="search"
          className="search-bar--button-search"
          value="Search"
        />
      </form>
    );
  }
}

export default Form;
