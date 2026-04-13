let div = document.querySelector("div");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");

div.addEventListener("click", function(e){
    e.stopPropagation();

    console.log("div clicked");

});

ul.addEventListener("click", function(e){

    // e.stopPropagation();

    console.log("ul clicked");

});

// li.forEach(function(item){
//     item.addEventListener("click",((e)=>{
//         console.log("li clicked");
//         e.stopPropagation();
//     }))
// })

for(li of li){
    li.addEventListener("click",((e)=>{
        console.log("li clicked");
        e.stopPropagation();
    }))
};