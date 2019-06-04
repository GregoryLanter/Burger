var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      console.log(data);
      var burgerObject = {
        burger: data
      };
      res.render("index", burgerObject);
    });
  });
  
  router.post("/api/burger", function(req, res) {
      let burger_name = req.body.burger_name;
      let devoured = req.body.devoured;

      burger.insertOne(burger_name, devoured, function(result){
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burger/:id", function(req, res) {
    burger.updateOne(req.body.burger_name, true, req.params.id, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  module.exports = router;