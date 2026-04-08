const max = prompt("enter the maximum number");

const random = Math.floor(Math.random() * max) + 1;
console.log(random);

let guess = prompt("enter your guess");

while(true){
    if(guess == "quit"){
        alert("user quit the game");
        break;
    }
    if(guess == random){
        alert("you win");
        break;
    }
    else if(guess < random){
        alert("guess is too small guess again");
        guess = prompt("enter your guess");
    }
    else{
        alert("guess is too large guess again");
        guess = prompt("enter your guess");
    }

}