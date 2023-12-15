const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect=(callback)=>{

MongoClient.connect("mongodb+srv://ardaaydinkilinc:<password>@cluster0.1j84dwq.mongodb.net/?retryWrites=true&w=majority")
.then(client=>{
  console.log("Connect");
  callback(client);
})
.catch(err=>console.log(err));

}

module.exports=mongoConnect;