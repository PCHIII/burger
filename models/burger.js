var orm = require('../config/orm.js');


// setup db table burger
var burger = {
    all: function(cb){ 
    orm.all('burgers',function(res){
        cb(res);
    })
},

update: function(id,cb){
    orm.update ('burgers', id, cb);
},

create: function(name,cb){
    orm.create('burgers', name, cb);
}
}
// Export the database functions for the controller
module.exports = burger;