let url = "https://catfact.ninja/fact";

async function getfacts(){
    try{
        let res = await axios.get(url);
        console.log(res.data.fact)

        let res2 = await axios.get(url);
        console.log(res2.data.fact)

        let res3 = await axios.get(url);
        console.log(res3.data.fact)

        let res4 = await axios.get(url);
        console.log(res4.data.fact)
        
    }
    catch(e){
        console.log(`error : ${e.message}`)
    }
}