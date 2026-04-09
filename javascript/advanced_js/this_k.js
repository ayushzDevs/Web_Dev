const student = {
    name: "Ayush",
    age: 20,
    eng : 95,
    math : 98,
    sci : 88,
    avg(){
        let avg =  (this.eng + this.math + this.science)/3;
        return avg;
    }
};

console.log(student.avg());
