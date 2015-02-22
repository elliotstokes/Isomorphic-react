
var express = require('express');
var React = require('React');

// Transparently support JSX
require('node-jsx').install();

var app = express();

var port = process.env.PORT || 1337
//var reactApp = require('./react/app.jsx');
var MyApp = React.createFactory(require('./react/app.jsx'));


app.get('/server', function(req, res) {
	res.send(React.renderToString(MyApp()));
});

app.get('/client', function(req, res) {
	res.file('')
});

app.listen(port);
console.log("Application started on port " + port)