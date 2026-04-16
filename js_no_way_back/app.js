let h1 = document.querySelector("h1");


function changecolor(color,delay, nextcolor){
        
    setTimeout(()=>{
        h1.style.color = color;
        if(nextcolor) nextcolor();

    },delay)

}


changecolor("red",1000, ()=>{
    changecolor("orange",1000, ()=>{
        changecolor("cyan",1000 , ()=>{
            changecolor("yellow",1000, ()=>{
                changecolor("green",1000, ()=>{
                    changecolor("blue",1000, ()=>{
                        changecolor("purple",1000, ()=>{
                            changecolor("pink",1000, ()=>{
                                changecolor("brown",1000, ()=>{
                                    changecolor("black",1000, ()=>{
                                        console.log("All colors are done");
                                    })
                                })
                            })
                        })
                    })
                })
                
            })

        })
    })
})