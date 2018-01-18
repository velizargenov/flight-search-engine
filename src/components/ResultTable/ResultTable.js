import React, { Component } from 'react';

import Flight from '../Flight/Flight';
import './ResultTable.css';

/* eslint-disable */
class ResultTable extends Component {
  render () {
    const { flights, isReturnFlight, departureDate, returnDate } = this.props;

    return (
      <div className="result-table">
        <div className="result-table--header">
          <h2>Your Results</h2>
          <section >
            <span className="result-table--summary depart">
              <span className="label">Depart: <span>{departureDate}</span></span>
            </span>
            <span className="result-table--summary return">
              {
                isReturnFlight &&
                <span className="label">Return: <span>{returnDate}</span></span>
              }
            </span>
          </section>
        </div>

        { flights.length 
          ? flights.map(flight => <Flight key={flight.id} details={flight} isReturnFlight={isReturnFlight} />)
          : <h1>No flights</h1>
        }
      </div>
    );
  }
}

export default ResultTable;
