// Parent class with additional `age` parameter
function Person(name, age) {
  this.name = name;
  this.age = age; // `age` will be undefined if not provided
}

Person.prototype.sayHello = function () {
  console.log(`Hello. My name is ${this.name}. I am ${this.age || 'unknown age'}.`);
};
Person.prototype.sayGoodbye = function () {
  console.log(`Goodbye!`);
};

// Child class that doesn’t pass `age`
function Student(name, gpa) {
  // Calls Person constructor with `name` and leaves `age` undefined
  Person.call(this, name);
  this.gpa = gpa;
}

// Duplicate functionality of parent
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Override sayHello method in Student
Student.prototype.sayHello = function () {
  console.log(`Hi, I'm ${this.name} with a ${this.gpa} GPA!`);
};

// Test the setup
let bob = new Student('Bob', 3.5);
let joe = new Person('Joe', 25);

bob.sayHello(); // Uses Student's sayHello
bob.sayGoodbye(); // Uses inherited sayGoodbye

joe.sayHello(); // Uses Person's sayHello with age
joe.sayGoodbye(); // Uses Person's sayGoodbye

console.log(bob); // Person { name: "Bob", age: undefined, gpa: 3.5 }
console.log(joe); // Person { name: "Joe", age: 25 }
