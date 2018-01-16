import React from 'react';
import Flight from '../Flight/Flight';
import './ResultTable.css';

const ResultTable = ({ flights }) => (
  <div className="result-table">
    <h2>Your results</h2>
    <section >
      <span className="result-table--summary depart">
        <span className="label">Depart:</span> 1st Jan 2014
      </span>
      <span className="result-table--summary return">
        <span className="label">Return:</span> 10th Jan 2014
      </span>
    </section>
    {
      flights.map(flight => <Flight key={flight.id} details={flight} />)
    }
  </div>
);

export default ResultTable;
