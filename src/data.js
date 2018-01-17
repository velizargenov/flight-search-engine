const flights = [
  // #region First Jan AirIndia, IndiGo, SpiceJet
  // Air India
  {
    id: 1,
    airlineName: 'Air India',
    airlineCode: 'AI',
    airlineLogo: 'air-india-logo.png',
    flightNumber: 'AI-202',
    origin: 'Delhi',
    originAirport: 'DEL',
    destination: 'Pune',
    destinationAirport: 'PNQ',
    departure: '18-01-2018',
    departureTime: '10:00 AM',
    arrival: '18-01-2018',
    arrivalTime: '12:10 AM',
    price: '60.00',
  },
  {
    id: 2,
    airlineName: 'Air India',
    airlineCode: 'AI',
    airlineLogo: 'air-india-logo.png',
    flightNumber: 'AI-202',
    origin: 'Pune',
    originAirport: 'PNQ',
    destination: 'Delhi',
    destinationAirport: 'DEL',
    departure: '18-01-2018',
    departureTime: '10:00 AM',
    arrival: '18-01-2018',
    arrivalTime: '12:10 AM',
    price: '60.00',
  },

  // IndiGo
  {
    id: 3,
    airlineName: 'IndiGo',
    airlineCode: '6E',
    airlineLogo: 'indigo-logo.png',
    flightNumber: '6E-202',
    origin: 'Delhi',
    originAirport: 'DEL',
    destination: 'Pune',
    destinationAirport: 'PNQ',
    departure: '18-01-2018',
    departureTime: '10:00 AM',
    arrival: '18-01-2018',
    arrivalTime: '12:10 AM',
    price: '125.00',
  },
  {
    id: 4,
    airlineName: 'IndiGo',
    airlineCode: '6E',
    airlineLogo: 'indigo-logo.png',
    flightNumber: '6E-203',
    origin: 'Pune',
    originAirport: 'PNQ',
    destination: 'Delhi',
    destinationAirport: 'DEL',
    departure: '18-01-2018',
    departureTime: '10:00 AM',
    arrival: '18-01-2018',
    arrivalTime: '12:10 AM',
    price: '125.00',
  },

  // SpiceJet
  {
    id: 5,
    airlineName: 'SpiceJet',
    airlineCode: 'SG',
    airlineLogo: 'spicejet-logo.png',
    flightNumber: 'SG-202',
    origin: 'Delhi',
    originAirport: 'DEL',
    destination: 'Pune',
    destinationAirport: 'PNQ',
    departure: '18-01-2018',
    departureTime: '10:00 AM',
    arrival: '18-01-2018',
    arrivalTime: '12:10 AM',
    price: '125.00',
  },
  {
    id: 6,
    airlineName: 'SpiceJet',
    airlineCode: 'SG',
    airlineLogo: 'spicejet-logo.png',
    flightNumber: 'SG-203',
    origin: 'Pune',
    originAirport: 'PNQ',
    destination: 'Delhi',
    destinationAirport: 'DEL',
    departure: '18-01-2018',
    departureTime: '10:00 AM',
    arrival: '18-01-2018',
    arrivalTime: '12:10 AM',
    price: '125.00',
  },
  // #endregion

  // #region Second Jan AirIndia, IndiGo, SpiceJet
  // Air India
  {
    id: 7,
    airlineName: 'Air India',
    airlineCode: 'AI',
    airlineLogo: 'air-india-logo.png',
    flightNumber: 'AI-202',
    origin: 'Delhi',
    originAirport: 'DEL',
    destination: 'Pune',
    destinationAirport: 'PNQ',
    departure: '19-01-2018',
    departureTime: '10:00 AM',
    arrival: '19-01-2018',
    arrivalTime: '12:10 AM',
    price: '125.00',
  },
  {
    id: 8,
    airlineName: 'Air India',
    airlineCode: 'AI',
    airlineLogo: 'air-india-logo.png',
    flightNumber: 'AI-202',
    origin: 'Pune',
    originAirport: 'PNQ',
    destination: 'Delhi',
    destinationAirport: 'DEL',
    departure: '19-01-2018',
    departureTime: '10:00 AM',
    arrival: '19-01-2018',
    arrivalTime: '12:10 AM',
    price: '125.00',
  },

  // IndiGo
  {
    id: 9,
    airlineName: 'IndiGo',
    airlineCode: '6E',
    airlineLogo: 'indigo-logo.png',
    flightNumber: '6E-202',
    origin: 'Delhi',
    originAirport: 'DEL',
    destination: 'Pune',
    destinationAirport: 'PNQ',
    departure: '19-01-2018',
    departureTime: '10:00 AM',
    arrival: '19-01-2018',
    arrivalTime: '12:10 AM',
    price: '125.00',
  },
  {
    id: 10,
    airlineName: 'IndiGo',
    airlineCode: '6E',
    airlineLogo: 'indigo-logo.png',
    flightNumber: '6E-203',
    origin: 'Pune',
    originAirport: 'PNQ',
    destination: 'Delhi',
    destinationAirport: 'DEL',
    departure: '19-01-2018',
    departureTime: '10:00 AM',
    arrival: '19-01-2018',
    arrivalTime: '12:10 AM',
    price: '125.00',
  },

  // SpiceJet
  {
    id: 11,
    airlineName: 'SpiceJet',
    airlineCode: 'SG',
    airlineLogo: 'spicejet-logo.png',
    flightNumber: 'SG-202',
    origin: 'Delhi',
    originAirport: 'DEL',
    destination: 'Pune',
    destinationAirport: 'PNQ',
    departure: '19-01-2018',
    departureTime: '10:00 AM',
    arrival: '19-01-2018',
    arrivalTime: '12:10 AM',
    price: '125.00',
  },
  {
    id: 12,
    airlineName: 'SpiceJet',
    airlineCode: 'SG',
    airlineLogo: 'spicejet-logo.png',
    flightNumber: 'SG-203',
    origin: 'Pune',
    originAirport: 'PNQ',
    destination: 'Delhi',
    destinationAirport: 'DEL',
    departure: '19-01-2018',
    departureTime: '10:00 AM',
    arrival: '19-01-2018',
    arrivalTime: '12:10 AM',
    price: '125.00',
  },
  // #endregion

  // #region Third Jan AirIndia, IndiGo, SpiceJet
  // Air India
  {
    id: 13,
    airlineName: 'Air India',
    airlineCode: 'AI',
    airlineLogo: 'air-india-logo.png',
    flightNumber: 'AI-202',
    origin: 'Delhi',
    originAirport: 'DEL',
    destination: 'Pune',
    destinationAirport: 'PNQ',
    departureDate: '20-01-2018',
    departureTime: '10:00 AM',
    arrival: '20-01-2018',
    arrivalTime: '12:10 AM',
    price: '125.00',
  },
  {
    id: 14,
    airlineName: 'Air India',
    airlineCode: 'AI',
    airlineLogo: 'air-india-logo.png',
    flightNumber: 'AI-202',
    origin: 'Pune',
    originAirport: 'PNQ',
    destination: 'Delhi',
    destinationAirport: 'DEL',
    departure: '20-01-2018',
    departureTime: '10:00 AM',
    arrival: '20-01-2018',
    arrivalTime: '12:10 AM',
    price: '125.00',
  },

  // IndiGo
  {
    id: 15,
    airlineName: 'IndiGo',
    airlineCode: '6E',
    airlineLogo: 'indigo-logo.png',
    flightNumber: '6E-202',
    origin: 'Delhi',
    originAirport: 'DEL',
    destination: 'Pune',
    destinationAirport: 'PNQ',
    departure: '20-01-2018',
    departureTime: '10:00 AM',
    arrival: '20-01-2018',
    arrivalTime: '12:10 AM',
    price: '125.00',
  },
  {
    id: 16,
    airlineName: 'IndiGo',
    airlineCode: '6E',
    airlineLogo: 'indigo-logo.png',
    flightNumber: '6E-203',
    origin: 'Pune',
    originAirport: 'PNQ',
    destination: 'Delhi',
    destinationAirport: 'DEL',
    departure: '20-01-2018',
    departureTime: '10:00 AM',
    arrival: '20-01-2018',
    arrivalTime: '12:10 AM',
    price: '125.00',
  },

  // SpiceJet
  {
    id: 17,
    airlineName: 'SpiceJet',
    airlineCode: 'SG',
    airlineLogo: 'spicejet-logo.png',
    flightNumber: 'SG-202',
    origin: 'Delhi',
    originAirport: 'DEL',
    destination: 'Pune',
    destinationAirport: 'PNQ',
    departure: '20-01-2018',
    departureTime: '10:00 AM',
    arrival: '20-01-2018',
    arrivalTime: '12:10 AM',
    price: '125.00',
  },
  {
    id: 18,
    airlineName: 'SpiceJet',
    airlineCode: 'SG',
    airlineLogo: 'spicejet-logo.png',
    flightNumber: 'SG-203',
    origin: 'Pune',
    originAirport: 'PNQ',
    destination: 'Delhi',
    destinationAirport: 'DEL',
    departure: '20-01-2018',
    departureTime: '10:00 AM',
    arrival: '20-01-2018',
    arrivalTime: '12:10 AM',
    price: '125.00',
  },
  // #endregion
];

export default flights;
