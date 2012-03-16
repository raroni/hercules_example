var express = require('express');
var fs = require('fs');
var Hercules = require('hercules');
var app = express.createServer();
var path = require('path');

var client_dir = path.join(__dirname, 'client');
var bundle = Hercules.bundle(client_dir);
bundle.toString()

app.get('/application.js', function(request, response) {
  var client_dir = path.join(__dirname, 'client');
  var bundle = Hercules.bundle(client_dir);
  response.send(bundle.toString());
});

app.get('/', function(request, response) {
  var file = path.join(__dirname, 'client', 'index.html');
  var html = fs.readFileSync(file, 'utf-8');
  response.send(html);
});

app.listen(3000);
console.log('Server running at 0.0.0.0:3000');
