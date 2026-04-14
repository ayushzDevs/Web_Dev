
let start = document.querySelector(".start");
let buttons = document.querySelectorAll(".btn");
let h3 = document.querySelector("h3");
let cont = document.querySelector(".container");
let btns = ["pink","blue","green","yellow"];

let started = false;
let level = 0;

let gamesequence = [];
let usersequence = [];


// checking sequence function
function checksequence(idx){
    console.log(`current level: ${level}`);

    if(usersequence[idx]==gamesequence[idx]){
        if(usersequence.length == gamesequence.length){
            setTimeout(levelup,1000);
            
        }
    }
    else{
        h3.innerText = "game over, click the stop button to startover again";
        gamesequence = [];
        usersequence = [];
        level = 0;
        console.log("wrong");
    }
}


// btn flash function for game automatic flash
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 128);

}


// btn flash function for user click
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 128);

}


// level up function
function levelup(){
    usersequence = [];
    level++;
    h3.innerText = `level ${level}`;
    let randomidx = Math.floor(Math.random() * 4);
    let randombtn = btns[randomidx];
    let randombtncl = document.querySelector(`.${randombtn}`)

    // console.log(randomidx);
    // console.log(randombtn);
    // console.log(randombtncl);

    gamesequence.push(randombtn);
    console.log(gamesequence);

    gameflash(randombtncl);

}


// button press function
function btnpress(btn){
    console.log(btn);
    let bt = btn.classList[1];
    console.log(bt);
    userflash(btn);

    usercolor = btn.getAttribute("id");
    usersequence.push(usercolor);
    console.log(usersequence);

    checksequence(usersequence.length-1);
}


// start game
start.addEventListener("click",function(){
    started = true;
    if(started == true){
        console.log("game started");
        levelup();

    }



    // replace start button with stop button
    let nb = document.createElement("button");
    nb.innerText = "Stop";
    nb.classList.add("start");
    start.parentNode.replaceChild(nb,start);


    // button press event listener
    for(btn of buttons){
        btn.addEventListener("click",function(){
            btnpress(this);
        });
        }

    




    // stop game
    nb.addEventListener("click",function(){
        started = false;

        if(started == false){
            level = 0;
            console.log("game stopped");
            h3.textContent = "click the button to start";
            nb.parentNode.replaceChild(start,nb);
        }
        
    })
    

        
    
})







