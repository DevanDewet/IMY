"use strict";

var path = require('path');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express["static"](path.join(__dirname, 'dist')));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT));
});
