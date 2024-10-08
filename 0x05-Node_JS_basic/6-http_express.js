#!/usr/bin/env node
const express = require('express');

const app = express();
const hostname = '127.0.0.1';
const port = 1245;

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
