// Student class
function Student(name, gpa) {
    this.name = name; 
    this.gpa = gpa;
}

function Course(title) {
    this.title = title;
    this.students = [];

    this.addStudent = function(student) {
        this.students.push(student);
    };
}

Course.prototype.displayStudents = function() {
    console.log(`Students in ${this.title}:`)

    for (let i = 0; i < this.students.length; i++) {
        console.log(`${i + 1}. ${this.students[i].name} - ${this.students[i].gpa}`);
    }
}

let course1 = new Course("General Sociology");
let course2 = new Course("Macroeconomics");

course1.addStudent(new Student("Jane", 3));
course1.addStudent(new Student("Eric", 4));

course2.addStudent(new Student("Zane", 3.3));
course2.addStudent(new Student("Janet", 2.1));

course1.displayStudents();
course2.displayStudents();