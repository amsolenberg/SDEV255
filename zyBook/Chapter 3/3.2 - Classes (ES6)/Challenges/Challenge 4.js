// Create a Gerbil class that inherits from Animcal class.
// The constructor should take two arguments and initialize the properties type from Animal and age from Gerbil.
// Create a toString() method that overrides Animal's toString() method and returns the animal's types and age
//      properties, separated by a comma.

// Define an Animal class with a type property and a method for string representation
class Animal {
  // Constructor to initialize the Animal instance with a type
  constructor(type) {
    this.type = type; // Type of the animal (e.g., mammal, reptile)
  }

  // Instance method to create a string representation of the animal
  // Returns a formatted string indicating the animal's type
  toString() {
    return `type is ${this.type}`;
  }
}

// Define a Gerbil class that extends Animal, adding an age property and overriding toString
class Gerbil extends Animal {
  // Constructor to initialize the Gerbil instance with a type and age
  constructor(type, age) {
    super(type); // Call the parent class (Animal) constructor to set the type
    this.age = age; // Age of the gerbil
  }

  // Override the toString method to include both type and age for a Gerbil instance
  // Returns a formatted string with the gerbil's type and age
  toString() {
    return `${this.type},${this.age}`;
  }
}
