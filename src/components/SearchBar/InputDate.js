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
      minDate={moment()}
      maxDate={moment().add(5, 'days')}
      todayButton="Today"
      onChange={handleDateChange}
    />
  </div>
);

InputDate.defaultProps = {
  text: 'Return Date',
};

InputDate.propTypes = {
  text: PropTypes.string,
  selectedDate: PropTypes.string.isRequired,
  handleDateChange: PropTypes.func.isRequired,
};

export default InputDate;
