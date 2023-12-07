const express = require("express");
const path = require("path");

const router = express.Router();
const users=[];

router.get("/",(req,res,next)=>{
    res.render("input-user",)
})
router.post('/', (req, res, next) => {
users.push({ username: req.body.user }); //-> for this bodyParser must be settled in app.js

res.redirect('/');
});

exports.router=router;
exports.users=users;