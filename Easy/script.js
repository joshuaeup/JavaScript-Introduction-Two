'use strict';

// Object array of students
let students = [
    {
        firstName: "Angila",
        lastName: "Leister",
        age: 21
    },
    {
        firstName: "Clair",
        lastName: "Hansel",
        age: 25
    },
    {
        firstName: "David",
        lastName: "Byer",
        age: 18
    },
]

// Selected 2nd student
const student = students[1];

// Message to print to console 
const message = `Hello, my name is ${student.firstName} ${student.lastName} and I'm ${student.age} years old.`

// Log to console
console.log(message);