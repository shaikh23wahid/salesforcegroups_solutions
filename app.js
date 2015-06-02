// app.js
// load the things we need
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

// set the view engine to ejs
app.set('view engine', 'ejs');


// index page
app.get('/', function(req, res) {
    res.render('pages/newhome');
});

// index page
app.get('/index', function(req, res) {
    res.render('pages/index');
});

app.listen(8181);
console.log('You are communicating to port 8181');



