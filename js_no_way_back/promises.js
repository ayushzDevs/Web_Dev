function savetodb(data , success , failure){
    let internetspeed = Math.floor(Math.random()*10) +1;

    if(internetspeed>4){
            success();
    }
    else{
        failure();
    }


}

savetodb("ayush",
()=>{
    console.log("success : data saved successfully" );
},
()=>{
    console.log("failure : data could not be saved");
})