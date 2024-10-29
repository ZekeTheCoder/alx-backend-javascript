/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

// Cpp class inside the Subjects namespace.
namespace Subjects {
	// declaration merging
	export interface Teacher {
		experienceTeachingC?: number;
	}

	// Cpp class, extend Subject class
	export class Cpp extends Subjects {
		// methods
		getRequirements(): string {
			return "Here is the list of requirements for Cpp";
		}

		getAvailableTeacher(): string {
			// checks if experienceTeachingC is not underfined and greater than 0
			if (this.teacher.experienceTeachingC !== undefined && this.teacher.experienceTeachingC > 0) {
				return `Available Teacher: ${this.teacher.firstName}`;
			} else {
				return "No available teacher";
			}
		}
	}
}
