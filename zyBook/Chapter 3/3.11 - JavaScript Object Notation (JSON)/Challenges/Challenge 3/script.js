/** Use a reviver function of JSON.parse to subtract 1 from year and assign jsonStructure with the result. */

let stringData = '{ "year": 2017, "month": 2, "day": 19, "hour": 9, "minute": 49 }';

let jsonStructure = JSON.parse(stringData, function (k, v) {
    if (k === "year") {
        return v - 1;
    }
    return v;
})

console.log(jsonStructure);