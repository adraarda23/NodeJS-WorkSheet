const express = require("express");

const router2 = express.Router();

router2.get("/admin",(req,res,next)=>{
    res.send("<h1>haha Admin Page</h1>");
})


module.exports=router2;