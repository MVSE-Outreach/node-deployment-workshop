var io = require('socket.io')(8080);

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
