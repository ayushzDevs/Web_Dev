const some = require('./script2');

console.log(some.sum(1, 2));
console.log(some.mul(3, 4));
console.log(some.g);
console.log(some.pi);

const fruits = require('../fruits');

// console.log(fruits);

for(fruit of fruits){
    console.log(fruit);
}