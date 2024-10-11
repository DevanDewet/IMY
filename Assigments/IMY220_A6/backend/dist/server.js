"use strict";

var path = require('path');
var express = require('express');
var postsRouter = require('./routes/posts');
var cors = require('cors');
var app = express();
var PORT = process.env.PORT || 5000;
app.use(express.json()); // To parse JSON bodies
app.use(cors()); // To enable cross-origin requests

app.use(express["static"](path.join(__dirname, 'dist')));
app.use('/api/posts', postsRouter);
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT));
});