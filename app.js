// set variables for environment
var express = require('express');
var logger = require('morgan');
var app = express();
var path = require('path');
var port = 4000;

// Displays server log in the CLI
app.use(logger('dev'));

// instruct express to server up static assets
app.use(express.static('public'));

// Set server port
app.listen(port);

console.log("Server is running at => http://localhost:" + port + "/\nCTRL + C to shutdown");
