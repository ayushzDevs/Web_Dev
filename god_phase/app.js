let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    console.log(this.innerText);
    let randomcolor = getrandomcolor();
    this.style.backgroundColor = randomcolor;
})

function getrandomcolor(){
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    return `rgb(${red},${green},${blue})`;
}