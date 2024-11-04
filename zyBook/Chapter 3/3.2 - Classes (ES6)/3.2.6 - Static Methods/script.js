// Define a class named StringOps with static methods for string operations
class StringOps {
  // Static method to check if a string is entirely lowercase
  // Takes a string `str` as an argument and returns true if all characters are lowercase, false otherwise
  static isLowerCase(str) {
    return str.toLowerCase() === str; // Compares the lowercase version of `str` to `str` itself
  }

  // Static method to count occurrences of a specified character in a string
  // Takes a string `str` and a character `char` as arguments
  static countChar(str, char) {
    let count = 0; // Initialize count to zero
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
      // If the character at position `i` matches `char`, increment the count
      if (str.charAt(i) === char) {
        count++;
      }
    }
    return count; // Return the final count of `char` in `str`
  }
}

// Test cases for the static methods
console.log(StringOps.isLowerCase('abc'));          // Expected output: true, since 'abc' is lowercase
console.log(StringOps.isLowerCase('zyBooks'));      // Expected output: false, since 'zyBooks' has uppercase letters
console.log(StringOps.countChar('zyBooks', 'o'));   // Expected output: 1, as 'o' appears once in 'zyBooks'
