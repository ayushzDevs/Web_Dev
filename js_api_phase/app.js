let h1 = document.querySelector("h1");


function changecolor(color,delay){

      return new Promise((resolve, reject) => {
            setTimeout(()=>{
                h1.style.color = color;
                resolve("color changed");
            },delay)


      });

}



// async await efficiency coding
async function demo(){
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

demo();