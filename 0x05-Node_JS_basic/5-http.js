const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 1245;

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const lines = data.trim().split('\n');
      const students = lines.slice(1, lines.length - 1);
      let output = `Number of students: ${students.length}\n`;

      const subjects = {};

      for (const row of students) {
        const student = row.split(',');
        const field = student[3];
        const name = student[0];

        if (!subjects[field]) {
          subjects[field] = [];
        }
        subjects[field].push(name);
      }

      for (const field in subjects) {
        if (field) {
          const list = subjects[field];
          output += `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}\n`;
        }
      }

      resolve(output.trim());
    }
  });
});

// HTTP server
const app = http.createServer(async (request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');

  const { url } = request;

  if (url === '/') {
    response.end('Hello Holberton School!');
  } else if (url === '/students') {
    response.write('This is the list of our students\n');
    try {
      const databasePath = process.argv[2];
      const studentsData = await countStudents(databasePath);
      response.end(studentsData);
    } catch (error) {
      response.statusCode = 500;
      response.end(error.message);
    }
  } else {
    response.statusCode = 404;
    response.end('Not Found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
