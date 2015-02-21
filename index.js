
var express = require('express');
var react = require('React');

// Transparently support JSX
require('node-jsx').install();

var app = express();

var port = process.env.PORT || 1337

app.get('/', function(req, res) {
	recat
});

app.listen(port);
console.log("Application started on port " + port)