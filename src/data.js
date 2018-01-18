import uuid from 'uuid/v4';

const flights = [
  // -------------------------------
  // AIR INDIA
  // -------------------------------
  // #region
  { // AIR INDIA: DEL-PNQ: 18-01-2018
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
        departureTime: '10:00 AM',
        arrivalTime: '12:10 AM',
        price: 60,
      },
    ],
  },
  { // AIR INDIA: PNQ-DEL: 18-01-2018
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
        departureTime: '21:00 AM',
        arrivalTime: '23:10 AM',
        price: 70,
      },
    ],
  },
  { // AIR INDIA: PNQ-BOM: 18-01-2018
    airlineName: 'Air India',
    airlineLogo: 'air-india-logo.png',
    details: [
      {
        from: 'Pune',
        fromAirport: 'PNQ',
        to: 'Mumbai',
        toAirport: 'BOM',
        flightNumber: 'AI-101',
        departure: '18-01-2018',
        departureTime: '12:00 AM',
        arrivalTime: '13:30 PM',
        price: 101,
      },
    ],
  },
  { // AIR INDIA: BOM-PNQ: 18-01-2018
    airlineName: 'Air India',
    airlineLogo: 'air-india-logo.png',
    details: [
      {
        from: 'Mumbai',
        fromAirport: 'BOM',
        to: 'Pune',
        toAirport: 'PNQ',
        flightNumber: 'AI-102',
        departure: '18-01-2018',
        departureTime: '16:00 AM',
        arrivalTime: '17:30 PM',
        price: 70,
      },
    ],
  },
  { // AIR INDIA: DEL-BOM: 18-01-2018
    airlineName: 'Air India',
    airlineLogo: 'air-india-logo.png',
    details: [
      {
        from: 'Delhi',
        fromAirport: 'DEL',
        to: 'Mumbai',
        toAirport: 'BOM',
        flightNumber: 'AI-101',
        departure: '18-01-2018',
        departureTime: '07:00 AM',
        arrivalTime: '10:30 AM',
        price: 130,
      },
    ],
  },
  { // AIR INDIA: BOM-DEL: 18-01-2018
    airlineName: 'Air India',
    airlineLogo: 'air-india-logo.png',
    details: [
      {
        from: 'Mumbai',
        fromAirport: 'BOM',
        to: 'Delhi',
        toAirport: 'DEL',
        flightNumber: 'AI-102',
        departure: '18-01-2018',
        departureTime: '20:10 AM',
        arrivalTime: '13:10 AM',
        price: 42,
      },
    ],
  },
  { // AIR INDIA: 19-01-2018
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
        departureTime: '10:00 AM',
        arrivalTime: '12:10 AM',
        price: 80,
      },
    ],
  },
  {
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
        departureTime: '10:00 AM',
        arrivalTime: '12:10 AM',
        price: 40,
      },
    ],
  },
  { // AIR INDIA: PNQ-BOM: 19-01-2018
    airlineName: 'Air India',
    airlineLogo: 'air-india-logo.png',
    details: [
      {
        from: 'Pune',
        fromAirport: 'PNQ',
        to: 'Mumbai',
        toAirport: 'BOM',
        flightNumber: 'AI-101',
        departure: '19-01-2018',
        departureTime: '12:00 AM',
        arrivalTime: '13:30 PM',
        price: 101,
      },
    ],
  },
  { // AIR INDIA: BOM-PNQ: 19-01-2018
    airlineName: 'Air India',
    airlineLogo: 'air-india-logo.png',
    details: [
      {
        from: 'Mumbai',
        fromAirport: 'BOM',
        to: 'Pune',
        toAirport: 'PNQ',
        flightNumber: 'AI-102',
        departure: '19-01-2018',
        departureTime: '16:00 AM',
        arrivalTime: '17:30 PM',
        price: 70,
      },
    ],
  },
  { // AIR INDIA: DEL-BOM: 19-01-2018
    airlineName: 'Air India',
    airlineLogo: 'air-india-logo.png',
    details: [
      {
        from: 'Delhi',
        fromAirport: 'DEL',
        to: 'Mumbai',
        toAirport: 'BOM',
        flightNumber: 'AI-101',
        departure: '19-01-2018',
        departureTime: '07:00 AM',
        arrivalTime: '10:30 AM',
        price: 130,
      },
    ],
  },
  { // AIR INDIA: BOM-DEL: 19-01-2018
    airlineName: 'Air India',
    airlineLogo: 'air-india-logo.png',
    details: [
      {
        from: 'Mumbai',
        fromAirport: 'BOM',
        to: 'Delhi',
        toAirport: 'DEL',
        flightNumber: 'AI-102',
        departure: '19-01-2018',
        departureTime: '20:10 AM',
        arrivalTime: '13:10 AM',
        price: 42,
      },
    ],
  },
  { // AIR INDIA: 20-01-2018
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
        departureTime: '10:00 AM',
        arrivalTime: '12:10 AM',
        price: 5,
      },
    ],
  },
  {
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
        departureTime: '10:00 AM',
        arrivalTime: '12:10 AM',
        price: 70,
      },
    ],
  },
  { // AIR INDIA: PNQ-BOM: 20-01-2018
    airlineName: 'Air India',
    airlineLogo: 'air-india-logo.png',
    details: [
      {
        from: 'Pune',
        fromAirport: 'PNQ',
        to: 'Mumbai',
        toAirport: 'BOM',
        flightNumber: 'AI-101',
        departure: '20-01-2018',
        departureTime: '12:00 AM',
        arrivalTime: '13:30 PM',
        price: 101,
      },
    ],
  },
  { // AIR INDIA: BOM-PNQ: 18-01-2018
    airlineName: 'Air India',
    airlineLogo: 'air-india-logo.png',
    details: [
      {
        from: 'Mumbai',
        fromAirport: 'BOM',
        to: 'Pune',
        toAirport: 'PNQ',
        flightNumber: 'AI-102',
        departure: '20-01-2018',
        departureTime: '16:00 AM',
        arrivalTime: '17:30 PM',
        price: 70,
      },
    ],
  },
  { // AIR INDIA: DEL-BOM: 18-01-2018
    airlineName: 'Air India',
    airlineLogo: 'air-india-logo.png',
    details: [
      {
        from: 'Delhi',
        fromAirport: 'DEL',
        to: 'Mumbai',
        toAirport: 'BOM',
        flightNumber: 'AI-101',
        departure: '20-01-2018',
        departureTime: '07:00 AM',
        arrivalTime: '10:30 AM',
        price: 130,
      },
    ],
  },
  { // AIR INDIA: BOM-DEL: 18-01-2018
    airlineName: 'Air India',
    airlineLogo: 'air-india-logo.png',
    details: [
      {
        from: 'Mumbai',
        fromAirport: 'BOM',
        to: 'Delhi',
        toAirport: 'DEL',
        flightNumber: 'AI-102',
        departure: '20-01-2018',
        departureTime: '20:10 AM',
        arrivalTime: '13:10 AM',
        price: 42,
      },
    ],
  },
  // #endregion

  // -------------------------------
  // INDIGO
  // -------------------------------
  // #region
  { // INDIGO: 18-01-2018
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
        departureTime: '10:00 AM',
        arrivalTime: '12:10 AM',
        price: 42,
      },
    ],
  },
  {
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
        departureTime: '10:00 AM',
        arrivalTime: '12:10 AM',
        price: 66,
      },
    ],
  },
  { // INDIGO: 18-01-2018
    airlineName: 'IndiGo',
    airlineLogo: 'indigo-logo.png',
    details: [
      {
        from: 'Delhi',
        fromAirport: 'DEL',
        to: 'Mumbai',
        toAirport: 'BOM',
        flightNumber: '6E-101',
        departure: '18-01-2018',
        departureTime: '10:00 AM',
        arrivalTime: '12:10 AM',
        price: 42,
      },
    ],
  },
  {
    airlineName: 'IndiGo',
    airlineLogo: 'indigo-logo.png',
    details: [
      {
        from: 'Mumbai',
        fromAirport: 'BOM',
        to: 'Delhi',
        toAirport: 'DEL',
        flightNumber: '6E-102',
        departure: '18-01-2018',
        departureTime: '10:00 AM',
        arrivalTime: '12:10 AM',
        price: 66,
      },
    ],
  },
  { // INDIGO: 19-01-2018
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
        departureTime: '10:00 AM',
        arrivalTime: '12:10 AM',
        price: 58,
      },
    ],
  },
  {
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
        departureTime: '10:00 AM',
        arrivalTime: '12:10 AM',
        price: 49,
      },
    ],
  },
  { // INDIGO: 20-01-201
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
        departureTime: '10:00 AM',
        arrivalTime: '12:10 AM',
        price: 59,
      },
    ],
  },
  {
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
        departureTime: '10:00 AM',
        arrivalTime: '12:10 AM',
        price: 60,
      },
    ],
  },


  { // INDIGO: 20-01-201
    airlineName: 'IndiGo',
    airlineLogo: 'indigo-logo.png',
    details: [
      {
        from: 'Delhi',
        fromAirport: 'DEL',
        to: 'Mumbai',
        toAirport: 'BOM',
        flightNumber: '6E-101',
        departure: '20-01-2018',
        departureTime: '10:00 AM',
        price: 42,
      },
    ],
  },
  {
    airlineName: 'IndiGo',
    airlineLogo: 'indigo-logo.png',
    details: [
      {
        from: 'Mumbai',
        fromAirport: 'BOM',
        to: 'Delhi',
        toAirport: 'DEL',
        flightNumber: '6E-102',
        departure: '20-01-2018',
        arrivalTime: '12:10 AM',
        price: 66,
      },
    ],
  },
  // #endregion

  // -------------------------------
  // SpiceJet
  // -------------------------------
  // #region
  { // SPICEJET: 18-01-2018
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
        departureTime: '10:00 AM',
        arrivalTime: '12:10 AM',
        price: 75,
      },
    ],
  },
  {
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
        departureTime: '10:00 AM',
        arrivalTime: '12:10 AM',
        price: 99,
      },
    ],
  },
  { // SPICEJET: 19-01-2018
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
        departureTime: '10:00 AM',
        arrivalTime: '12:10 AM',
        price: 72,
      },
    ],
  },
  {
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
        departureTime: '10:00 AM',
        arrivalTime: '12:10 AM',
        price: 63,
      },
    ],
  },
  { // SPICEJET: 20-01-2018
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
        departureTime: '10:00 AM',
        arrivalTime: '12:10 AM',
        price: 55,
      },
    ],
  },
  {
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
        departureTime: '10:00 AM',
        arrivalTime: '12:10 AM',
        price: 61,
      },
    ],
  },
  { // SPICE JET: 20-01-2018
    airlineName: 'SpiceJet',
    airlineLogo: 'spicejet-logo.png',
    details: [
      {
        from: 'Pune',
        fromAirport: 'PNQ',
        to: 'Mumbai',
        toAirport: 'BOM',
        flightNumber: 'SG-101',
        departure: '20-01-2018',
        departureTime: '10:00 AM',
        arrivalTime: '12:10 AM',
        price: 47,
      },
    ],
  },
  {
    airlineName: 'SpiceJet',
    airlineLogo: 'spicejet-logo.png',
    details: [
      {
        from: 'Mumbai',
        fromAirport: 'BOM',
        to: 'Pune',
        toAirport: 'PNQ',
        flightNumber: 'SG-102',
        departure: '20-01-2018',
        departureTime: '10:00 AM',
        arrivalTime: '12:10 AM',
        price: 70,
      },
    ],
  },
  // #endregion
];

// Assign unique ids to each element of the array
flights.forEach((flight) => {
  let count = 0;
  flight.id = uuid();

  flight.details.forEach((detail) => {
    count += detail.price;
  });
  flight.price = count;
});

export default flights;
