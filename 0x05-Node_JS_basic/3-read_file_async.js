const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const lines = data.trim().split('\n');
      const students = lines.slice(1).filter((row) => row.trim() !== ''); // Remove empty lines
      const response = [];
      const subjects = {};

      const message1 = `Number of students: ${students.length}`;
      console.log(message1);
      response.push(message1);

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
          const message2 = `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`;
          console.log(message2);
          response.push(message2);
        }
      }

      resolve(response.join('\n'));
    }
  });
});

module.exports = countStudents;
