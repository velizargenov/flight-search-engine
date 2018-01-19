import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      handleClicksOnSearch,
    } = this.props;

    return (
      <form onSubmit={e => e.preventDefault()}>
        <InputField
          htmlFor="fromInput"
          text="From"
          placeholder="Enter your input here..."
          type="text"
          required
          onChange={this.handleFromChange}
        />
        <InputField
          htmlFor="destinationInput"
          text="Destination"
          placeholder="Enter your input here..."
          type="text"
          required
          onChange={this.handleDestinationChange}
        />
        <InputDate
          selectedDate={departureDate}
          text="Departure Date"
          handleDateChange={handleDepartureDateChange}
        />
        {
          isReturnFlight
            ? <InputDate
              selectedDate={returnDate}
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
          defaultValue="Search"
          type="submit"
          handleClick={handleClicksOnSearch}
        />

      </form>
    );
  }
}

Form.defaultProps = {
  onPassengerNumberChange: () => {},
  onFromChange: () => {},
  onDestinationChange: () => {},
  isReturnFlight: true,
  departureDate: '18-01-2018',
  returnDate: '19-01-2018',
  handleDepartureDateChange: () => {},
  handleReturnDateChange: () => {},
  handleClicksOnSearch: () => {},
};

Form.propTypes = {
  onPassengerNumberChange: PropTypes.func,
  onFromChange: PropTypes.func,
  onDestinationChange: PropTypes.func,
  isReturnFlight: PropTypes.bool,
  departureDate: PropTypes.string,
  returnDate: PropTypes.string,
  handleDepartureDateChange: PropTypes.func,
  handleReturnDateChange: PropTypes.func,
  handleClicksOnSearch: PropTypes.func,
};

export default Form;
