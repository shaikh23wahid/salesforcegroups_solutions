// app.js
// load the things we need
var express = require('express');

var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file


// home page
app.get('/', function(req, res) {
    res.render('pages/home')
});

// group page
app.get('/group/:id', function(req, res) {
    var groupid = req.params.id;
      res.render('pages/index',
      id = groupid
      );
});


app.get('/groupdetails', function(req, res) {
    res.render('pages/group');
});

app.get('/brand', function(req, res) {
    res.render('pages/brand');
});

app.get('/ngfooter', function(req, res) {
    res.render('html/footer');
});

app.listen(8888);
console.log('You are communicating to port 8888');



