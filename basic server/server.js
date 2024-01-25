/* 
using the url, it gives sum for a nd b 
     http://localhost:3001/sum?a=2&b=2

*/


const express = require("express")
const app = express();

app.get("/sum", (req, res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b;
    res.send(sum.toString());
})

app.listen(3001);
console.log("working...");