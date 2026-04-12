let form = document.querySelector(".X");
form.addEventListener("submit",((event)=>{
    event.preventDefault();

    
    let username = form.querySelector(".U").value;
    let password = form.querySelector(".P").value;

    console.dir(form);

    alert(`Welcome ${username}`);
}));
