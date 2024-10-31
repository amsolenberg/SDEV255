const strings = ['one', 'two words', 'three', 'four five'];

function getSingleWords(stringArray) {
    const noSpace = function(element) {
        return element.indexOf(" ") === -1;
    };

    return stringArray.filter(noSpace);
}

function getStartingWith(stringArray, startString) {
    function startsWith(string) {
        return string.indexOf(startString) === 0;
    }

    return stringArray.filter(startsWith);
}

console.log(getSingleWords(strings));

console.log(getStartingWith(strings, "t"));