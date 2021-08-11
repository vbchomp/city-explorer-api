'use strict';

const axios = require('axios');

class Movie {
  constructor(movie) {
    this.src = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '';
    this.title = movie.title; 
  }
}

async function getMovies(request, response) {
  let results = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIEDB_KEY}&query=${request.query.city}`);
  console.log(results.data);
  response.send(results.data.results.map(movie => new Movie(movie)));
};

module.exports = (getMovies);
