const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const databasePath = process.argv[2];

app.get('/', (request, response) => {
  response.status(200).send('Hello Holberton School!');
});

app.get('/students', (request, response) => {
  countStudents(databasePath)
    .then((output) => {
      response.status(200).send(['This is the list of our students', output].join('\n'));
    })
    .catch((error) => {
      response.status(500).send(error.message);
    });
});

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});

module.exports = app;
