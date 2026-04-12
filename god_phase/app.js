let kb = document.querySelector('input');

kb.addEventListener('keyup', function(event){
    console.log(event.code);

    if(event.code === 'ArrowUp' || event.code === 'KeyU'){
        console.log("character moves forward");

    }
    else if(event.code =="ArrowDown" || event.code =="KeyD"){
        console.log("character moves backward");
    }
    else if(event.code =="ArrowLeft" || event.code =="KeyL"){
        console.log("character moves left");
    }
    else if(event.code =="ArrowRight"|| event.code =="KeyR"){
        console.log("character moves right");
    }

});