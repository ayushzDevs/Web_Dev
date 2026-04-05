// let msg = "       ayush     ";
// console.log(msg.trim());


// let password = prompt("set new password");
// let newpass = password.trim();
// console.log(newpass);

let strz = "ILoveCoding";
console.log(strz.indexOf("Love"));
console.log(strz.indexOf("Coding"));
console.log(strz.indexOf("Ayush")); // -1 because it is not present in the string   
console.log(strz.indexOf("o")); // 2 because it is the index of first occurrence of "o" in the string   


console.log("\n")

let newm = "I love javascript but not more than python   ";
console.log(newm.lastIndexOf("python")); // 36 because it is the index of last occurrence of "python" in the string   
console.log(newm.lastIndexOf("java")); // 7 because it is the index of last occurrence of "java" in the string   
console.log(newm.lastIndexOf("c++")); // -1 because it is not present in the string
console.log(newm.lastIndexOf("o")); // 29 because it is the index of last occurrence of "o" in the string

console.log("\n")

console.log(newm.toUpperCase().trim())

console.log(strz.slice(-8,-2))
console.log(strz.slice(5))
console.log(strz.slice(strz.length-1));

