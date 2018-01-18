import React, { Component } from 'react';
import './Flight.css';

import Button from '../Button/Button';

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

/* eslint-disable */
class Flight extends Component {
  render () {
    const { id, airlineLogo, airlineName, price, details } = this.props.details;
    const renderReturnFlights = () => (
      <React.Fragment>
        <FlightDetails details={this.props.details} />
      </React.Fragment>
    );
    const renderOneWayFlights = () => (
      <FlightDetails details={this.props.details} />
    );
    const renderFlightsDetails = () => {
      details.map(flight => <FlightDetails details={details} />)
    }

    return (
      <div className="flight">

        <figure>
          <img src={`${process.env.PUBLIC_URL}/images/${airlineLogo}`} alt={airlineName} />
        </figure>

        <div className="flight--details-container">
          {
            this.props.isReturnFlight 
              ? details.map((flight, index) => <FlightDetails key={index} index={index} details={details}  />)
              : details.map((flight, index) => <FlightDetails key={index} index={index} details={details} />)
          }
        </div>

        <div className="flight--price">£{price}</div>

        <Button 
          htmlFor={id} 
          className='button--search-this-flight' 
          value='Search this flight'
        />
      </div>
    );
  }
}

export default Flight;
