var io = require('socket.io')(3001);

nextClient = 1;

io.on('connection', function(socket){
  var clientID = nextClient;
  nextClient++;

  socket.on('chat message', function(msg){
  	var data = {};
  	data.txt = msg;
  	data.user = 'User ' + clientID;
  	console.log('User: ' + data.user +' Chat message: ' +  data.txt);
    io.emit('chat message', data);
  });

});

// BELOW EXAMPLE EXPRESS SERVER
// var express = require('express');
// var server = express();
// server.use('/', express.static(__dirname + '/www'));

// var port = 3001;
// console.log("Serving on port: " + port);
// server.listen(port);
