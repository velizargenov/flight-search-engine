import React from 'react';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-input-range/lib/css/index.css';
import Button from '../Button/Button';
import InputField from './InputField';
import InputDate from './InputDate';

const Form = ({ isReturnFlight }) => (
  <form>
    <InputField
      htmlFor="fromInput"
      text="From"
      placeholder="Enter your input here..."
      type="text"
    />
    <InputField
      htmlFor="fromInput"
      text="Destination"
      placeholder="Enter your input here..."
      type="text"
    />
    <InputDate
      dateType="departure"
      text="Departure Date"
    />
    {
      isReturnFlight
        ? <InputDate
          dateType="Return Date"
          text="Return Date"
        />
        : null
    }
    <InputField
      htmlFor="passenger"
      text="Passenger"
      placeholder="Enter passengers number..."
      type="number"
    />
    <Button
      htmlFor="search"
      className="search-bar--button-search"
      value="Search"
    />
  </form>
);

export default Form;
