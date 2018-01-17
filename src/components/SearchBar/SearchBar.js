import React, { Component } from 'react';

import './SearchBar.css';
import Button from '../Button/Button';
import Form from './Form';
import Range from './Range';

/* eslint-disable */
class SearchBar extends Component {
  render () {
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
      rangeValue,
      handleRangeValueChange,
      handleClicksOnSearch
    } = this.props;

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
            className="button--search-bar return" 
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
  }
}

export default SearchBar;
