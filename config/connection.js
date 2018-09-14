//-----MySQL Setup-----
require('dotenv').config();
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
    console.log('Using JAWSDB');
}
else {
    connection = mysql.createConnection({
        host: "localhost",
        //port: 3306,
        //port for PC 
        port: 3307,
        user: "root",
        password: process.env.DB_PASS,
        database: "burgers_db"
    });
}


//-----Establish Connection-----
connection.connect(function (err) {
    if (err) {
        console.error("Error Connecting: " + err.stack);
        return;
    }
    console.log("Connected with ID " + connection.threadId);
});

//-----Exporting Connection-----
module.exports = connection;

