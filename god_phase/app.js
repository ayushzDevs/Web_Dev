let i = document.querySelector("#text");
let o = document.querySelector("#output");


i.addEventListener("input",((e)=>{
console.log(e.target.value);
o.innerText = e.target.value;    
}));


