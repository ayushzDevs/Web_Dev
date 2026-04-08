const student = {
    name : "Ayush",
    age : 21,
    marks : 98,
    city : "Kolkata"
}

student.city = "Delhi";
student.marks = [99 , 98, 90];

delete student.marks;
console.log(student)