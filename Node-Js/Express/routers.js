const express = require("express");
const app = express();

app.get("/admin",(req,res,next)=>{
    console.log("Admin Page");
    res.send("admin page");
});

app.get("/",(req,res,next)=>{
    console.log("Home Page");
    res.send("homepage");
});



app.listen(3000,()=>{
    console.log("3000 portunda çalışıyor");
});