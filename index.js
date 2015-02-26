
var express = require('express');
var React = require('React');
var fs = require("fs");

// Transparently support JSX
require('node-jsx').install();

var app = express();
var port = process.env.PORT || 1337;

var htmlFile = fs.readFileSync('./static/index.html', {encoding: 'utf8'});
var header = React.createFactory(require('./react/abovefold.jsx'));

app.get('/server', function(req, res) {
  
	var headerComponent = React.renderToString(header());
  htmlFile = htmlFile.replace("<!--header-->", headerComponent);
  res.send(htmlFile);
});

app.get('/client', function(req, res) {
	res.sendFile(__dirname + '/static/index.html');
});

app.get('/js/app.js', function(req, res) {
  setTimeout(function() {
    res.sendFile(__dirname + '/app.js');
  },2000);
  
});

app.listen(port);
console.log("Application started on port " + port);