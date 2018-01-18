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

SearchBar.propTypes = {
  handleClicksOnOneWayButton: PropTypes.func.isRequired,
  handleClicksOnReturnButton: PropTypes.func.isRequired,
  handleDepartureDateChange: PropTypes.func.isRequired,
  handleReturnDateChange: PropTypes.func.isRequired,
  isReturnFlight: PropTypes.bool.isRequired,
  departureDate: PropTypes.string.isRequired,
  returnDate: PropTypes.string.isRequired,
  onPassengerNumberChange: PropTypes.PropTypes.func.isRequired,
  onFromChange: PropTypes.PropTypes.func.isRequired,
  onDestinationChange: PropTypes.PropTypes.func.isRequired,
  handleRangeValueChange: PropTypes.PropTypes.func.isRequired,
  handleClicksOnSearch: PropTypes.PropTypes.func.isRequired,
  rangeValue: PropTypes.shape({
    max: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
  }).isRequired,
};

export default SearchBar;
