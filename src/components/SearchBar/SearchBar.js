import React, { Component } from 'react';

import './SearchBar.css';
import Button from '../Button/Button';
import Form from './Form';
import Range from './Range';

/* eslint-disable */
class SearchBar extends Component {
  render () {
    return (
      <div className="search-bar">
        <div className="search-bar--buttons">
          <Button htmlFor="one-way" className="button--search-bar one-way" value="One way" />
          <Button htmlFor="return" className="button--search-bar return" value="Return" />
        </div>
        <Form />
        <Range rangeValue={{min: 0, max: 200 }} />
      </div>
    );
  }
}

export default SearchBar;
