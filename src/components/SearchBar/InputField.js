import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ htmlFor, text, ...otherProps }) => (
  <label htmlFor={htmlFor} className="input">
    <span className="input--text">{text}</span>
    <input id={htmlFor} {...otherProps} />
  </label>
);

InputField.defaultProps = {
  htmlFor: 'uniqueId',
  text: 'From',
};

InputField.propTypes = {
  htmlFor: PropTypes.string,
  text: PropTypes.string,
};

export default InputField;
