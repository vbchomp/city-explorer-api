'use strict';

// console.log('Wazzup!');

const express = require('express');
const app = express();
const cors = require('cors');
//use for  dotenv variables that are undefined
require('dotenv').config();

// do we need cors and dotenv?
app.use(cors());

const weatherData = require('./data/weather.json');

// specifying routes that server should be listening for
app.get('/', (request, response) => {
  //when get the request, send back these results
  response.send('Hello, from the outside');
});
// let urlToHitFromFrontEnd = 'http://localhost:3001/weather?lat=bird&lon=bee&searchQuery=buzz'
app.get('/weather', (request, response) => {
  //request from react frontend 
  let lat = request.query.lat;
  let lon = request.query.lon;
  let searchQuery = request.query.searchQuery;
  console.log(lat,lon,searchQuery, 'comma here');
  let cityError = 'Please choose either Seattle, Paris, or Amman';
  // let foundCity = weatherData.find(city => city.lat === lat && city.lon === lon);
  let foundCity = weatherData.find(city => city.city_name.toLowerCase() === searchQuery);
  console.log("foundCity Array", foundCity);
  if (foundCity) {
  // console.log(foundCity);
  //repsonse from with 3 days and description in new array
  response.send(foundCity.data.map(day => new Forecast(day)));
  } else {
    response.status(404).send(cityError);
  }
})

// app.get('/*', (request, response) => {
//   response.status(404).send('Something went wrong');
// });

// app.get('/sayHello', (request, response) => {
//   //can access query parameters using request.query
//   //accessed with http://localhost:3001/sayHello?name=Heather
//   let name = request.query.name;
//   response.send(`Hello, ${name}.`);
// });

class Forecast {
  constructor(day) {
    this.description = `Low of ${day.low_temp}, high of ${day.high_temp} with ${day.weather.description},`;
    this.date = ` ${day.datetime}`;
  }
}

// listen on port 3001 for requests
app.listen(3001, () => console.log('listening on port 3001'));
