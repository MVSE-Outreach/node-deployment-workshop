var socket = io('http://localhost:8080');
      
$('form').submit(function(){
	socket.emit('chat message', $('#chatText').val());
	$('#chatText').val('');
	return false;
});

socket.on('chat message', function(msg){
	$('#textzone').append($('<tr>').append($('<td>')).text(msg.user + ': ' + msg.txt));
});