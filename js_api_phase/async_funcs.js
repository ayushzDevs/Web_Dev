async function greet() {
    throw "404 page not found";
    // abc.abc();
    return "Hello";
}

greet()
.then((res)=>{
    console.log("greeted successfully")
    console.log("Result was: ", res);

})

.catch((err)=>{
    console.log("Error in greeting : ", err);
})