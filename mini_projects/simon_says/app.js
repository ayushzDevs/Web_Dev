
// let start = document.querySelector(".start");
// let buttons = document.querySelectorAll(".btn");
// let h3 = document.querySelector("h3");
// let cont = document.querySelector(".container");
// let btns = ["pink","blue","green","yellow"];

// let started = false;
// let level = 0;

// let gamesequence = [];
// let usersequence = [];


// // checking sequence function
// function checksequence(idx){
//     console.log(`current level: ${level}`);

//     if(usersequence[idx]==gamesequence[idx]){
//         if(usersequence.length == gamesequence.length){
//             setTimeout(levelup,1000);
            
//         }
//     }
//     else{
//         h3.innerHTML = `game over, your highest level was <b>${level}</b> <br> click the stop button to startover again`;
//         gamesequence = [];
//         usersequence = [];
//         level = 0;
//         console.log("wrong");
//     }
// }


// // btn flash function for game automatic flash
// function gameflash(btn){
//     btn.classList.add("flash");
//     setTimeout(function(){
//         btn.classList.remove("flash");
//     }, 128);

// }


// // btn flash function for user click
// function userflash(btn){
//     btn.classList.add("userflash");
//     setTimeout(function(){
//         btn.classList.remove("userflash");
//     }, 128);

// }


// // level up function
// function levelup(){
//     usersequence = [];
//     level++;
//     h3.innerText = `level ${level}`;
//     let randomidx = Math.floor(Math.random() * 4);
//     let randombtn = btns[randomidx];
//     let randombtncl = document.querySelector(`.${randombtn}`)

//     // console.log(randomidx);
//     // console.log(randombtn);
//     // console.log(randombtncl);

//     gamesequence.push(randombtn);
//     console.log(gamesequence);

//     gameflash(randombtncl);
// }





// // button press function
// function btnpress(btn){
//     console.log(btn);
//     let bt = btn.classList[1];
//     console.log(bt);
//     userflash(btn);

//     usercolor = btn.getAttribute("id");
//     usersequence.push(usercolor);
//     console.log(usersequence);

//     checksequence(usersequence.length-1);
// }


// // start game
// start.addEventListener("click",function(){
//     started = true;
//     if(started == true){
//         console.log("game started");
//         levelup();

//     }



//     // replace start button with stop button
//     let nb = document.createElement("button");
//     nb.innerText = "Stop";
//     nb.classList.add("start");
//     start.parentNode.replaceChild(nb,start);


//     // button press event listener
//     for(btn of buttons){
//         btn.addEventListener("click",function(){
//             btnpress(this);
//         });
//         }

    




//     // stop and reset game
//     nb.addEventListener("click",function(){
//         started = false;

//         if(started == false){
//             level = 0;
//             console.log("game stopped");
//             h3.textContent = "click the button to start";
//             nb.parentNode.replaceChild(start,nb);
//         }
        
//     })

// })







let start = document.querySelector(".start");
let buttons = document.querySelectorAll(".btn");
let h3 = document.querySelector("h3");

let btns = ["pink","blue","green","yellow"];

let started = false;
let level = 0;

let gamesequence = [];
let usersequence = [];


// 🔍 CHECK SEQUENCE
function checksequence(idx){

    if(usersequence[idx] === gamesequence[idx]){

        if(usersequence.length === gamesequence.length){
            setTimeout(levelup, 1000);
        }

    } else {
        h3.innerHTML = `Game Over! Your highest level was <b>${level}</b><br>Click Start to play again`;
        reset();
    }
}


// GAME FLASH
function gameflash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    }, 150);
}


// USER FLASH
function userflash(btn){
    btn.classList.add("userflash");

    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 150);
}


// ⬆ LEVEL UP
function levelup(){
    usersequence = [];
    level++;

    h3.innerText = `Level ${level}`;

    let randomidx = Math.floor(Math.random() * 4);
    let randombtn = btns[randomidx];
    let randombtncl = document.querySelector(`.${randombtn}`);

    gamesequence.push(randombtn);

    console.log("Game Sequence:", gamesequence);

    gameflash(randombtncl);
}


// BUTTON PRESS
function btnpress(btn){

    let usercolor = btn.getAttribute("id");

    usersequence.push(usercolor);

    userflash(btn);

    console.log("User Sequence:", usersequence);

    checksequence(usersequence.length - 1);
}


// START / STOP BUTTON
start.addEventListener("click", function(){

    if(!started){
        // START GAME
        started = true;

        level = 0;
        gamesequence = [];
        usersequence = [];

        console.log("Game Started");

        levelup();

        start.innerText = "Stop";

    } else {
        // STOP GAME
        console.log("Game Stopped");

        reset();

        h3.innerText = "Click the button to start";

        start.innerText = "Start";
    }

});


// BUTTON EVENT LISTENERS
for(let btn of buttons){
    btn.addEventListener("click", function(){
        if(started){
            btnpress(this);
        }
    });
}


//  RESET FUNCTION
function reset(){
    started = false;
    gamesequence = [];
    usersequence = [];
    level = 0;
}


