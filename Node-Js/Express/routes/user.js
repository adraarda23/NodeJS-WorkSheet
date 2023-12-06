const express = require("express");

const router = express.Router();

router.get("/user",(req,res,next)=>{
    res.send("<h1>haha</h1>");
})


module.exports=router;