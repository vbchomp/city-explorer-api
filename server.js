'use strict';

// console.log('Wazzup!');

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

//use for  dotenv variables that are undefined
require('dotenv').config();

const axios = require('axios');

const PORT = process.env.PORT;

// const weatherData = require('./data/weather.json');

let getMovies = async (request, response) => {
  let results = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIEDB_KEY}&query=${request.query.city}`);
  console.log(results.data);
  response.send(results.data.results.map(movie => new Movie(movie)));

let getWeather = async (request, response) => {
  //request from react frontend 
  let lat = request.query.lat;
  let lon = request.query.lon;
  // let searchQuery = request.query.searchQuery;
  console.log('comma here');
  let results = await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_API_KEY}&lat=${lat}&lon=${lon}`);
  console.log(results.data);
  response.send(results.data.data.map(day => new Forecast(day)));
};  


// specifying routes that server should be listening for
app.get('/', (request, response) => {
  //when get the request, send back these results
  response.send('Hello, from the outside');
});
// let urlToHitFromFrontEnd = 'https://api.weatherbit.io/v2.0/forecast/daily?key=76845b61824646bdbf3f2ff4b16191e2&city=seattle';

app.get('/weather', getWeather);


// https://api.themoviedb.org/3/search/movie?api_key=909aaa852b93939f2e3ffbc9d44417db&query=seattle
app.get('/movies', getMovies);
 


class Forecast {
  constructor(day) {
    this.description = `Low of ${day.low_temp}, high of ${day.high_temp} with ${day.weather.description},`;
    this.date = ` ${day.datetime}`;
  }
}

class Movie {
  constructor(movie) {
    this.src = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '';
    this.title = movie.title; 
  }
}

// listen on port 3001 for requests
app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));
