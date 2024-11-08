/** Use a replacer array of JSON.stringify to return only the year, month, and day properties of jsonStructure, and
 * assign stringStructure with the result.
 */

let jsonStructure = {"year": 2013, "month": 4, "day": 19, "hour": 8, "minute": 38};

let stringStructure = JSON.stringify(jsonStructure, ["year", "month", "day"]);

console.log(stringStructure);

// Below is not part of the challenge, just trying other things.

stringStructure = JSON.stringify(jsonStructure, ["year", "month", "day"], 2);

console.log(stringStructure);
