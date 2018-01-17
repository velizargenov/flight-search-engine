import React from 'react';
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

export default Range;
