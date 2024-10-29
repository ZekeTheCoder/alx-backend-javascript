// define Teacher interface
interface Teacher {
	readonly firstName: string; // read-only property - no change allowed
	readonly lastName: string;
	fullTimeEmployee: boolean; // required property
	yearsOfExperience?: number; // optional property
	location: string; // required property
	[key: string]: any; // allows adding other properties
}

interface Directors extends Teacher {
	numberOfReports: number; // required property
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);