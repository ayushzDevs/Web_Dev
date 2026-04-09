let arr = [ 1,2,3,4,5,6];

// function print(el){
//     console.log(el);
// }
// arr.forEach(print);




// or

// arr.forEach(function(el){
//     console.log(el);
// });


// or

arr.forEach(el => console.log(el));





let ar = [{
    name: 'john',
    age: 30
},{
    name: 'doe',
    age: 25
},{
    name: 'smith',
    age: 35
},{
    name: 'jane',
    age: 28
}];


// ar.forEach(em=> console.log(em));

ar.forEach(em=> console.log(em.name));