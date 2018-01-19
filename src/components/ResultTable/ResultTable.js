import React from 'react';
import PropTypes from 'prop-types';

import Flight from '../Flight/Flight';
import './ResultTable.css';

const ResultTable = ({ flights, isReturnFlight, departureDate, returnDate }) => (
  <div className="result-table">
    <div className="result-table--header">
      <h2>Your Results</h2>
      <section>
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
      ? flights.map(flight =>
          (
            <Flight
              key={flight.id}
              details={flight}
              isReturnFlight={isReturnFlight}
            />
          ))
      : <h1>No flights</h1>
    }
  </div>
);

ResultTable.defaultProps = {
  isReturnFlight: true,
  departureDate: '18-01-2018',
  returnDate: '19-01-2018',
};

ResultTable.propTypes = {
  isReturnFlight: PropTypes.bool,
  departureDate: PropTypes.string,
  returnDate: PropTypes.string,
};

export default ResultTable;
