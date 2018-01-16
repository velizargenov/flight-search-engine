import React from 'react';
import './Button.css';

const Button = ({ htmlFor, handleClick, ...otherProps }) => (
  <label htmlFor={htmlFor} className="button">
    <input
      type="button"
      id={htmlFor}
      onClick={handleClick}
      {...otherProps}
    />
  </label>
);

export default Button;
