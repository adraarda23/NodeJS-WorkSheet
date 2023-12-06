const express = require("express");
const { patch } = require("./routes/home");
const routeHome = require("./routes/home");
const routeUsers = require("./routes/users");
const path = require("path");

const app = express();

app.use(routeHome);
app.use("/users",routeUsers);
app.use(express.static(path.join(__dirname,"public")));


app.use("/",(req,res,next)=>{
    res.send("<h1>404 Page Not Found</h1>");
});



app.listen(3000,()=>{
    console.log("server working on port 3000");
})