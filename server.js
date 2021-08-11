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

const getWeather = require('./modules/getWeather.js');
const getMovies = require('./modules/getMovies.js');

// const weatherData = require('./data/weather.json');


// specifying routes that server should be listening for
app.get('/', (request, response) => {
  //when get the request, send back these results
  response.send('Hello, from the outside');
});
// let urlToHitFromFrontEnd = 'https://api.weatherbit.io/v2.0/forecast/daily?key=76845b61824646bdbf3f2ff4b16191e2&city=seattle';

app.get('/weather', getWeather);

// https://api.themoviedb.org/3/search/movie?api_key=909aaa852b93939f2e3ffbc9d44417db&query=seattle
app.get('/movies', getMovies);

// listen on port 3001 for requests
app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));
