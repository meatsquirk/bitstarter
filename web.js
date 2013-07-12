var express = require('express');
var fs = require('fs');
var indexFile = "index.html"
var app = express.createServer(express.logger());
var buf = new Buffer(256);

buf = fs.readFile(indexFile);

app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
