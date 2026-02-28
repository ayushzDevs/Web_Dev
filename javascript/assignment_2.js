let quarter = {
    Quarter_1: ["January", "February" , "march"],
    Quarter_2: ["April", "May", "June"],
    Quarter_3: ["July", "August", "September"],
    Quarter_4: ["October", "November", "December"]
};

let q = prompt("enter a number between 1 to 4")
switch(q){
    case "1" :
        console.log(quarter.Quarter_1);
        break;
    case "2":
        console.log(quarter.Quarter_2);
        break;
    case "3":
        console.log(quarter.Quarter_3);
        break;
    case "4":
        console.log(quarter.Quarter_4);
        break;
}

alert("Please check the console for the answer")