const sum = (a,b) => a+b;
const mul = (a,b) => a*b;
const g = 9.8;
const pi = 3.14;



let obj = {
    sum : sum,
    mul : mul,
    g : g,
    pi : pi
}

module.exports = obj;


// or we can directly export the object without creating a variable for it

// module.exports = {
//     sum,
//     mul,
//     g,
//     pi
// }


// or we can directly export the functions and variables without creating an object for it

// module.exports.sum = sum;
// module.exports.mul = mul;
// module.exports.g = g;
// module.exports.pi = pi;


// or we can directly export the functions and variables without creating an object for it

// exports.sum = sum;
// exports.mul = mul;
// exports.g = g;
// exports.pi = pi;