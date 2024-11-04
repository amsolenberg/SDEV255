// Define an array of words to check for pattern matches
let words = ['ban', 'babble', 'make', 'flab'];

// Regular expression to search for the substring "ab" in each word
let re = /ab/;

// Iterate over each word in the words array
words.forEach(function (word) {
  // Test if the current word contains the pattern defined in `re`
  if (re.test(word)) {
    // If the word matches the pattern, print a message indicating a match
    console.log(`${word} matches!`);
  }
});
