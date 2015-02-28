var express = require('express');
var server = express();
server.use('/', express.static(__dirname + '/www'));

var port = 3000;
console.log("Serving on port: " + port);
server.listen(port);
