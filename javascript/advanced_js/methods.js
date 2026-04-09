const calculator = {
    add : function(a,b){
        return a+b;
    },
    sub : function(a,b){
        return a-b;
    },
    mul : function(a,b){
        return a*b;
    },
    div : function(a,b){
        return a/b;
    }
};

console.log(calculator.add(2,3));
console.log(calculator.sub(2,3));
console.log(calculator.mul(2,3));
console.log(calculator.div(2,3));