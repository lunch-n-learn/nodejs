var express = require('express');
var bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res){
  res.sendFile("index.html", {root: './public'});
});

app.post('/ajax', function(req, res){
  res.send('Hello ' + req.body.name);
});

app.post('/data', function(req, res){
  res.send('Hello ' + req.body.name);
});

app.get('/:path', function(req, res){
  var path = req.params.path ? req.params.path : '/index.html';
  res.sendFile(path, {root: './public'});
});

app.listen(8080, '0.0.0.0');
console.log('Server running at http://0.0.0.0:8080/');
