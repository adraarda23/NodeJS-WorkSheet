const express = require("express");

const router2 = express.Router();
//in a forms addresses must take full address for example for this page /admin must be in link
router2.get("/",(req,res,next)=>{
    res.send("<h1>haha Admin Page</h1>");
})


module.exports=router2;