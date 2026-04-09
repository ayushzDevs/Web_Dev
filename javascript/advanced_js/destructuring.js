// let names = ["Ayush","Rohit","Satyarth","Shivam"];

// let [winner , runnerup , secondrunnerup] = [names[0],names[1],names[2]];

// console.log(winner,",",runnerup, ",",secondrunnerup);

const student = {
    name : "Ayush",
    age : 20,
    marks : 90,
    roll : 123,
    sem : 4,
    city : "Delhi",
    subjects :["Maths","Physics","Chemistry"],
    username : "ayush123",
    password : "ayush@123"


}

let {username : user , password: pass} = student;

console.log(user,pass);