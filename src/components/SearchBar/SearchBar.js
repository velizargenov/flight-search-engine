import React from 'react';

import './SearchBar.css';
import Button from '../Button/Button';

// TODO: Extract InputField into its own folder; could combine with <Button />
const InputField = ({ htmlFor, text, ...otherProps }) => (
  <label htmlFor={htmlFor} className="input">
    <span className="input--text">{text}</span>
    <input id={htmlFor} {...otherProps} />
  </label>
);

const SearchBar = () => (
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
    </form>
  </div>
);

export default SearchBar;
