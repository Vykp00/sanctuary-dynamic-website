/* Create a Promise with a callback where we handle resolve and reject. The following is a traditional Promise code.
const axios = require('axios').default;
const connectToURL = (url)=>{
    console.log(request);
    reg.then(response => {
        let listOfWork = response.data.work;
        listOfWork.forEach((work)=>{
            console.log(work.titleAuth);
        });
    })
    .catch(err => {
        console.log(err.toString())
    });
}
console.log("Before connect URL")
connectToURL('https://reststop.randomhouse.com/resources/works/?expandLevel=1&search=Grisham');
console.log("After connect URL")
*/

//Now we check how the same is accomplished with sync/await
/*
In the following code we try to get list of all book ids from remote url and then based on that make request about each of the 
id. Finally print them all out. We are using axios get, which returns a promise. 
*/
const axios = require('axios').default;
async function connectToURL(url){
    const response = await axios.get(url);
    let listOfWork = response.data.work;
    let workids = listOfWork.map((work)=>{
        return work.workids
    });
    workids.forEach(async (workid)=>{
        const request = await axios.get('https://reststop.randomhouse.com/resources/works/'+workid);
        console.log(request.data.titleAuth);
    });
}
connectToURL('https://reststop.randomhouse.com/resources/works/?expandLevel=1&search=Grisham').catch(err=>{
    console.log(err.toString())
});
/* You can only await a promise inside an async method. This is because await blocks the thread. 
This will defeat the primary purpose. So the sunction within which an await is used HAS TO BE async. */
const express = require('express');
const app = new express();

app.get("/", (req,res)=>{
    return res.send("Hello World");
});
let server = app.listen(0, ()=>{
    console.log("Listening at http://localhost:"+server.address())
})

