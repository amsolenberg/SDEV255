// Define an Angle class to represent an angle in radians and convert between radians and degrees
class Angle {
  // Constructor to initialize the Angle instance with a value in radians
  constructor(angleRadians) {
    this.radians = angleRadians; // Store the angle in radians
  }

  // Getter for degrees property
  // Converts the angle from radians to degrees when accessed
  get degrees() {
    return (this.radians * 180.0) / Math.PI; // Convert radians to degrees
  }

  // Setter for degrees property
  // Allows setting the angle in degrees, converting it to radians for storage
  set degrees(angleDegrees) {
    this.radians = (angleDegrees * Math.PI) / 180.0; // Convert degrees to radians
  }
}

// Create an Angle instance initialized with an angle of Math.PI radians (180 degrees)
let angle1 = new Angle(Math.PI);

// Log the angle in degrees (expected output: 180)
console.log(angle1.degrees);

// Set the angle to 270 degrees using the degrees setter
angle1.degrees = 270.0;

// Log the angle in radians (expected output: 4.71238898038469, which is 270 degrees in radians)
console.log(angle1.radians);
