const student ={
    name : "ayush",
    marks : 90,
    prop : this,
    getname : function(){
        console.log(this);
        return this.name;
    },
    getmarks : () => {
        console.log(this);
        return this.marks;
    },
    getinfo1 : function(){
        setTimeout(() => {
            console.log(this); //student object
        }, 2000);
    },
    getinfo2 : function(){
        setTimeout(function(){
            console.log(this); // window object
        }, 2000);
    }
};

student.getinfo1();
student.getinfo2();