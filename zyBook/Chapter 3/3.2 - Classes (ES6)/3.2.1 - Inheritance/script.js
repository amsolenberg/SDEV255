class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello. My name is ${this.name}.`);
  }
}

// Student inherits from Person
class Student extends Person {
  constructor(name, age, gpa) {
    super(name, age); // Call parent constructor
    this.gpa = gpa;
  }

  // Override parent's sayHello method
  sayHello() {
    console.log(`Hi, I'm ${this.name} with a ${this.gpa} GPA!`);
  }
}

class GraduateStudent extends Student {
    constructor(name, age, gpa, mastersOrPhd) {
        super(name, age, gpa);
        this.status = mastersOrPhd;
    }

    // Override parent's sayHello method
    sayHello() {
        console.log(`Hi, I'm ${this.name}, a ${this.status} student with a ${this.gpa} GPA!`);
    }
}