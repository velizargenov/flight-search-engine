import React from 'react';
import Flight from '../Flight/Flight';
import './ResultTable.css';

const ResultTable = ({ flights, isReturnFlight }) => (
  <div className="result-table">
    <div className="result-table--header">
      <h2>Your Results</h2>
      <section >
        <span className="result-table--summary depart">
          <span className="label">Depart:</span>1st Jan 2014
        </span>
        <span className="result-table--summary return">
          {
            isReturnFlight &&
            <span className="label">Return: <span>10th Jan 2014</span></span>
          }
        </span>
      </section>
    </div>
    {/* Handle logic if it return or one way to pass the correct data to <Flight />
      * implement a handleOneWayAndReturn() method
      */}
    {
      flights.map(flight => <Flight key={flight.id} details={flight} />)
    }
  </div>
);

export default ResultTable;
