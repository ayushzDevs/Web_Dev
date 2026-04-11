let p1 = document.createElement("p");
p1.innerText = "This is a paragraph created using JavaScript.";
p1.classList.add("class1");
document.querySelector("body").append(p1);

let h3 = document.createElement("h3");
h3.innerText = "i am blue";
h3.classList.add("class2");
document.querySelector("body").prepend(h3);

let d = document.createElement("div");
d.innerHTML = "<h1> i am in a div</h1> <p> mee too </p>";
d.classList.add("class3");
document.querySelector("body").append(d);
// document.querySelector("body").prepend(d);




// let div = document.createElement("div");
// let h1 = document.createElement("h1");

// let p2 = document.createElement("p");

// h1.innerText = "i am another div";
// p2.innerText = "mee too";

// div.append(h1);
// div.append(p2);

// div.classList.add("class3");
// document.querySelector("body").append(div);