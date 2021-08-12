'use strict';

let cache = require('./cache.js');

const axios = require('axios');

function getMovies(city) {
  const key = 'movie-' + city;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIEDB_KEY}&query=${city}`;

  // timestamp is 3 days
  if (cache[key] && (Date.now() - cache[key].timestamp < 259200000)) {
    console.log('Cache hit');
  } else {
    console.log('Cache miss');
    cache[key] = {};
    cache[key].timestamp = Date.now();
    cache[key].data = axios.get(url)
    .then(response => parseMovies(response.data));
  }

  return cache[key].data;
}

function parseMovies(movieData) {
  try {
    const movieStuff = movieData.results.map(movie => {
      return new Movies(movie);
    });
    return Promise.resolve(movieStuff);
  } catch (event) {
    return Promise.reject(event);
  }
}

class Movies {
  constructor(movie) {
    this.src = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '';
    this.title = movie.title;
  }
}

module.exports = (getMovies);
