# Flight Search Engine

![flight-search-engine-demo](https://user-images.githubusercontent.com/11490137/35165393-1764da04-fd46-11e7-8037-72e501cd39aa.gif)


# How to install?

### Prerequisites
```
npm v5.6.0 or later
node v9.2.0 or later
```

### Instructions
```
1 - Download and unzip flight-search-engine--velizar-genov.zip
2 - cd flight-search-engine--velizar-genov
3 - npm install
4 - npm start
```
App is now running on [http://localhost:3000](http://localhost:3000)

# Hot to test?

### Code
```
// Run unit tests
$ npm test

// Check test coverage
$ npm coverage
```

### Instructions to use the App

#### Scenario 1
```
1 - Navigate to http://localhost:3000
2 - Click the 'One way' button in the upper left corner
3 - Fill in the form as follow
      - From: Pune
      - To: Delhi
      - Departure Date: 18-01-2018
      - Do not change price range
4 - Click on search and the results appear on the right hand side
5 - You can now refine the flight search based on price to get a live update
```

#### Scenario 2
```
1 - Navigate to http://localhost:3000
2 - By default the selected button is 'Return'; leave it this way
3 - Fill in the form as follow
      - From: Delhi
      - To: Pune
      - Departure Date: 18-01-2018
      - Return Date: 19-01-2018
      - Optionally change the price range in the price filter
4 - Click on search and the results appear on the right hand side
5 - You can again refine the flight search based on price to get a live update
       - If there is no return flights for an airline only one way ticket will display
       - If no return ticket matches the price range but a one way ticket by airline
         does it will display the one way ticket
```

#### Scenario 3
```
1 - Navigate to http://localhost:3000
2 - By default the selected button is 'Return'; leave it this way
3 - Fill in the form as follow
      - From: Pune
      - To: Mumbai
      - Departure Date: 18-01-2018
      - Return Date: 20-01-2018
      - Do not change price range
4 - Click on search and the results appear on the right hand side
5 - Now click on the **One way** button and click search again; the return flights will
    be removed, leaving only the one way flights available
```

# Notes
- The final app has been tested on Chrome, Safari, Firefox and Edge (on Browser Stack)
- The design has been addapted to serve most of the major mobile devices in both landscape and portrait
- Only the dates between 17 and 21 of January have been left active
- There is no flights on the 17 and 21; they can be used to see the result when there is no flights
for the selected dates.
- The journey the testing data covers are: Delhi > Pune; Pune > Delhi; Pune > Mumbai; Mumbai Pune; 
Mumbai > Delhi; Delhi > Mumbai

![screen shot 2018-01-19 at 01 21 35](https://user-images.githubusercontent.com/11490137/35167662-41cea790-fd4e-11e7-80cd-ae37e2351245.png)

![screen shot 2018-01-19 at 01 50 25](https://user-images.githubusercontent.com/11490137/35167683-4df2f274-fd4e-11e7-91fb-337be5ea3f71.png)


# Tools
- ES6
- React
- NPM 
- Node
- [ESLint](https://eslint.org/)
- [Enzyme](http://airbnb.io/enzyme/docs/api/)
- [Jest](https://facebook.github.io/jest/docs/en/getting-started.html)
- [Create React App](https://github.com/facebookincubator/create-react-app)
- [ReactJS Datepicker](https://reactdatepicker.com/)
- [React Input Range](https://www.npmjs.com/package/react-input-range)


# Author
Velizar Genov for ThoughtWorks
