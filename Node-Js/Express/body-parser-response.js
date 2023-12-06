const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/",(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></input></form>');
});

app.post("/product",(req,res,next)=>{
    console.log(req.body.title);
    res.redirect("/");
});


app.listen(3000,()=>{
    console.log("3000 portunda çalışıyor");
})