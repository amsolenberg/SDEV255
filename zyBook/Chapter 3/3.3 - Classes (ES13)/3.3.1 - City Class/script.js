// Define a City class with properties for name and state and a method for HTML string representation
class City {
  // Public fields for storing the city's name and state
  name;
  state;

  // Constructor to initialize a City instance with a name and state
  constructor(name, state) {
    this.name = name; // Name of the city
    this.state = state; // State where the city is located
  }

  // Instance method to create an HTML-formatted string of the city name and state
  // Returns a formatted string with the city's name and state, separated by a non-breaking space
  toHTML() {
    return `${this.name},&nbsp;${this.state}`;
  }
}

// Create instances of City with name and state values
let city1 = new City('Austin', 'Texas');
let city2 = new City('Madison', 'Wisconsin');

// Log the HTML string representation of city1 to the console
console.log(city1.toHTML()); // Expected output: "Austin,&nbsp;Texas"
