let b = document.querySelector(".addd");
let t = document.querySelector("#todo-input");
let u = document.querySelector("ul");
let li = document.querySelector("li");

b.addEventListener("click",function(){

    let n = document.createElement("li");
    n.innerText = t.value;
    u.appendChild(n)

    let del_b = document.createElement("button");
    del_b.innerText = "Delete";
    del_b.classList.add("del");
    n.appendChild(del_b);
    t.value= "";
});

u.addEventListener("click",function(event){
    console.log("ul was clicked");
    if(event.target.classList.contains("del")){
        let li = event.target.parentElement;
        u.removeChild(li);
    }
});



