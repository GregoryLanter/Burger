let orm = require("../config/orm.js");


let burger = {
    selectAll: function(cb){
        orm.selectAll(function(res){
            cb(res);
        });
    },

    insertOne: function(burger_name, devoured, cb){
        orm.insertOne(burger_name, devoured, function(res){
            cb(res);
        });
    },

    updateOne: function(burger_name, devoured, id, cb){
        orm.updateOne(burger_name, devoured, function(res){
            cb(res);
        });
    }
};

module.exports = burger;