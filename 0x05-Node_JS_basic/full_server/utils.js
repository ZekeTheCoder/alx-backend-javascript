import fs from 'fs';

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const students = lines.slice(1).filter((row) => row.trim() !== ''); // Remove empty lines
        const result = {};

        for (const row of students) {
          const [name, , , field] = row.split(','); // destructuring

          if (!result[field]) {
            result[field] = [];
          }
          result[field].push(name);
        }

        resolve(result);
      }
    });
  });
}

export default readDatabase;
