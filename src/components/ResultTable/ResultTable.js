import React from 'react';
import Flight from '../Flight/Flight';
import './ResultTable.css';

const ResultTable = ({ flights }) => (
  <div className="result-table--wrapper">
    <h2>Your results</h2>
    <section>
      <span>Depart: 1st Jan 2014;</span>
      <span>Return: 10th Jan 2014;</span>
    </section>
    {
      flights.map(flight => <Flight key={flight.id} details={flight} />)
    }
  </div>
);

export default ResultTable;
