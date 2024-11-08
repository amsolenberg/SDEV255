/** Assign jsonObject with a JSON object with properties: userName (a string), userAge (a number) and studentSiblings
 *  (an array of strings). Note: The content of the properties doesn't matter.
 */

let jsonObject;
let data = '{"userName":"user1", "userAge":10, "studentSiblings":["joe","bob","sally","sue"]}'
jsonObject = JSON.parse(data);
console.log(jsonObject.userName)