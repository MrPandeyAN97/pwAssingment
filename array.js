const students=[
    {
        id:1,
        name: 'John',
        score:80,
        favouriteSubject:'math',
    },
    {
        id:2,
        name: 'ram',
        score:90,
        favouriteSubject:'english',
    },
    {
        id:3,
        name: 'sunny',
        score:50,
        favouriteSubject:'art',
    },
    {
        id:4,
        name: 'rakesh',
        score:99,
        favouriteSubject:'biography',
    },
    {
        id:5,
        name: 'jauntice',
        score:65,
        favouriteSubject:'science',
    },
];

console.log(students);

// map. add a value role:students to the array of students
//  const updatedStudents=students.map(function(student){
//     student.role="student";
//     return student;
//  });
// console.log(updatedStudents);

// filter. return array where score is >= 80 assing to highscore and console it

// const highScores=students.filter(function(student){
//     if(student.score>=90){
//         return student;
//     }
//     or
//     if(student.score>=80) return student;
//     or
//     return student.score>=80;
// });

// console.log(highScores);

// find specefic id in an array of students

// const speceficId=students.find(function(nana){
//     return nana.id===1;
// });

// console.log(speceficId);


// reduce. using reduce function find the avg score
// divide by the length of the array
// assing to averagescore and log

// const averageScore=students.reduce(function(scoresTotal,student){
    // console.log(student);

//     return scoresTotal+student.score;
// },0)/students.length;
// console.log(averageScore);

