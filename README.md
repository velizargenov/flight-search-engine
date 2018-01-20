# Flight Search Engine

##### Table of Contents  

<a href="#intro">Intro</a><br>
<a href="#installation">Installation</a><br>
<a href="#testing">Testing</a><br>
<a href="#notes">Notes</a><br>
<a href="#my-approach">My approach</a><br>
<a href="#tools">Tools</a><br>

# Intro
As part of the interview process at ThoughtWorks I was given the technical challenge to build a Flight Search Engine. I have decided to use React as a library of choice to accomplish this. Please find some notes on how I have designed my application as well as detailed instructions on how to test it below.

![flight-search-engine-demo](https://user-images.githubusercontent.com/11490137/35165393-1764da04-fd46-11e7-8037-72e501cd39aa.gif)

# Installation
##### Prerequisites
```
npm v5.6.0 or later
node v9.2.0 or later
```
##### Instructions
```
1 - Download and unzip flight-search-engine--velizar-genov.zip
2 - cd flight-search-engine--velizar-genov
3 - npm install
4 - npm start
```
App is now running on [http://localhost:3000](http://localhost:3000)


# Testing
### Code
```
// Run unit tests
$ npm test

// Check test coverage
$ npm coverage
```

### Instructions to use the App

##### Scenario 1
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
<details><summary>visual example</summary>
<img src="https://user-images.githubusercontent.com/11490137/35182707-cb93a3d0-fdd1-11e7-8f17-816a28e54187.gif">
</details>


##### Scenario 2

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
<details><summary>visual example</summary>
<img src="https://user-images.githubusercontent.com/11490137/35182770-d099c0e8-fdd2-11e7-8662-1e2a8a1723e3.gif">
</details>


##### Scenario 3
```
1 - Navigate to http://localhost:3000
2 - By default the selected button is 'Return'; leave it this way
3 - Fill in the form as follow
      - From: Delhi
      - To: Mumbai
      - Departure Date: 18-01-2018
      - Return Date: 20-01-2018
      - Do not change price range
4 - Click on search and the results appear on the right hand side
5 - Now click on the **One way** button and click search again; the return flights will
    be removed, leaving only the one way flights available
```
<details><summary>visual example</summary>
<img src="https://user-images.githubusercontent.com/11490137/35182816-89bb807a-fdd3-11e7-8280-494d6c658734.gif">
</details>


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

# My approach

### 1. Project setup
I have decided to use [create-react-app](https://github.com/facebookincubator/create-react-app) to quickly set up my project and focus on designing my components and later on test and implement them. For testing, I have chosen [Jest](https://facebook.github.io/jest/docs/en/getting-started.html) as it comes already configured with create-react-app and [Enzyme](http://airbnb.io/enzyme/docs/api/)  which makes it easy to assert, manipulate, and traverse the components' output. I have used [ESLint](https://eslint.org/) along with the [eslint-airbnb-config](https://www.npmjs.com/package/eslint-config-airbnb) as dev-dependencies to ensure code quality and consistency across components. Finally, among dozens of options, I have decided to use plain CSS to style every component individually.

### 2. Designing the data
For me, this has probably been one of the most challenging parts of the project as there are various different ways of designing a similar data structure. Having made a small research on the topic, following guides such as [schema.org](http://schema.org/Flight) and [travelpayouts.com](https://support.travelpayouts.com/hc/en-us/articles/203956173-Flights-search-API-Real-time-and-multi-city-search#01), I have came up with a slightly different approach compared to the conventional ones suggested out there. My data representation is in a json-like format and precisely an array of objects. Each object represents a flight, which by default is one way (the details array).

When the user is searching for a "one way" ticket I'm filtering the array of objects to easily find the flights based on the searching criteria. On the other hand, when the user is searching for a return flight, I am only extending the details of the results we already have with the details of the return flight. 

I personally believe that this is an approach which can scale in time. In a real life application, however, this can be designed in a more relational-like way by extracting references for the airlines and then having the details of each flight only to easily plug into the final result. 

```js
{
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
```

### 3. Breaking the UI into Component Hierarchy

```js
FlightSearchEngineApp
Header
SearchBar
ResultTable
Form
Flight
FLightDetails
Button
InputField
InputDate
```

```
|--FlightSearchEngineApp
|----Header
|----SearchBar
|------Button
|------Form
|--------InputField
|--------InputDate
|--------Button
|----ResultTable
|------Flight
|--------Button
|--------FlightDetails
```

### 4. Identified the minimal representation of UI state and where it will live
After braking down the UI into components I carefully examined the hierarchy to decide what the state of the application will be and where it will live. In this particular case, elements in the form on the left hand side were mutating the state, i.e. 'One way' and 'Return' buttons; From, Destination, Departure Date, Return Date, Passengers input boxes; price filter. The common parent element of those state is _FlightSearchEngineApp_ and therefore I decided to place it in there.

### 5. Build a static version of the application
After the research and design phases, I moved on to the actual implementation of the task. Firstly, I built a static version of the application, passing on the flights as props from FlightSearchEngineApp down to the component tree. In this phase I did not use any state and none of the components were interactive. I styled each component, ensured good level accessibility and usability and then moved on to the next step.

### 6. Add inverse data flow
At this stage, I introduced the state passing it top-to-bottom from the parent component FlightSearchEngineApp. I ensured a proper data flow, not making the components dependent on any functionality. To achieve this, I have implemented all the methods within the parent component (FlightSearchEngineApp) and I have passed it down as props.

### 7. Testing and preparation to send
In the final stage I added propTypes checking as well as some defaultProps wherever required. I added some snapshot tests as well. I added some media queries to ensure proper visualisation for the major mobile devices. I used Browser Stack to test the application in some of the major browsers. I wrote up this documentation, prepared the zip file, tested it on another machine and finally sent it over!

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
