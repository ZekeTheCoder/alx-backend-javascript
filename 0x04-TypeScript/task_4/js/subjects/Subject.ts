// Subject class inside the Subjects namespace.
namespace Subjects {
	export class Subject {
		teacher: Teacher; // teacher property

		// assign a Teacher object to teacher attribute(setter)
		setTeacher(teacher: Teacher): void {
			this.teacher = teacher;
		}
	}
}