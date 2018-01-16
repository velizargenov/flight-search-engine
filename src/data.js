/**
 * IATA code: http://www.iata.org/publications/Pages/code-search.aspx
 */

const flights = [
  {
    id: 1,
    airline_code: 'AI',
    airline_name: 'Air India',
    airline_logo: 'air-india-logo.png',
    currency: 'GBP',
    index_string: [
      'Pune',
      'Delhi',
    ],
    segments: [
      {
        flight_number: 'AI-202',
        origin: 'Pune',
        origin_iata_code: 'PNQ',
        destination: 'Delhi',
        destination_iata_code: 'DEL',
        price: 75,
        departure: 'Mon Jan 13 2018 11:00:00 GMT+0000 (GMT)',
        arrival: 'Mon Jan 13 2018 13:10:00 GMT+0000 (GMT)',
      },
      {
        flight_number: 'AI-203',
        origin: 'Delhi',
        origin_iata_code: 'DEL',
        destination: 'Pune',
        destination_iata_code: 'PNQ',
        price: 50,
        departure: 'Mon Jan 14 2018 10:20:00 GMT+0000 (GMT)',
        arrival: 'Mon Jan 14 2018 12:30:00 GMT+0000 (GMT)',
      },
    ],
  },
  {
    id: 2,
    airline_code: '6E',
    airline_name: 'IndiGo',
    airline_logo: 'indigo-logo.png',
    currency: 'GBP',
    index_string: [
      'Pune',
      'Delhi',
    ],
    segments: [
      {
        flight_number: '6E-202',
        origin: 'Pune',
        origin_iata_code: 'PNQ',
        destination: 'Delhi',
        destination_iata_code: 'DEL',
        price: 68,
        depart_date: 'Mon Jan 14 2018 07:00:00 GMT+0000 (GMT)',
        arrive_date: 'Mon Jan 14 2018 09:10:00 GMT+0000 (GMT)',
      },
      {
        flight_number: '6E-203',
        origin: 'Delhi',
        origin_iata_code: 'DEL',
        destination: 'Pune',
        destination_iata_code: 'PNQ',
        price: 42,
        departure: 'Mon Jan 15 2018 21:00:00 GMT+0000 (GMT)',
        arrival: 'Mon Jan 15 2018 23:10:00 GMT+0000 (GMT)',
      },
    ],
  },
  {
    id: 3,
    airline_code: 'SG',
    airline_name: 'SpiceJet',
    airline_logo: 'spicejet-logo.png',
    currency: 'GBP',
    index_string: [
      'Pune',
      'Delhi',
    ],
    segments: [
      {
        flight_number: 'SG-202',
        origin: 'Pune',
        origin_iata_code: 'PNQ',
        destination: 'Delhi',
        destination_iata_code: 'DEL',
        price: 120,
        depart_date: 'Mon Jan 16 2018 07:00:00 GMT+0000 (GMT)',
        arrive_date: 'Mon Jan 16 2018 09:10:00 GMT+0000 (GMT)',
      },
      {
        flight_number: 'SG-203',
        origin: 'Delhi',
        origin_iata_code: 'DEL',
        destination: 'Pune',
        destination_iata_code: 'PNQ',
        price: 63,
        departure: 'Mon Jan 14 2018 21:00:00 GMT+0000 (GMT)',
        arrival: 'Mon Jan 14 2018 23:10:00 GMT+0000 (GMT)',
      },
    ],
  },
];

export default flights;
