const students = {
    "Ayush" :{
        marks : 90,
        grade : "A"
    },
    "Rahul" : {
        marks : 80,
        grade : "B"
    },
    "Sita" : {
        marks : 85,
        grade : "A"
    }

}

// console.log(`marks of Ayush is ${students["Ayush"].marks}, and grade is ${students["Ayush"].grade}`)
// console.log(`marks of Rahul is ${students["Rahul"].marks}, and grade is ${students["Rahul"].grade}`)
// console.log(`marks of Sita is ${students["Sita"].marks}, and grade is ${students["Sita"].grade}`)

console.log(`marks of Ayush is ${students.Ayush.marks}, and grade is ${students.Ayush.grade}`)
console.log(`marks of Rahul is ${students.Rahul.marks}, and grade is ${students.Rahul.grade}`)
console.log(`marks of Sita is ${students.Sita.marks}, and grade is ${students.Sita.grade}`)
