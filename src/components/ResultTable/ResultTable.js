import React from 'react';
import Flight from '../Flight/Flight';

const ResultTable = ({ flights }) => (
  <React.Fragment>
    <h2>--ResultTable component</h2>
    <h2>Your results</h2>
    <section>
      <span>Depart: 1st Jan 2014;</span>
      <span>Return: 10th Jan 2014;</span>
    </section>
    {
      flights.map(flight => <Flight key={flight.id} details={flight} />)
    }
  </React.Fragment>
);

export default ResultTable;
