// Create the DirectorInterface and TeacherInterface interface with the 3 expected methods
interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

// class Director that will implement DirectorInterface
class Director implements DirectorInterface {
	workFromHome(): string {
		return 'Working from home';
	}
	getCoffeeBreak(): string {
		return 'Getting a coffe break';
	}
	workDirectorTasks(): string {
		return 'Getting to director tasks';
	}
}

// class Teacher that will implement TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Create a function createEmployee that can return either a Director or a Teacher instance.
// if salary is a number and less than 500 - It should return a new Teacher otherwise Director.
function createEmployee(salary: number | string): Director | Teacher {
	if (typeof salary === 'number' && salary < 500) {
		return new Teacher();
	}
	return new Director();
}

// Type predicate function
function isDirector(employee: Director | Teacher): employee is Director {
	return employee instanceof Director;
}

// executeWork function 
function executeWork(employee: Director | Teacher): string {
	if (isDirector(employee)) {
		return employee.workDirectorTasks();
	} else {
		return employee.workTeacherTasks();
	}
}

// string literal type 
type Subjects = 'Math' | 'History';

// teachClass function 
function teachClass(todayClass: Subjects): string {
	if (todayClass === 'Math') {
		return 'Teaching Math';
	} else{
		return 'Teaching History';
	}
}

// Testing
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

console.log(teachClass('Math'))
console.log(teachClass('History'))