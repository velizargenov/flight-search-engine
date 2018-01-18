import React from 'react';
import PropTypes from 'prop-types';

const FlightDetails = ({ details, index }) => {
  const {
    flightNumber,
    fromAirport,
    toAirport,
    departureTime,
    arrivalTime,
  } = details[index];

  return (
    <React.Fragment>
      <div className="flight--details">
        <span className="flight-details--flightNumber">{flightNumber}</span>
        <span className="flight-details--fromTo">{fromAirport} &gt; {toAirport}</span>
        <div className="flight-details--time">
          <span>Depart:</span>
          <span className="time">{departureTime}</span>
        </div>
        <div className="flight-details--time">
          <span>Arrive:</span><span className="time">{arrivalTime}</span>
        </div>
      </div>
    </React.Fragment>
  );
};

FlightDetails.propTypes = {
  index: PropTypes.number.isRequired,
  details: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FlightDetails;
