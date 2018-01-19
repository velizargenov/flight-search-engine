import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';

const InputDate = ({ text, selectedDate, handleDateChange }) => (
  <div className="search-bar--date">
    <span className="input--text">
      {text}
    </span>
    <span className="search-bar--arrow" />
    <DatePicker
      placeholderText={selectedDate || 'Select a date'}
      minDate={moment('2018-01-17')}
      maxDate={moment('2018-01-17').add(4, 'days')}
      onChange={handleDateChange}
    />
  </div>
);

InputDate.defaultProps = {
  text: 'Return Date',
  selectedDate: '18-01-2018',
  handleDateChange: () => {},
};

InputDate.propTypes = {
  text: PropTypes.string,
  selectedDate: PropTypes.string,
  handleDateChange: PropTypes.func,
};

export default InputDate;
