const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
app.set('view engine', 'pug');
app.set('views', 'views');
const userRouter = require("./routes/shop");
const adminRouter = require("./routes/admin");
const errorRouter = require("./controllers/error");

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,"public")));
app.use(userRouter);
app.use("/admin",adminRouter);

app.use(errorRouter.get404);

app.listen(3000,()=>{
    console.log("3000 portunda çalışıyor");
    console.log(path.join(__dirname,"public"));
})




