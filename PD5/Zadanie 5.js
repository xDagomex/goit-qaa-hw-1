function doubleNumbers(board) {
    return board.map(number => number * 2);
}

const tab = [1, 2, 3, 5, 8, 13, 21, 34, 55];
const doubledTab = doubleNumbers(tab);
console.log(tab);
console.log(doubledTab);

//////////////////////////////////////////////////

function getStudentNames(students) {
    return students.map(student => student.name);
}
const students = [
    {name: "Bonifacy", year: "1", score: 42},
    {name: "Gus", year: "1", score: 96},
    {name: "Jaca", year: "3", score: 21},
    {name: "Pawel", year: "5", score: 37},
    {name: "Stan", year: "5", score: 31},
];

const studentNames = getStudentNames(students);
console.log(students);
console.log(studentNames);
