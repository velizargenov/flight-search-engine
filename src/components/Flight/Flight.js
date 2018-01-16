import React, { Component } from 'react';
import './Flight.css';

import Button from '../Button/Button';

const FlightDetails = ({ flightType, details }) => {
  const {
    flightNumber,
    originAirport,
    destinationAirport,
    departureTime,
    arrivalTime,
  } = details;

  return (
    <React.Fragment>
      <div className={`flight--details ${flightType}`}>
        <span className="flight-details--flightNumber">{flightNumber}</span>
        <span className="flight-details--fromTo">{originAirport} &gt; {destinationAirport}</span>
        <div className="flight-details--time">
          <span>Depart:</span>
          <span className="time">{departureTime}</span>
        </div>
        <div className="flight-details--time">
          <span>Arrive:</span><span className="time">{arrivalTime}</span>
        </div>
      </div>

      {/* Below elements is for testing */}
      <div className={`flight--details ${flightType}`}>
        <span className="flight-details--flightNumber">{flightNumber}</span>
        <span className="flight-details--fromTo">{originAirport} &gt; {destinationAirport}</span>
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

/* eslint-disable */
class Flight extends Component {
  render () {
    const { airlineLogo, airlineName, price } = this.props.details;
    return (
      <div className="flight">

        <figure>
          <img src={`${process.env.PUBLIC_URL}/images/${airlineLogo}`} alt={airlineName} />
        </figure>

        <div className="flight--details-container">
          <FlightDetails flightType='one-way' details={this.props.details} />
        </div>

        <div className="flight--price">£{price}</div>

        <Button type="button" text="Select this flight" />
      </div>
    );
  }
}

export default Flight;
