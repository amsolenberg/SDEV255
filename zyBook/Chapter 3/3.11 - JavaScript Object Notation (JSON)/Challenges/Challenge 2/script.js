/** Assign jsonStructure with the parsed value of the stringData variable. Then, assign 32 to the points property in
 * jsonStructure and assign stringData with the stringified version of jsonStructure.
 */

let stringData = '{ "name": "Lebron James", "height": { "ft": 6, "in": 8 }, "points": 26, "position": "Shooting guard" }';
console.log(stringData);

let jsonStructure = JSON.parse(stringData);
console.log(jsonStructure);

jsonStructure.points = 32;
console.log(jsonStructure);

stringData = JSON.stringify(jsonStructure);
console.log(stringData);