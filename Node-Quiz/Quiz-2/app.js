"use strict";
const express = require("express");
const app= express();

// app.get("/",(req,res,next)=>{
//     console.log("In a middleware 1");
//     next();
// });
app.get("/",(req,res,next)=>{
    console.log("In a middleware 2");
    res.send("<h1>Hello There !</h1>");

});
app.get("/users",(req,res,next)=>{
    console.log("In a middleware 2");
    res.send("<h1>Hello User !</h1>");

})
app.listen(3000,()=>{
    console.log("Working on port 3000");
});


