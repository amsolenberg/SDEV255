// Create a getter for the Dog class called maxAge that returns 125% of age.
// Create a setter called maxAge that sets the age property to 80% of the given value.

// Define a Dog class with properties and methods for age management
class Dog {
  // Constructor to initialize the Dog instance with an age
  constructor(age) {
    this.age = age; // Set the initial age of the dog
  }

  // Getter method for maxAge
  // Returns the maximum age of the dog, calculated as 1.25 times the current age
  get maxAge() {
    return this.age * 1.25;
  }

  // Setter method for maxAge
  // Allows setting a new age indirectly by adjusting the provided max age to 80% of the given value
  set maxAge(age) {
    this.age = age * 0.8;
  }
}
