const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin");


app.use(userRouter);
app.use(adminRouter);

app.use((req,res,next)=>{
    res.status(404).send("<h1>Page Not Found </h1>");
})



app.listen(3000,()=>{
    console.log("3000 portunda çalışıyor");
})