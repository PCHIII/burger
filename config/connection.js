var mysql = require('mysql');


if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {

var connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'Basilbird222',
    database:'burgers_db'
});
  };
  
// Make connection.
connection.connect(function(err){
    if(err)throw err;
    console.log("connected as id: "+connection.threadid);
});

// Export connection for our ORM to use.
module.exports = connection;