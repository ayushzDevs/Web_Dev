function hello(){
    console.log("Hello World");
}

function demo(){
    hello();
}

setTimeout(function(){
    console.log("calling demo function");
},1000);

setTimeout(function(){
    demo();
},5000);

setTimeout(function(){
    console.log("This is the end of the code");
},10000);

