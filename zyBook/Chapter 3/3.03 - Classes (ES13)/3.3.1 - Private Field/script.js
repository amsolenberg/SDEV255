// Define a City class with properties for name, state, founding year, and methods to get city info and age
class City {
  // Private field for the city's founding year
  #foundingYear;

  // Constructor to initialize the City instance with name, state, and founding year
  constructor(name, state, foundingYear) {
    this.name = name; // Name of the city
    this.state = state; // State where the city is located
    this.#foundingYear = foundingYear; // Private founding year, accessible only within the class
  }

  // Instance method to create a string representation of the city
  // Returns a formatted string with the city's name, state, and founding year
  toString() {
    return `${this.name}, ${this.state} (${this.#foundingYear})`;
  }

  // Private method to get the current year
  // Returns the current year based on the system date
  #getCurrentYear() {
    const today = new Date();
    return today.getFullYear();
  }

  // Public method to calculate the city's age
  // Uses the current year and founding year to calculate the age, returning the age in years
  getAge() {
    return `${this.#getCurrentYear() - this.#foundingYear} years old`;
  }
}

// Create an instance of City with name, state, and founding year
let myCity = new City('Norfolk', 'Virginia', 1682);

// Log the string representation of myCity to the console
console.log(myCity.toString()); // Expected output: "Norfolk, Virginia (1682)"

// Log the age of myCity to the console
console.log(myCity.getAge()); // Expected output: "342 years old"
