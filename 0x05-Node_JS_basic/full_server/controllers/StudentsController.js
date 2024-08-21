import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response, DATABASE) {
    readDatabase(DATABASE)
      .then((fields) => {
        const students = ['This is the list of our students'];

        for (const key of Object.keys(fields)) {
          const msg = `Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`;
          students.push(msg);
        }
        response.status(200).send(students.join('\n'));
      })
      .catch((err) => {
        console.error(err);
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response, DATABASE) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
    } else {
      readDatabase(DATABASE)
        .then((fields) => {
          const students = fields[major];
          response.status(200).send(`List: ${students.join(', ')}`);
        })
        .catch((err) => {
          console.error(err);
          response.status(500).send('Cannot load the database');
        });
    }
  }
}

export default StudentsController;
