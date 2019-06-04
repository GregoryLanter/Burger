// get my connection from connection.js
let connection = require("./connection.js");

let orm = {
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            //console.log(result);
            cb(result);
        });
    },

    insertOne: function(burger_name, devoured, cb) {
        let queryString = 'insert into burgers(burger_name, devoured) values("'
        queryString += burger_name + '",'
        queryString += devoured + ');';

        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
    },


    updateOne: function(burger_name, devoured, id, cb) {
      //update burgers set devoured = false where id = 5;
        var queryString = 'update burgers set devoured = true where id = '
        queryString += id + ';';
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
    }
};

// Export the orm object
module.exports = orm;