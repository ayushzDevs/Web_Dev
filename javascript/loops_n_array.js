// let fruits = ["mango","banana","grapes","orange","apple"];
// fruits.unshift("kiwi");
// fruits.push("papaya");
// for(let i=0; i<fruits.length;i++){
//     console.log(i,fruits[i]);
// }


// nested loops with nested arrays

let heroes = [["superman","clark"],["batman","bruce"],["spiderman","peter"]];

for(let i =0; i<heroes.length; i++){
    console.log(`list #${i}`);
    for(let j = 0; j<heroes[i].length; j++){
        console.log(heroes[i][j]);
    }
}