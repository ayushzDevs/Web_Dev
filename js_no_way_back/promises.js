// function savetodb(data , success , failure){
//     let internetspeed = Math.floor(Math.random()*10) +1;

//     if(internetspeed>4){
//             success();
//     }
//     else{
//         failure();
//     }


// }

// savetodb("ayush",
// ()=>{
//     console.log("success1 : data saved successfully" );

//     savetodb("chakraborty",
//         ()=>{
//         console.log("success2 : data saved successfully" );

//         savetodb("jujutsu",
//             ()=>{
//             console.log("success3 : data saved successfully" );

//             savetodb("kaisen",
//                 ()=>{
//                 console.log("success4 : data saved successfully ");
//             },
//             ()=>{
//                 console.log("failure1 : data could not be saved");
//             })
//         },
//         ()=>{
//             console.log("failure2 : data could not be saved");

//         })
//     },
//     ()=>{
//         console.log("failure3 : data could not be saved");
//     })
// },
// ()=>{
//     console.log("failure4 : data could not be saved");
// });






// resolve to callback hell

function savetodb(data){

        return new Promise((success , failure)=>{

                let internetspeed = Math.floor(Math.random()*10) +1;
                if(internetspeed>4){
                    success("success : data was saved successfully");
                }
                else{
                    failure("failure : data could not be saved");
                }
    })
}

// savetodb("ayush")