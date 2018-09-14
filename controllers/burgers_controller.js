//-----Burgers_controller controls get, post, and put routes-----
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

//Gets all burgers and divides into available burgers and non available burgers.
//It then sends a Handlebars object containing that data, along with the index route. 
router.get("/", function(req, res) {
    burger.showAllBurger(function(data) {
        var availableBurgers = [];
        var oldBurgers = [];
        
        data.forEach(function (e) {
            if (e.devoured == false) {
                availableBurgers.push(e);
            }
            else {
                oldBurgers.push(e);
            }
        });
        
        //console.log(availableBurgers);
        //console.log(oldBurgers);

        var hbsObject = {
            allBurgers: data,
            availableBurgers: availableBurgers,
            oldBurgers: oldBurgers
        };        
        //console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//inserts a new burger using a body-parsed param that user enters
router.post("/api/burgers", function(req, res) {
    //console.log(req.body.burger_name);
    burger.insertBurger(req.body.burger_name, function(data) {
        res.status(200).end();
    });
});

//updates an existing burger in the database using the ID
router.put("/api/burgers/:id", function(req, res) {
    //console.log('test');
    burger.eatOneBurger(req.params.id, function (data){
        if (data.changedRows === 0) {
            return res.status(404).end();
        }    
        res.status(200).end();
    });
});



module.exports = router;