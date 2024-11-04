// Define a Person class with properties for name and age and a method to greet
class Person {
  // Constructor to initialize the Person instance with name and age
  constructor(name, age) {
    this.name = name; // Name of the person
    this.age = age; // Age of the person
  }

  // Method to print a greeting using the person's name
  sayHello() {
    console.log(`Hello. My name is ${this.name}.`);
  }
}

// Student class inherits from Person, adding GPA information
class Student extends Person {
  // Constructor to initialize the Student instance with name, age, and GPA
  constructor(name, age, gpa) {
    super(name, age); // Call the parent (Person) constructor to set name and age
    this.gpa = gpa; // GPA of the student
  }

  // Override the sayHello method from Person
  // Prints a greeting with the student's name and GPA
  sayHello() {
    console.log(`Hi, I'm ${this.name} with a ${this.gpa} GPA!`);
  }
}

// GraduateStudent class inherits from Student, adding program status (masters or PhD)
class GraduateStudent extends Student {
  // Constructor to initialize the GraduateStudent instance with name, age, GPA, and program status
  constructor(name, age, gpa, mastersOrPhd) {
    super(name, age, gpa); // Call the parent (Student) constructor to set name, age, and GPA
    this.status = mastersOrPhd; // Status indicating "masters" or "PhD" program
  }

  // Override the sayHello method from Student
  // Prints a greeting with the graduate student's name, status, and GPA
  sayHello() {
    console.log(`Hi, I'm ${this.name}, a ${this.status} student with a ${this.gpa} GPA!`);
  }
}
