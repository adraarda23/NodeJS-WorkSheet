const express = require("express");
const path = require("path");
const app = express();
const userRouter = require("./routes/shop");
const adminData = require("./routes/admin");
const dirRoot = require("./util/path");
app.set("view engine","pug");
app.set("views","views");
app.use(userRouter);
app.use("/admin",adminData.router);
app.use(express.static(path.join(__dirname,"public")));

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(dirRoot,"views","notfound.html"));
})

app.listen(3000,()=>{
    console.log("3000 portunda çalışıyor");
    console.log(path.join(__dirname,"public"));
})