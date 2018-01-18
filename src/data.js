const flights = [
  // -------------------------------
  // AIR INDIA
  // -------------------------------
  // #region
  { // AIR INDIA: 18-01-2018
    id: 1,
    airlineName: 'Air India',
    airlineLogo: 'air-india-logo.png',
    details: [
      {
        from: 'Delhi',
        fromAirport: 'DEL',
        to: 'Pune',
        toAirport: 'PNQ',
        flightNumber: 'AI-101',
        departure: '18-01-2018',
        price: 60,
      },
    ],
  },
  {
    id: 2,
    airlineName: 'Air India',
    airlineLogo: 'air-india-logo.png',
    details: [
      {
        from: 'Pune',
        fromAirport: 'PNQ',
        to: 'Delhi',
        toAirport: 'DEL',
        flightNumber: 'AI-102',
        departure: '18-01-2018',
        price: 70,
      },
    ],
  },
  { // AIR INDIA: 19-01-2018
    id: 3,
    airlineName: 'Air India',
    airlineLogo: 'air-india-logo.png',
    details: [
      {
        from: 'Delhi',
        fromAirport: 'DEL',
        to: 'Pune',
        toAirport: 'PNQ',
        flightNumber: 'AI-103',
        departure: '19-01-2018',
        price: 80,
      },
    ],
  },
  {
    id: 4,
    airlineName: 'Air India',
    airlineLogo: 'air-india-logo.png',
    details: [
      {
        from: 'Pune',
        fromAirport: 'PNQ',
        to: 'Delhi',
        toAirport: 'DEL',
        flightNumber: 'AI-104',
        departure: '19-01-2018',
        price: 40,
      },
    ],
  },
  { // AIR INDIA: 20-01-2018
    id: 5,
    airlineName: 'Air India',
    airlineLogo: 'air-india-logo.png',
    details: [
      {
        from: 'Delhi',
        fromAirport: 'DEL',
        to: 'Pune',
        toAirport: 'PNQ',
        flightNumber: 'AI-105',
        departure: '20-01-2018',
        price: 5,
      },
    ],
  },
  {
    id: 6,
    airlineName: 'Air India',
    airlineLogo: 'air-india-logo.png',
    details: [
      {
        from: 'Pune',
        fromAirport: 'PNQ',
        to: 'Delhi',
        toAirport: 'DEL',
        flightNumber: 'AI-106',
        departure: '20-01-2018',
        price: 70,
      },
    ],
  },
  // #endregion

  // -------------------------------
  // INDIGO
  // -------------------------------
  // #region
  { // INDIGO: 18-01-2018
    id: 7,
    airlineName: 'IndiGo',
    airlineLogo: 'indigo-logo.png',
    details: [
      {
        from: 'Delhi',
        fromAirport: 'DEL',
        to: 'Pune',
        toAirport: 'PNQ',
        flightNumber: '6E-101',
        departure: '18-01-2018',
        price: 42,
      },
    ],
  },
  {
    id: 8,
    airlineName: 'IndiGo',
    airlineLogo: 'indigo-logo.png',
    details: [
      {
        from: 'Pune',
        fromAirport: 'PNQ',
        to: 'Delhi',
        toAirport: 'DEL',
        flightNumber: '6E-102',
        departure: '18-01-2018',
        price: 66,
      },
    ],
  },
  { // INDIGO: 19-01-2018
    id: 9,
    airlineName: 'IndiGo',
    airlineLogo: 'indigo-logo.png',
    details: [
      {
        from: 'Delhi',
        fromAirport: 'DEL',
        to: 'Pune',
        toAirport: 'PNQ',
        flightNumber: '6E-103',
        departure: '19-01-2018',
        price: 58,
      },
    ],
  },
  {
    id: 10,
    airlineName: 'IndiGo',
    airlineLogo: 'indigo-logo.png',
    details: [
      {
        from: 'Pune',
        fromAirport: 'PNQ',
        to: 'Delhi',
        toAirport: 'DEL',
        flightNumber: '6E-104',
        departure: '19-01-2018',
        price: 49,
      },
    ],
  },
  { // INDIGO: 20-01-2018
    id: 11,
    airlineName: 'IndiGo',
    airlineLogo: 'indigo-logo.png',
    details: [
      {
        from: 'Delhi',
        fromAirport: 'DEL',
        to: 'Pune',
        toAirport: 'PNQ',
        flightNumber: '6E-105',
        departure: '20-01-2018',
        price: 59,
      },
    ],
  },
  {
    id: 12,
    airlineName: 'IndiGo',
    airlineLogo: 'indigo-logo.png',
    details: [
      {
        from: 'Pune',
        fromAirport: 'PNQ',
        to: 'Delhi',
        toAirport: 'DEL',
        flightNumber: '6E-106',
        departure: '20-01-2018',
        price: 60,
      },
    ],
  },
  // #endregion

  // -------------------------------
  // SpiceJet
  // -------------------------------
  // #region
  { // SPICEJET: 18-01-2018
    id: 13,
    airlineName: 'SpiceJet',
    airlineLogo: 'spicejet-logo.png',
    details: [
      {
        from: 'Delhi',
        fromAirport: 'DEL',
        to: 'Pune',
        toAirport: 'PNQ',
        flightNumber: 'SG-101',
        departure: '18-01-2018',
        price: 75,
      },
    ],
  },
  {
    id: 14,
    airlineName: 'SpiceJet',
    airlineLogo: 'spicejet-logo.png',
    details: [
      {
        from: 'Pune',
        fromAirport: 'PNQ',
        to: 'Delhi',
        toAirport: 'DEL',
        flightNumber: 'SG-102',
        departure: '18-01-2018',
        price: 99,
      },
    ],
  },
  { // SPICEJET: 19-01-2018
    id: 15,
    airlineName: 'SpiceJet',
    airlineLogo: 'spicejet-logo.png',
    details: [
      {
        from: 'Delhi',
        fromAirport: 'DEL',
        to: 'Pune',
        toAirport: 'PNQ',
        flightNumber: 'SG-103',
        departure: '19-01-2018',
        price: 72,
      },
    ],
  },
  {
    id: 16,
    airlineName: 'SpiceJet',
    airlineLogo: 'spicejet-logo.png',
    details: [
      {
        from: 'Pune',
        fromAirport: 'PNQ',
        to: 'Delhi',
        toAirport: 'DEL',
        flightNumber: 'SG-104',
        departure: '19-01-2018',
        price: 63,
      },
    ],
  },
  { // SPICEJET: 20-01-2018
    id: 17,
    airlineName: 'SpiceJet',
    airlineLogo: 'spicejet-logo.png',
    details: [
      {
        from: 'Delhi',
        fromAirport: 'DEL',
        to: 'Pune',
        toAirport: 'PNQ',
        flightNumber: 'SG-105',
        departure: '20-01-2018',
        price: 55,
      },
    ],
  },
  {
    id: 18,
    airlineName: 'SpiceJet',
    airlineLogo: 'spicejet-logo.png',
    details: [
      {
        from: 'Pune',
        fromAirport: 'PNQ',
        to: 'Delhi',
        toAirport: 'DEL',
        flightNumber: 'SG-106',
        departure: '20-01-2018',
        price: 61,
      },
    ],
  },
  // #endregion
];

export default flights;
