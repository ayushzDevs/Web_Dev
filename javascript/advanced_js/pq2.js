function dice_roll(){
    let dice = Math.floor(Math.random() * 6) + 1;
    return dice;
}

console.log(dice_roll());