const http = require('http');
const countStudents = require('./3-read_file_async');

const databasePath = process.argv[2];
if (!databasePath) {
  console.error('Usage: node 5-http.js <database_file_path>');
  process.exit(1);
}

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((request, response) => {
  if (request.method === 'GET') {
    if (request.url === '/') {
      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.end('Hello Holberton School!');
    } else if (request.url === '/students') {
      response.writeHead(200, { 'Content-Type': 'text/plain' });
      countStudents(databasePath)
        .then((data) => {
          const output = `This is the list of our students\n${data}`;
          response.end(output);
        })
        .catch((error) => {
          response.writeHead(500, { 'Content-Type': 'text/plain' });
          response.end(error.message);
        });
    } else {
      response.writeHead(404, { 'Content-Type': 'text/plain' });
      response.end('Not Found');
    }
  } else {
    response.writeHead(405, { 'Content-Type': 'text/plain' });
    response.end('Method Not Allowed');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
