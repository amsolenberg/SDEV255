let data = {date: new Date("2010-10-10")};
console.log(data);

let json = JSON.stringify(data);
console.log(json);

console.log(JSON.parse(json));

console.log(JSON.parse(json, function (k, v) {
    if (k == "date") {
        return new Date(v);
    }
    return v;
}))
