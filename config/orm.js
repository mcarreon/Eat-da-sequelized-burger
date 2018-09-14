//-----Import MySQL Connection-----
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}


var orm = {
    selectAll: function (callback) {
        connection.query('SELECT * FROM burgers;', function (err, data) {
            if (err) throw err;

            callback(data);
        });
    },
    insertOne: function (burgerName, callback) {
        connection.query('INSERT INTO burgers (burger_name) VALUES (?)', burgerName, function (err, data) {
            if (err) throw err;

            callback(data);
        });
    },
    updateOne: function (burgerID, callback) {
        connection.query('UPDATE burgers SET devoured = 1 WHERE id = ?', burgerID, function(err, data) {
            console.log("Updating burger with id: " + burgerID);
            if (err) throw err;
            
            callback(data);
        })
    }
}

module.exports = orm;