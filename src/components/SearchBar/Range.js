import React from 'react';
import InputRange from 'react-input-range';

const Range = ({ rangeValue }) => (
  <div className="search-bar--input-range">
    <span className="input input--text">Refine Flight Search</span>
    <InputRange
      step={10}
      minValue={0}
      maxValue={200}
      value={rangeValue}
      onChange={() => console.log('changing')}
    />
  </div>
);

export default Range;
