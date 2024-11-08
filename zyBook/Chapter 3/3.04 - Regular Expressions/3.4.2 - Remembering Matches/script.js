// Define a regular expression with two capturing groups:
// - `(B.+)`: Matches "B" followed by any number of characters (greedy match) and remembers this part
// - `'s (.+day)`: Matches "'s " followed by any number of characters ending in "day" and remembers this part
let re = /(B.+)'s (.+day)/;

// Execute the regular expression on the given string to find matches
// `exec()` returns an array where:
// - Index 0 contains the full matched string
// - Index 1 contains the first capturing group `(B.+)`
// - Index 2 contains the second capturing group `(.+day)`
let result = re.exec("When is Becky's birthday?");

// Log the full matched string (index 0)
console.log(result[0]); // Expected output: "Becky's birthday"

// Log the first capturing group, which matches "B" followed by any characters
console.log(result[1]); // Expected output: "Becky"

// Log the second capturing group, which matches any characters ending with "day"
console.log(result[2]); // Expected output: "birthday"
