let array = ["january","july","march","august"];
new_arr = array.splice(0,2);
console.log(array);
console.log(new_arr);

array.splice(0,0,"july","june");
console.log(array);

let lang = ["c","c++","html","javascript","python","java","c#","sql"];
console.log(lang.reverse().indexOf("javascript"));