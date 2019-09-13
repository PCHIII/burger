var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
var exphbs = require('express-handlebars');

var app = express();
var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory
app.use(express.static(__dirname + '/public'));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(methodOverride('_method'));

//sets main.handlebars as the default layout and our view engine as handlebar
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//import routes and give the server access to them
var routes = require("./controllers/burgersController.js");
app.use('/' ,routes);

// var port = 3000;
// app.listen(port);

app.listen(PORT, function() {
console.log("Server listening on: http://localhost:" + PORT);
 });