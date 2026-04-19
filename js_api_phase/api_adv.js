let url = "https://catfact.ninja/fact";

async function getfacts(){
    try{
        let res = await fetch(url);
        let data1 = await res.json();
        console.log(data1.fact)

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact)

        let res3 = await fetch(url);
        let data3 = await res3.json();
        console.log(data3.fact)


        let res4 = await fetch(url);
        let data4 = await res4.json();
        console.log(data4.fact)

    }
    catch(error){
        console.log("error : ",error)
    }

}