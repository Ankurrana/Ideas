var express = require('express');

var app = express();
var bodyParser = require('body-parser');
var assert = require('assert');
var path = require('path');

module.exports = {
  "express" : express,
  "bodyParser" : bodyParser,
  "path" : path
};

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
require('./routes.js')(app);
app.listen(3030);
console.log('Started listening to port 3030');
