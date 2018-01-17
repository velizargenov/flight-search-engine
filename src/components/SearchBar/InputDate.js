import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

const InputDate = ({ dateType, text, handleChange }) => (
  <div className={`search-bar--date ${dateType}`}>
    <span className="input--text">{text}</span>
    <span className="search-bar--arrow" />
    <DatePicker
      placeholderText="Click to select a date"
      minDate={moment()}
      maxDate={moment().add(5, 'days')}
      todayButton="Today"
      onChange={() => handleChange()}
    />
  </div>
);

export default InputDate;
