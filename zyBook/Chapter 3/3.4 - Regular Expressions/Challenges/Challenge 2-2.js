// Add parentheses to the regular expression to remember the street name (which is: Amp St) 
//      and apartment number (which is: Apt 57), but not remember the street number.

const address = "613 Amp St, Apt 57"; // Code will also be tested with "42 Jam St, Apt 3"

const re = /\d+\s(\w+\s\w+),\s(\w+\s\d+)/;

const result = re.exec(address);
console.log(result[1] + " " + result[2]);