/** Use a spacer function of JSON.stringify to use 6 consecutive underscores (_) for indentation, and display the result
 * on the console.
 * */

let jsonData = {"day": "Thursday", "date": {"year": 2015, "month": 2, "day": 12}, "time": {"hour": 11, "minute": 44}};

console.log(JSON.stringify(jsonData, null, "______"));