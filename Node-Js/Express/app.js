const express = require("express");
const app = express();


app.get("/",(req,res,next)=>{
    console.log("In a middleware");
    next();
});
app.get("/",(req,res,next)=>{
    console.log("In a another middleware");
})


app.listen(3000,()=>{
    console.log("3000 portunda çalışıyor");
})