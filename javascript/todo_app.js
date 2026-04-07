let todo = [];

let req = prompt("Please enter your request").toLocaleLowerCase();
console.log(req);

while(true){
    if(req == "quit"){
        console.log("Exiting the app...");
        break;
    }

    if (req == "list"){
        console.log("**********");
        for(task of todo){
            console.log(task);
        }
        console.log("**********");
    }

    else if(req == "add"){
        let new_task = prompt("Enter the new task");
        todo.push(new_task);
        console.log(`${new_task} added to the list`);
    }

    else if(req == "delete"){
        let index = parseInt(prompt("enter the index you want to delete"));
        if(index<todo.length && index>=0){
            let deleted = todo.splice(index,1);
            console.log(`${deleted} deleted from the list`);
        }
    }
    else{
        console.log("Invalid request");
    }
    req = prompt("Please enter your request").toLocaleLowerCase();

}