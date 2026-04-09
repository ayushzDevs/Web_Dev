function sum(...a){
    return a.reduce((acc,el)=>(acc+el),0);
}

console.log(sum(1,2,3,4,5));