import React, { Component } from 'react';
import './Flight.css';

import Button from '../Button/Button';
import FlightDetails from './FlightDetails';

/* eslint-disable */
class Flight extends Component {
  render () {
    const {
      id, airlineLogo, airlineName, details
    } = this.props.details;
    return (
      <div className="flight">
        <figure>
          <img src={`${process.env.PUBLIC_URL}/images/${airlineLogo}`} alt={airlineName} />
        </figure>
        <div className="flight--details-container">
          {
            details.map((flight, index) => <FlightDetails key={index} index={index} details={details} />)
          }
        </div>
        <div className="flight--price">£{this.props.details.price}</div>
        <Button
          htmlFor={id}
          className="button--search-this-flight"
          value="Search this flight"
        />
      </div>
    );
  }
}

// const Flight = (details) => {
//   const {
//     id, airlineLogo, airlineName, price,
//   } = details;
//   console.log(details);
//   return (
//     <div className="flight">
//       <figure>
//         <img src={`${process.env.PUBLIC_URL}/images/${airlineLogo}`} alt={airlineName} />
//       </figure>
//       <div className="flight--details-container">
//         {
//         details.details.details.map((flight, index) => <FlightDetails key={index} index={index} details={details.details.details} />)
//         }
//       </div>
//       <div className="flight--price">£{price}</div>
//       <Button
//         htmlFor={id}
//         className="button--search-this-flight"
//         value="Search this flight"
//       />
//     </div>
//   );
// };

export default Flight;
