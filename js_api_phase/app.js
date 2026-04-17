let h1 = document.querySelector("h1");


function changecolor(color,delay){

      return new Promise((resolve, reject) => {
            setTimeout(()=>{
                let num = Math.floor(Math.random()*5) +1;
                if(num>3){
                    reject("color not changed");
                }

                h1.style.color = color;
                console.log(`color changed to ${color}`);
                resolve("color changed");
            },delay)


      });

}



// async await efficiency coding
async function demo(){
    try{
        await changecolor("red",1000);
        await changecolor("orange",1000);
        await changecolor("cyan",1000);
        await changecolor("yellow",1000);
        await changecolor("green",1000);
        await changecolor("blue",1000);
        await changecolor("purple",1000);
        await changecolor("pink",1000);
        await changecolor("brown",1000);
        await changecolor("black",1000);
    }
    catch(error){
        console.log("error is caught");
        console.log("error is : ",error);
    }


    let a = 5;
    console.log(a);
    console.log("new number = ",a+5)
}

demo();