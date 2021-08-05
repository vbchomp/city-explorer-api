'use strict';

console.log('Wazzup!');

const express = require('express');

const app = express();
//change for lab 07 stuff
// app.get('/', (request, response) => {
//   response.send('Hello, from the outside');
// });

// app.get('/banana', (request, response) => {
//   response.send(`Hello, ${name}.`);
// });

// app.get('/sayHello', (request, response) => {
//   //can access query parameters using request.query
//   let name = request.query.name;
//   response.send(`Hello, ${name}.`);
// });

// app.get('/*', (request, response) => {
//   response.status(404).send('Something went wrong');
// });

app.listen(3001, () => console.log('listening on port 3001'));
