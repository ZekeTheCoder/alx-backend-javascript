/* eslint-disable import/extensions */
import createIteratorObject from './100-createIteratorObject.js';
import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';

const employees = {
  ...createEmployeesObject('engineering', ['Bob', 'Jane', 'John', 'David']),
  ...createEmployeesObject('marketing', ['Sylvie', 'Jane', 'Doe']),
  ...createEmployeesObject('Development', ['Jack', 'Jill', 'Po']),
};

const report = createReportObject(employees);

const reportWithIterator = createIteratorObject(report);

for (const item of reportWithIterator) {
  console.log(item);
}
