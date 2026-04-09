let arr = [11,2,3,4,5,6,7,8,9,10];

// let max = -1;

// for(let i=0; i<arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     }
// }

// console.log(max);

let result = arr.reduce((max,el)=>{
    if(el>max){
        return el;
    }
    else{
        return max;
    }
});

console.log(result);