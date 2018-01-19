import React from 'react';
import PropTypes from 'prop-types';

import './SearchBar.css';
import Button from '../Button/Button';
import Form from './Form';
import Range from './Range';

const SearchBar = (props) => {
  const {
    handleClicksOnOneWayButton,
    handleClicksOnReturnButton,
    handleDepartureDateChange,
    handleReturnDateChange,
    isReturnFlight,
    departureDate,
    returnDate,
    onPassengerNumberChange,
    onFromChange,
    onDestinationChange,
    handleRangeValueChange,
    handleClicksOnSearch,
    rangeValue,
  } = props;

  return (
    <div className="search-bar">
      <div className="search-bar--buttons">
        <Button
          htmlFor="one-way"
          className="button--search-bar one-way"
          value="One way"
          handleClick={handleClicksOnOneWayButton}
        />
        <Button
          htmlFor="return"
          className="button--search-bar return active"
          value="Return"
          handleClick={handleClicksOnReturnButton}
        />
      </div>
      <Form
        handleDepartureDateChange={handleDepartureDateChange}
        handleReturnDateChange={handleReturnDateChange}
        isReturnFlight={isReturnFlight}
        departureDate={departureDate}
        returnDate={returnDate}
        onPassengerNumberChange={onPassengerNumberChange}
        onFromChange={onFromChange}
        onDestinationChange={onDestinationChange}
        handleClicksOnSearch={handleClicksOnSearch}
      />
      <Range
        rangeValue={rangeValue}
        handleRangeValueChange={handleRangeValueChange}
      />
    </div>
  );
};

SearchBar.defaultProps = {
  handleClicksOnOneWayButton: () => {},
  handleClicksOnReturnButton: () => {},
  handleDepartureDateChange: () => {},
  handleReturnDateChange: () => {},
  isReturnFlight: true,
  departureDate: '18-01-2018',
  returnDate: '20-01-2018',
  onPassengerNumberChange: () => {},
  onFromChange: () => {},
  onDestinationChange: () => {},
  handleRangeValueChange: () => {},
  handleClicksOnSearch: () => {},
  rangeValue: {
    max: 200,
    min: 0,
  },
};

SearchBar.propTypes = {
  handleClicksOnOneWayButton: PropTypes.func,
  handleClicksOnReturnButton: PropTypes.func,
  handleDepartureDateChange: PropTypes.func,
  handleReturnDateChange: PropTypes.func,
  isReturnFlight: PropTypes.bool,
  departureDate: PropTypes.string,
  returnDate: PropTypes.string,
  onPassengerNumberChange: PropTypes.PropTypes.func,
  onFromChange: PropTypes.PropTypes.func,
  onDestinationChange: PropTypes.PropTypes.func,
  handleRangeValueChange: PropTypes.PropTypes.func,
  handleClicksOnSearch: PropTypes.PropTypes.func,
  rangeValue: PropTypes.shape({
    max: PropTypes.number,
    min: PropTypes.number,
  }),
};

export default SearchBar;
