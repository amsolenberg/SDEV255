function getPassingGrades(grades) {
    function isPassing(number) {
        return number >= 73;
    }
    return grades.filter(isPassing);
}

const grades = getPassingGrades([73.1, 86.4, 62.1, 59.6, 88.8, 99.9]);
console.log(`Passing Grades: ${grades}`);