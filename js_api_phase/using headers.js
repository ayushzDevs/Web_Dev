let url_h = "https://icanhazdadjoke.com/";

// async function getjokes(){
//     try{
//         const config = {
//             headers : {
//                 Accept : "application/json"
//             }
//         };

//         let res = await axios.get(url_h,config);
//         console.log(res.data);

//     }
//     catch(e){
//         console.log(`error : ${e.message}`)
//     }

// }

let uni = "http://universities.hipolabs.com/search?name=";

let country = document.querySelector("#input");
let btn_c = document.querySelector("#search_c");

btn_c.addEventListener("click", async () => {
    console.log("button clicked");
    let clg = await getcolleges(country);
    console.log(clg);
})




async function getcolleges(country){
    try{
        let res = await axios.get(uni+country.value);
        return res.data;
    }
    catch(e){
        console.log(`error : ${e.message}`);
        return [];
    }
}