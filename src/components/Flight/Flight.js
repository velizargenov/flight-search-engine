import React, { Component } from 'react';
import './Flight.css';

import Button from '../Button/Button';

/* eslint-disable */
class Flight extends Component {
  render () {
    const { airline_logo, airline_name, segments } = this.props.details;
    return (
      <article>

        <figure>
          <img src={`${process.env.PUBLIC_URL}/images/${airline_logo}`} alt={airline_name} />
        </figure>

        {/* TODO: Extract into <FlightDetails /> component */}
        <section>
          AI-202<br />
          PNQ > DEL<br />
          Depart: 10:00 AM<br />
          Arrive: 12:00 AM
        </section>

        <br />
        <br />

        <section>
          AI-202<br />
          PNQ > DEL<br />
          Depart: 10:00 AM<br />
          Arrive: 12:00 AM
        </section>

        <br />
        <br />

        <div>£{segments[0].price + segments[1].price}</div>

        <Button text="Select this flight" />
      </article>
    );
  }
}

export default Flight;
