const http = require('http');
const countStudents = require('./3-read_file_async');

const databasePath = process.argv[2];

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');

  const { url } = request;

  if (url === '/') {
    response.write('Hello Holberton School!');
  } else if (url === '/students') {
    response.write('This is the list of our students\n');
    try {
      const studentsData = await countStudents(databasePath);
      response.end(studentsData);
    } catch (error) {
      response.end(error.message);
    }
  }
  response.statusCode = 404;
  response.end();
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
