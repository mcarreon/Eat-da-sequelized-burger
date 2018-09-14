//------Takes ORM and works between burgers_controller-----
var orm = require("../config/orm.js");

var burger = {
    showAllBurger: function (callback) {
        orm.selectAll(function(data) {
            callback(data);
        });
    },
    insertBurger: function (burgerName, callback) {
        orm.insertOne(burgerName, function(data) {
            callback(data);
        });
    },
    eatOneBurger: function (burgerID, callback) {
        orm.updateOne(burgerID, function(data) {
            callback(data);
        });
    }
}

module.exports = burger;