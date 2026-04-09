let arr = [1,2,3,4,5,6,7,8,9,10];

let minimum = Math.min(...arr);
console.log(minimum);

let maximum = Math.max(...arr);
console.log(maximum);

let odd = [1,3,5,7,9];
let even = [2,4,6,8,10];

let combined = [...odd,...even];
console.log(combined);

let data = {
    email:"john@example.com",
    password:"123456"
};

let newdata = {...data, id : 123};
console.log(newdata);