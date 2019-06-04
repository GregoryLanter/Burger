// This file is used to connect ot my SQL database burgers_db


//require my sql
let mysql = require("mysql");

//set up connection
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
    connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "#H0m3rD0h",
    database:"burgers_db"
});

//connect to the database
connection.connect(function(err){
    if (err) {
        console.error("error connecting " + err.stack);
        return;
    }
    console.log("conected as id " + connection.threadId);
});

//export connection
module.exports = connection;