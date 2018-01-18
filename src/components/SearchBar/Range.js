import React from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';

const Range = ({ rangeValue, handleRangeValueChange }) => (
  <div className="search-bar--input-range">
    <span className="input input--text">Refine Flight Search</span>
    <InputRange
      step={10}
      minValue={0}
      maxValue={200}
      value={rangeValue}
      onChange={handleRangeValueChange}
    />
  </div>
);

Range.propTypes = {
  handleRangeValueChange: PropTypes.PropTypes.func.isRequired,
  rangeValue: PropTypes.shape({
    max: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
  }).isRequired,
};

export default Range;
