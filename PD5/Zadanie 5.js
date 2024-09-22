const doubleNumber = (numbers) => {
    numbers.map((number) => number *2)
    return doubledArray
}

const tab = [1, 2, 3, 5, 8, 13, 21, 34, 55];

doubleNumber(tab);

const students = [
    {name: "Bonifacy", year: "1", score: 42},
    {name: "Gus", year: "1", score: 96},
    {name: "Jaca", year: "3", score: 21},
    {name: "Pawel", year: "5", score: 37},
    {name: "Stan", year: "5", score: 31},
];
const name = students.map(student => student.name);
console.log(name);