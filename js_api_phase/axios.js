let url = "https://catfact.ninja/fact";

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

let btn = document.querySelector("#show");

let facts = document.querySelectorAll("#facts li");

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