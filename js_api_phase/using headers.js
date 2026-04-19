let url_h = "https://icanhazdadjoke.com/";

async function getjokes(){
    try{
        const config = {
            headers : {
                Accept : "application/json"
            }
        };

        let res = await axios.get(url_h,config);
        console.log(res.data);

    }
    catch(e){
        console.log(`error : ${e.message}`)
    }

}