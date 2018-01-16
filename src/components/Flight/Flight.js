import React, { Component } from 'react';
import './Flight.css';

import Button from '../Button/Button';

/* eslint-disable */
class Flight extends Component {
  render () {
    const { airlineLogo, airlineName, price, flightNumber, originAirport, destinationAirport, departureTime, arrivalTime } = this.props.details;
    return (
      <article>

        <figure>
          <img src={`${process.env.PUBLIC_URL}/images/${airlineLogo}`} alt={airlineName} />
        </figure>

        {/* TODO: Extract into <FlightDetails /> component */}
        <section>
          {flightNumber}<br />
          {originAirport} > {destinationAirport}<br />
          Depart: {departureTime}<br />
          Arrive: {arrivalTime}
        </section>

        <br />
        <br />

        <div>£{price}</div>

        <Button text="Select this flight" />
      </article>
    );
  }
}

export default Flight;
