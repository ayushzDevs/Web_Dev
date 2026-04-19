// let json_res = '{"fact":"A cat appetite is the barometer of its health. Any cat that does not eat or drink for more than two days should be taken to a vet.","length":132}';

// let valid_res = JSON.parse(json_res);

// console.log(valid_res.fact);

// let new_json = JSON.stringify(valid_res);
// console.log(new_json);



let url = "https://catfact.ninja/fact";

fetch(url)
    .then((response)=>{
        console.log("Response : ",response);
    })
    .catch((error)=>{
        console.log("Error : ",error);
    })