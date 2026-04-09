
// let num  = [1,2,3,4,5];

// let newArr = num.map((el) => {
//     return el * 2;
// });



// let students = [
//     {
//         name: 'john',
//         age: 30,
//         grade: 85
//     },
//     {
//         name: 'doe',
//         age: 25,
//         grade: 90       
//     },
//     {
//         name: 'smith',
//         age: 35,
//         grade: 80
//     },
//     {
//         name: 'jane',
//         age: 28,
//         grade: 95
//     }
// ];

// let gpa = students.map((el)=>{
//     return Math.round(el.grade/10 * 10) / 10;
// })



let nums = [1,2,3,4,5,6];

let evenNums = nums.filter((el) => {
    return el % 2 === 0;
});

console.log(evenNums);