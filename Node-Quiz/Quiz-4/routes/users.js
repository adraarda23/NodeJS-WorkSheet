const express = require("express");
const data = require("./home");
const router = express.Router();


router.get("/",(req,res,next)=>{
    const users=data.users
    res.render("display-user",{users:users});
})

module.exports=router;


