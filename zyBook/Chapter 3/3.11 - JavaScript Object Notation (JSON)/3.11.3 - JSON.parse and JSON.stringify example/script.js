let bondStr = '{"name":"James","age":35}';
console.log(bondStr);

let bondObj = JSON.parse(bondStr);
console.log(`Happy birthday ${bondObj.name}`);

bondObj.age += 1;
bondStr = JSON.stringify(bondObj);
console.log(bondStr);

console.log(JSON.stringify({date: new Date("2001-01-01")}));