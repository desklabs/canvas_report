var express  = require('express'),
  bodyParser = require('body-parser'),
  app        = express(),
  path       = require('path'),
  CryptoJS   = require("crypto-js");

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));

app.use(bodyParser.json()); // create application/json parser
app.use(bodyParser.urlencoded({ entended: true })); //create application/x-www-urlencoded parser

var views = path.join(__dirname, 'public/views');

app.get('/', function (req, res) {
  res.sendFile(path.join(views, 'index.html'));
});

app.post('/', function (req, res) {
  var shared = "98df1d172c4b8f4596b6a515e303cd74313db5f0";
});

var port = process.env.PORT || 9000;
app.listen(port);
console.log('Listening on port ' + port);
