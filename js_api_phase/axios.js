let url = "https://catfact.ninja/fact";
let btn = document.querySelector("#show1");

let facts = document.querySelectorAll("#facts li");

async function getfacts(){
    try{
        let res = await axios.get(url);
        return res.data.fact;

        let res2 = await axios.get(url);
        return res2.data.fact;

        let res3 = await axios.get(url);
        return res3.data.fact;

        let res4 = await axios.get(url);
        return res4.data.fact;
        
    }
    catch(e){
        console.log(`error : ${e.message}`)
    }
}



btn.addEventListener("click", async function(){
    console.log("button clicked")
    
    try{
        for(fact of facts){
            let res = await getfacts();
            // fact.append(res);
            fact.innerText = res;
        }
    }
    catch(e){
        console.log(`error : ${e.message}`)
    }
})



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
