let favourite = "avatar";

let user = prompt("guess the movie").toLocaleLowerCase();

while((favourite!=user)&&(user!="quit")){
    console.log("wrong guess try again");
    user = prompt("guess the movie again").toLocaleLowerCase();
    while(user==favourite){
        console.log("congo right guess");
        break;
    
}


}


