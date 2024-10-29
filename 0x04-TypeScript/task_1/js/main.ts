// define Teacher interface
interface Teacher {
	readonly firstName: string; // read-only property - no change allowed
	readonly lastName: string;
	fullTimeEmployee: boolean; // required property
	yearsOfExperience?: number; // optional property
	location: string; // required property
	[key: string]: any; // allows adding other properties
}

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);