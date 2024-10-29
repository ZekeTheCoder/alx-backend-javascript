/// <reference path="Teacher.ts" />
/// <reference path="Subject.ts" />

// subjects namespace.
namespace Subjects {
	// optional experience field to the Teacher interface
  export interface Teacher {
    experienceTeachingJava?: number;
  }

	// java class
  export class Java extends Subjects {
    // methods
		getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
			// checks
      if (this.teacher.experienceTeachingReact !== undefined && this.teacher.experienceTeachingJava > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      }
      return "No available teacher";
    }
  }
}