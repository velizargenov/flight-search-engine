
import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';

import './Flight.css';
import Button from '../Button/Button';
import FlightDetails from './FlightDetails';

const Flight = (props) => {
  const { id, airlineLogo, airlineName, details, price } = props.details;
  const { handleClicksOnSearchThisFlight } = props;

  return (
    <div className="flight">
      <figure>
        <img src={`${process.env.PUBLIC_URL}/images/${airlineLogo}`} alt={airlineName} />
      </figure>
      <div className="flight--details-container">
        {
          details.map((flight, index) => (
            <FlightDetails
              key={uuid()}
              index={index}
              details={details}
            />
          ))
        }
      </div>
      <div className="flight--price">£{price}</div>
      <Button
        htmlFor={id}
        handleClick={() => handleClicksOnSearchThisFlight([props.details])}
        className="button--search-this-flight"
        value="Search this flight"
      />
    </div>
  );
};

Flight.propTypes = {
  details: PropTypes.object.isRequired,
};

export default Flight;
