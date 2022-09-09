let stars = "";
for (let i = 0; i < 5; i++){
    stars = ""; 
    for (let j = i + 1; j > 0; j--){
        stars += "*";
    }
    console.log(stars);
    if (i === 4){
        for (let k = i; k > 0; k--){
            stars="";
            for (let j = k; j > 0; j--){
                stars += "*";
            }
            console.log(stars);
    }
}
}
const express = require('express');
const app = new express();

app.get("/", (req,res)=>{
    return res.send("Hello World");
});
let server = app.listen(0, ()=>{
    console.log("Listening at http://localhost:"+server.address())
})