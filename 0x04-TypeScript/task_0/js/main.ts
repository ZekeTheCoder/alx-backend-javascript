// define inteface named Student
interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

// create two students using inteface
const student1: Student = {
	firstName: 'Leo',
	lastName: 'Messi',
	age: 30,
	location: 'Argentina'
}

const student2: Student = {
	firstName: 'Erling',
	lastName: 'Haaaland',
	age: 20,
	location: 'Norway'
}

//  an array named studentsList containing the two variables
const studentsList: Student[] = [student1, student2];

/* render a table and for each elements in the array,
 append a new row to the table using vanilla JavaScript using insert row/cell*/
const table = document.createElement('table');

// header row
const headerRow = table.insertRow();
const headerFirstNameCell = headerRow.insertCell(0);
const headerLocationCell = headerRow.insertCell(1);

headerFirstNameCell.innerHTML = '<b>First Name</b>'; // innerText(plain text)
headerLocationCell.innerHTML = '<b>Location</b>'; // innerHTML(styled text)

// student rows
studentsList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell(0);
	const locationCell = row.insertCell(1);

	firstNameCell.innerText = student.firstName;
	locationCell.innerText = student.location;
});

document.body.appendChild(table);

// Function to render a table with the students' information using create element
// function renderTable(students: Student[]): void {
// 	// Create a table element
// 	const table = document.createElement('table');

// 	// header row
// 	const headerRow = document.createElement('tr');

// 	// header cells
// 	const headers = ['First Name', 'Last Name', 'Age', 'Location'];
// 	headers.forEach(headerText => {
// 			const headerCell = document.createElement('th');
// 			headerCell.textContent = headerText;
// 			headerRow.appendChild(headerCell);
// 	});

// 	// add header row to the table
// 	table.appendChild(headerRow);

// 	// Iterate over each student in the students array
// 	students.forEach((student) => {
// 			// Create a new row for each student
// 			const row = document.createElement('tr');

// 			// Create a cell for the student's first name, last name, age and location
// 			const firstNameCell = document.createElement('td');
// 			firstNameCell.textContent = student.firstName;
// 			row.appendChild(firstNameCell);

// 			const lastNameCell = document.createElement('td');
// 			lastNameCell.textContent = student.lastName;
// 			row.appendChild(lastNameCell);

// 			const ageCell = document.createElement('td');
// 			ageCell.textContent = student.age.toString();
// 			row.appendChild(ageCell);

// 			// Create a cell for the student's location
// 			const locationCell = document.createElement('td');
// 			locationCell.textContent = student.location;
// 			row.appendChild(locationCell);

// 			// add the row to the table
// 			table.appendChild(row);
// 	});

// 	// add the table to the body of the document
// 	document.body.appendChild(table);
// }

// // Call the function
// renderTable(studentsList);


