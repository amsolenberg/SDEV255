// Define a regular expression to match any substring starting with "t", followed by any characters, and ending with "r"
let re = /t.+r/;

// Execute the regular expression on the given string
// This returns the first match as an array if found, or `null` if no match exists
let result = re.exec('Raise the bar high.');

// Check if the result is `null`, meaning no match was found
if (result === null) {
  console.log('No match.'); // Output "No match." if there was no match
} else {
  // If a match was found, access the matched substring at index 0 of the result array
  console.log(result[0]); // Output the matched substring
}
