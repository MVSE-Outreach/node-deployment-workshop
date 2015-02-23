var socket = io('http://localhost:8080');
      
$('form').submit(function(){
	socket.emit('chat message', $('#chatText').val());
	$('#chatText').val('');
	return false;
});

socket.on('chat message', function(msg){
	var user = $('<p>');
	var txt = $('<b>');
	txt.text(msg.user + ': ');
	user.append(txt);
	user.css('display','inline-block');
	
	var message = $('<p>');
	message.text(msg.txt);
	message.css('display','inline-block');
	
	var row = $('<tr>');

	row.append(user);
	row.append(message);

	$('#textzone').append(row);

});