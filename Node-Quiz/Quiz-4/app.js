const express = require("express");
const addUser = require("./routes/home");
const listUser = require("./routes/users");
const app = express();
app.set('view engine', 'pug');
app.set('views', 'views');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(addUser.router);
app.use("/users",listUser);



app.listen(3000,()=>{
    console.log("Server Working On Port 3000");
})

