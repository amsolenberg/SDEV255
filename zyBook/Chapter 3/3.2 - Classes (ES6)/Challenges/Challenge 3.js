// Create a toString() method that returns the cat's name, color, and height properties, separated by forward slashes.
// Create a speak() static method that returns "Hello".

// Define a Cat class with properties for the cat's details and methods for string representation and speaking
class Cat {
  // Constructor to initialize the Cat instance with various attributes
  constructor(name, color, gender, height, weight, age) {
    this.name = name; // Name of the cat
    this.color = color; // Color of the cat's fur
    this.gender = gender; // Gender of the cat
    this.height = height; // Height of the cat
    this.weight = weight; // Weight of the cat
    this.age = age; // Age of the cat
  }

  // Instance method to create a string representation of the cat
  // Returns a formatted string containing the cat's name, color, and height
  toString() {
    return `${this.name}/${this.color}/${this.height}`;
  }

  // Static method for the Cat class to speak
  // Returns a greeting message ("Hello")
  static speak() {
    return `Hello`;
  }
}


// console.log(Cat.speak());