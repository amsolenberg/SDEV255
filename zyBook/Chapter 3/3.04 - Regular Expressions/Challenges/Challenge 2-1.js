// Write a statement to display the year from the regular expression match in result.
// Note: The given date is in year, month, day order.

const re = /(\d+)\/(\d+)\/(\d+)/;
const date = "1991/10/22"; // Code will also be tested with value "17/8/6"
// const date = "17/8/6"
const result = re.exec(date);

console.log(result[1]);