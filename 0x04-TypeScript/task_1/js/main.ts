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

// function interface
interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

// printTeacher function
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// student class constructor interface
interface StudentClassConstructor {
	firstName: string;
	lastName: string;
}

//  student class interface
interface StudentClassInterface {
	workOnHomework(): string;
	displayName(): string;
}

// Teacher Instance
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

// student class
class StudentClass implements StudentClassInterface {
	// fields
	private firstName: string;
	private lastName: string;
	
	// constructor
	constructor({firstName, lastName}: StudentClassConstructor) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	// methods
	workOnHomework(): string {
		return 'Currently working';
	}
	
	displayName(): string {
		return this.firstName;
	}
}


// Director Instance
const director1: Directors = {
	firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

// Student Instance
const student2 = new StudentClass({ firstName: 'John', lastName: 'Doe' });

console.log(teacher3);
console.log(director1);
console.log(printTeacher("John", "Doe"));
console.log(student2.displayName());
console.log(student2.workOnHomework());

