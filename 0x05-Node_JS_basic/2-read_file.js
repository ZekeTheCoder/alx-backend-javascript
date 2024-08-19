const fs = require('fs');

const countStudents = (path) => {
  try {
    let data = fs.readFileSync(path, 'utf8')
      .toString().split('\n'); // converts the data into an array
    data = data.slice(1, data.length - 1); // remove header row
    console.log(`Number of students: ${data.length}`);

    // store student names categorized by their subject.
    const subjects = {};

    for (const row of data) {
      const student = row.split(',');
      const field = student[3];

      if (!subjects[field]) {
        subjects[field] = [];
      }

      subjects[field].push(student[0]);
    }

    for (const subject in subjects) {
      if (subject) console.log(`Number of students in ${subject}: ${subjects[subject].length}. List: ${subjects[subject].join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
