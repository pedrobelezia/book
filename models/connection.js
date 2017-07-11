var mysql = require("mysql");


var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"najara0411",
    database:"acw"
});

module.exports = connection;