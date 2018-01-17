import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import InputRange from 'react-input-range';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-input-range/lib/css/index.css';
import './SearchBar.css';
import Button from '../Button/Button';

// TODO: Extract InputField into its own folder; could combine with <Button />
const InputField = ({ htmlFor, text, ...otherProps }) => (
  <label htmlFor={htmlFor} className="input">
    <span className="input--text">{text}</span>
    <input id={htmlFor} {...otherProps} />
  </label>
);

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

// const SearchBar = () => (
//   <div className="search-bar">
//     <div className="search-bar--buttons">
//       <Button htmlFor="one-way" className="button--search-bar one-way" value="One way" />
//       <Button htmlFor="return" className="button--search-bar return" value="Return" />
//     </div>
//     <form>
//       <InputField
//         htmlFor="fromInput"
//         text="From"
//         placeholder="Enter your input here..."
//         type="text"
//       />
//       <InputField
//         htmlFor="fromInput"
//         text="Destination"
//         placeholder="Enter your input here..."
//         type="text"
//       />

//       <InputDate dateType="departure" text="Departure Date" />
//       <InputDate dateType="Return Date" text="Return Date" />
//       <InputDate dateType="Passengers" text="Passengers" />

//       <Button htmlFor="search" className="search-bar--button-search" value="Search" />
//     </form>

//     <InputRange
//       maxValue={20}
//       minValue={0}
//       value={10}
//       onChange={value => this.setState({ value })}
//     />
//   </div>
// );

class SearchBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      rangeValue: { min: 0, max: 200 },
    };
  }

  render () {
    return (
      <div className="search-bar">
        <div className="search-bar--buttons">
          <Button htmlFor="one-way" className="button--search-bar one-way" value="One way" />
          <Button htmlFor="return" className="button--search-bar return" value="Return" />
        </div>
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

          <InputDate dateType="departure" text="Departure Date" />
          <InputDate dateType="Return Date" text="Return Date" />
          <InputDate dateType="Passengers" text="Passengers" />

          <Button htmlFor="search" className="search-bar--button-search" value="Search" />
        </form>

        <InputRange
          step={10}
          minValue={0}
          maxValue={200}
          value={this.state.rangeValue}
          onChange={rangeValue => this.setState({ rangeValue })}
        />
      </div>
    );
  }
}

export default SearchBar;
