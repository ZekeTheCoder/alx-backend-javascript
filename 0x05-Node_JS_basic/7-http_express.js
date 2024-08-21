#!/usr/bin/env node
const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const hostname = '127.0.0.1';
const port = 1245;
const databasePath = process.argv[2];

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', async (request, response) => {
  countStudents(databasePath)
    .then((output) => {
      response.send(['This is the list of our students', output].join('\n'));
    })
    .catch((error) => {
      response.status(500).send(error.message);
    });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
