import React from 'react';

import './SearchBar.css';
import Button from '../Button/Button';

// TODO: Extract InputField into its own folder
const InputField = ({ htmlFor, text, ...otherProps }) => (
  <label htmlFor={htmlFor}>
    {text}
    <input id={htmlFor} {...otherProps} />
  </label>
);

const SearchBar = () => (
  <div className="search-bar">
    <div className="search-bar--buttons">
      <Button htmlFor="one-way" value="One way" />
      <Button htmlFor="return" value="Return" />
    </div>
    <form>
      <InputField htmlFor="fromInput" text="From" type="text" />
      <InputField htmlFor="fromInput" text="Destination" type="text" />
      <InputField htmlFor="departureDate" text="Departure Date" type="date" />
      <InputField htmlFor="returnDate" text="Return Date" type="date" />
      <InputField htmlFor="passengers" text="Passengers" type="number" />
    </form>
  </div>
);

export default SearchBar;
