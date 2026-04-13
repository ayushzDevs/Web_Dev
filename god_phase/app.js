let form = document.querySelector(".X");
form.addEventListener("submit",((event)=>{
    event.preventDefault();

    
//     let username = form.querySelector(".U").value;
//     let password = form.querySelector(".P").value;

//     console.dir(form);

//     alert(`Welcome ${username}`);
}));

let u = document.querySelector(".U");

u.addEventListener("change",((e)=>{
    console.log(`event changed , final value is : ${e.target.value} `);
}));

u.addEventListener("input", function(){
    console.log(`event changed , new value added is : ${this.value} `);
})