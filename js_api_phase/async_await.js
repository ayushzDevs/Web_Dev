// async function greet() {
//     throw "404 page not found";
//     // abc.abc();
//     return "Hello";
// }

// greet()
// .then((res)=>{
//     console.log("greeted successfully")
//     console.log("Result was: ", res);

// })

// .catch((err)=>{
//     console.log("Error in greeting : ", err);
// })

// let demo = async()=>{
//     return 5;
// }





function getnum(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10) +1;
            console.log(num);
            resolve();
        }, 1000);
    })
}


async function demo(){
    await getnum();
    await getnum();
    await getnum();
    await getnum();
    await getnum();

}







