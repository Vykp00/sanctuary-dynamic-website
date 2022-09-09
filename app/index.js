const express = require('express');
const app = new express();

app.get("/signup.html", (req,res)=>{
    return res.send("Hello World");
});
let server = app.listen(0, ()=>{
    console.log("Listening at http://localhost:"+server.address())
})

//the following code set any file in the 'base' to be accessible through the /<filename>
app.use(express.static('base'))

let server = app.listen(0, ()=>{
    console.log("Listening at http://localhost:"+server.address())
})