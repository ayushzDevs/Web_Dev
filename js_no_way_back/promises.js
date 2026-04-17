// function savetodb(data , resolve , reject){
//     let internetspeed = Math.floor(Math.random()*10) +1;

//     if(internetspeed>4){
//             resolve();
//     }
//     else{
//         reject();
//     }


// }



// callback hell

// savetodb("ayush",
// ()=>{
//     console.log("resolve1 : data saved resolvefully" );

//     savetodb("chakraborty",
//         ()=>{
//         console.log("resolve2 : data saved resolvefully" );

//         savetodb("jujutsu",
//             ()=>{
//             console.log("resolve3 : data saved resolvefully" );

//             savetodb("kaisen",
//                 ()=>{
//                 console.log("resolve4 : data saved resolvefully ");
//             },
//             ()=>{
//                 console.log("reject1 : data could not be saved");
//             })
//         },
//         ()=>{
//             console.log("reject2 : data could not be saved");

//         })
//     },
//     ()=>{
//         console.log("reject3 : data could not be saved");
//     })
// },
// ()=>{
//     console.log("reject4 : data could not be saved");
// });






// resolve to callback hell

function savetodb(data){

        return new Promise((resolve , reject)=>{

                let internetspeed = Math.floor(Math.random()*10) +1;
                if(internetspeed>4){
                    resolve("resolve : data was saved resolvefully");
                }
                else{
                    reject("reject : data could not be saved");
                }
    })
}


// then() and catch() methods

// let request = savetodb("ayush"); //this is a promise object

// request.then(()=>{
//     console.log("resolve1 : data saved resolvefully" );
//     console.log(request);
// })

// .catch(()=>{
//     console.log("reject1 : data could not be saved");
//     console.log(request);
// })






// then() and catch() compact use

// savetodb("ayush")
// .then(()=>{
//     console.log("resolve1 : data saved resolvefully" );
//     console.log();
// })

// .catch(()=>{
//     console.log("reject1 : data could not be saved");
//     console.log();
// })




// promise chaining

savetodb("ayush")
.then(() =>{
    console.log("resolve1 : data saved" );
    return savetodb("chakraborty");
})

.then(()=>{
    console.log("resolve2 : data saved" );
    return savetodb("jujutsu");
})
.then(()=>{
    console.log("resolve3 : data saved" );
})

.catch(()=>{
    console.log("reject1 : data could not be saved");
})