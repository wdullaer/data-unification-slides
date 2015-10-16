'use strict';

var express = require('express'); // Express Webserver library
var path = require('path');
var serveStatic = require('serve-static'); // Express static server middleware

// Default port to listen on
var defaultPort = 4000;

// Create the express app
var app = express();

// Configure our app
app.set('port', process.env.PORT || defaultPort);

app.get('*', serveStatic(path.join(__dirname,'slides')));

module.exports = app;
