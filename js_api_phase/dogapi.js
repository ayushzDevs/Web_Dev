let url2 = "https://dog.ceo/api/breeds/image/random";
let btn2 = document.querySelector("#show2");

let image = document.querySelectorAll("#image img");


btn2.addEventListener("click", async function(){
    console.log("button clicked")
    
    try{
        for(fact of image){
            let link = await getimage();
            fact.setAttribute("src", link);
            fact.style.width = "200px";
        }
    }
    catch(e){
        console.log(`error : ${e.message}`)
    }
})

async function getimage(){
    try{
        let link = await axios.get(url2);
        return link.data.message;
    }
    catch(e){
        console.log(`error : ${e.message}`)
    }
}
