// 'use strict';

// const axios = require('axios');

// let cache = {};

// let expiredTimestamp = Date.now() - cache[key].timestamp < 1000 * 60 * 60 * 24 * 3;

// class Movie {
//   constructor(movie) {
//     this.src = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '';
//     this.title = movie.title;
//   }
// }

// async function getMovies(request, response) {
//   // Create a key variable that will allow concatenate the string of movies with search query.
//   const key = `movies-${request.query.city}`;
//   // Inside if statement if key does not exist, create it
//   if (!cache[key]) {
//     cache[key] = {};
//     // data property is saved in to axios call - results.data
//     let movieResults = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIEDB_KEY}&query=${request.query.city}`)
//     // start assigning properties, timestamp and data
//     cache[key].data = parseMovies(movieResults.data);
//     cache[key].timestamp = Date.now();
//     // send parsed movies to front end
//     response.send(parseMovies(movieResults.data));

//     console.log('cache miss', cache);
//   } else (cache[key] && expiredTimestamp);
//     // If this key exists in cache
//     console.log('cache hit', cache);
//     // if already exists in cache, return cache[key].data
//     response.send(cache[key].data);
//   };

// function parseMovies(data) {
//   if (data) {
//     // instantiate new movie and become it's own object in the cached object
//     let moviesCache = data.results.map(movie => new Movie(movie));
//     return moviesCache;
//   } else {
//     return 'No data provided.';
//   }
// }

// module.exports = (getMovies);
