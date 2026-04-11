// let smallimg = document.getElementsByClassName("oldImg");

// for(let i =0; i<smallimg.length;i++){
//     smallimg[i].src = "assets/spiderman_img.png" ;
//     console.log(`value of img no. ${i} is changed`);
// }

// let n = document.getElementsByTagName("p");

// for(let i=0 ; i<n.length; i++){
//     n[i].style.color = "red";
//     console.log(`value of index ${i} changed`);
// }

// let css = document.querySelector("body");
// css.style.backgroundColor = "black";
// css.style.color = "white";
// css.style.fontFamily = "Arial";
// css.style.textAlign = "center";
// css.style.padding = "20px";
// css.style.margin = "20px";
// css.style.border = "2px solid white";
// css.style.borderRadius = "10px";
// console.log("body css changed");

// let h1 = document.querySelector("h1");
// h1.style.fontSize = "50px";
// h1.style.textShadow = "2px 2px 5px red";
// console.log("h1 css changed");

// let h2 = document.querySelector("h2");
// h2.style.fontSize = "30px";
// h2.style.textShadow = "1px 1px 3px red";
// console.log("h2 css changed");

// let d = document.querySelector("#description");
// d.style.fontSize = "20px";
// d.style.textShadow = "1px 1px 2px red";
// console.log("description css changed");

// console.dir(document.querySelector("div a")) --> to get a single tag element

// console.dir(document.querySelectorAll("div a"))  --> to get all tags 


let links = document.querySelectorAll(".box a");

for( link of links){
    link.style.color = "green";
}
