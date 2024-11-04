// Array of post strings to check for pattern matches
let posts = [
  'The starting time was 6pm.',
  'If the 2nd string QB gets hurt, they have no starting QB.',
  'My email is sis1@yahoo.com. Last are first.',
  'Stare into the abyss 1 time.',
  '90210 for Beverly Hills. Thick as TAR.',
];

// Regular expression to match lines with:
// - One or more digits (`\d+`)
// - Any characters following the digits (`.*`)
// - The letters "s", "t", "a", and "r" in sequence, potentially with spaces between them and in any case (`s\s?t\s?a\s?r` with the `i` flag for case insensitivity)
let re = /\d+.*s\s?t\s?a\s?r/i;

// Loop through each line in the posts array
posts.forEach(function (line) {
  // Test if the current line matches the regular expression
  if (re.test(line)) {
    // If there's a match, output the line to the console
    console.log(line);
  }
});
