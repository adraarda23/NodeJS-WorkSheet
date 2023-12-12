const mysql = require("mysql2");

const pool= mysql.createConnection(
{
    host:"localhost",
    user:"root",
    database:"node-complete",
    password:"root",


}
);
module.exports=pool.promise();