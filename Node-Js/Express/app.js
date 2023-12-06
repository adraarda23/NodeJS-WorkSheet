const express = require("express");
const path = require("path");
const app = express();
const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin");
const dirRoot = require("./util/path");

app.use("/user",userRouter);
app.use("/admin",adminRouter);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(dirRoot,"views","notfound.html"));
})



app.listen(3000,()=>{
    console.log("3000 portunda çalışıyor");
})