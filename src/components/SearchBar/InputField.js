import React from 'react';

const InputField = ({ htmlFor, text, ...otherProps }) => (
  <label htmlFor={htmlFor} className="input">
    <span className="input--text">{text}</span>
    <input id={htmlFor} {...otherProps} />
  </label>
);

export default InputField;
