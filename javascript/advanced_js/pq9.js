let arr = [10,100,200,110,200,500,5,150];

// let check = arr.every((el)=>{
//     if(el%10==0){
//         return "all numbers are multiples of 10";;
//     }
//     else{
        
//         console.log("no all numbers are not multiples of 10");

//     }
// })

// console.log(check);

let minimum = arr.reduce((min,el)=>{
    if(min>el){
        return el;

    }
    else{
        return min;
    }
});

console.log(minimum);