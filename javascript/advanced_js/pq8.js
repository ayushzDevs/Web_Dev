let square = (n) => (n*n);
console.log(square(5));

let id = setInterval(() => {

    console.log("hello world")
    
}, 2000);

setTimeout(() => {
    clearInterval(id);  
}, 12000);