'use strict';

const axios = require('axios');

class Forecast {
  constructor(day) {
    this.description = `Low of ${day.low_temp}, high of ${day.high_temp} with ${day.weather.description},`;
    this.date = ` ${day.datetime}`;
  }
}

async function getWeather(request, response) {
  //request from react frontend 
  let lat = request.query.lat;
  let lon = request.query.lon;
  // let searchQuery = request.query.searchQuery;
  console.log('comma here');
  let results = await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_API_KEY}&lat=${lat}&lon=${lon}`);
  console.log(results.data);
  response.send(results.data.data.map(day => new Forecast(day)));
}; 

module.exports = (getWeather);
