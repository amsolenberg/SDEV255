// Write a statement that creates a RegExp object that remembers 
//      the title and first name, but does not remember the last name.
// Using the RegExp object's exec() method, assign the result variable 
//      with the remembered title and first name of the string userName.

const userName = "Dr. Greg House"; // Code will also be tested with "Mr. Howard Wolowitz"

const re = /(\w+\.)\s(\w+)/;

result = re.exec(userName);

console.log(result[1] + " " + result[2]); // Output: "Dr. Greg"