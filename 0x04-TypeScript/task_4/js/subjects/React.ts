/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

// React class inside the Subjects namespace.
namespace Subjects {
	// declaration merging
	export interface Teacher {
		experienceTeachingReact?: number;
	}

	// React class, extend Subject class
	export class React extends Subjects {
		// methods
		getRequirements(): string {
			return "Here is the list of requirements for React";
		}

		getAvailableTeacher(): string {
			// checks if experienceTeachingReact is not underfined and greater than 0
			if (this.teacher.experienceTeachingReact !== undefined && this.teacher.experienceTeachingReact > 0) {
				return `Available Teacher: ${this.teacher.firstName}`;
			}
			return "No available teacher";
		
		}
	}
}
