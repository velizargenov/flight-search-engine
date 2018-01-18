import React from 'react';
import PropTypes from 'prop-types';

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

Button.defaultProps = {
  htmlFor: 'uniqueId',
  handleClick: () => {},
};

Button.propTypes = {
  htmlFor: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
