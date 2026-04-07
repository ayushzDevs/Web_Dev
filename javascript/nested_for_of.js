let heroes = [
    ["ironman","captain america","thor"],
    ["spiderman","hulk","black panther"],
    ["antman","doctor strange","black widow"]
];

for(hero of heroes){
    console.log(hero);
    for (name of hero){
        console.log(name);
    }
}