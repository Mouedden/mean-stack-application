var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var app = express();

app.set('view engine', 'ejs');
var urlencodedParser = bodyParser.urlencoded({ extended: false});

var publicPath = path.resolve(__dirname, 'controllers');
app.use(express.static(publicPath));
var imagesPath = path.resolve(__dirname, 'images');
app.use("/images", express.static(imagesPath));
var stylePath = path.resolve(__dirname, 'style');
app.use("/style", express.static(stylePath));
console.log(__dirname);

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/login', function(req, res) {
  res.render('login');
});
app.get('/register', function(req, res) {
  res.render('register');
});
app.post('/login', urlencodedParser, function(req, res) {
console.log('login');
  res.render('login');
});
app.post('/register', urlencodedParser, function(req, res) {
  console.log('register');
  res.render('register');
});
app.listen(process.env.PORT || 3000);
