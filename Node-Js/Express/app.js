const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
app.set('view engine', 'pug');
app.set('views', 'views');
const userRouter = require("./routes/shop");
const adminData = require("./routes/admin");

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,"public")));
app.use(userRouter);
app.use("/admin",adminData.routes);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

app.listen(3000,()=>{
    console.log("3000 portunda çalışıyor");
    console.log(path.join(__dirname,"public"));
})




