// Define a StringOps class with static properties and methods for string operations
class StringOps {
  // Static property to describe the class purpose
  static description = 'String operations';

  // Static method to check if a string is entirely lowercase
  // Returns true if the input string `str` is all lowercase, otherwise false
  static isLowerCase(str) {
    return str.toLowerCase() === str;
  }

  // Static method to count occurrences of a specified character in a string
  // Takes a string `str` and a character `char` as arguments
  // Iterates over `str` and increments `count` each time `char` is found
  static countChar(str, char) {
    let count = 0; // Initialize count to zero
    for (let letter of str) {
      // Iterate over each character in the string
      if (letter === char) {
        // If the current character matches `char`
        count++; // Increment the count
      }
    }
    return count; // Return the final count of `char` in `str`
  }
}

// Display the class description using the static property
console.log(StringOps.description); // Expected output: "String operations"

// Test the isLowerCase method with lowercase and mixed-case strings
console.log(StringOps.isLowerCase('abc')); // Expected output: true, as 'abc' is all lowercase
console.log(StringOps.isLowerCase('zyBooks')); // Expected output: false, as 'zyBooks' has uppercase letters

// Test the countChar method with the string 'zyBooks' to count occurrences of 'o'
console.log(StringOps.countChar('zyBooks', 'o')); // Expected output: 1, as 'o' appears once in 'zyBooks'
