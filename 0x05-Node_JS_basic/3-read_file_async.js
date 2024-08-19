const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const lines = data.trim().split('\n');
      // remove header row and last row if it's empty
      const students = lines.slice(1, data.length - 1);
      console.log(`Number of students: ${students.length}`);

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
          console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
        }
      }

      resolve();
    }
  });
});

module.exports = countStudents;
