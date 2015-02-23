
// Open socket connection to server
var socket = io('http://localhost:8080');

// When button clicked, send contents of textbox to server for broadcast to all clients      
$('form').submit(function(){
	socket.emit('chat message', $('#chatText').val());
	$('#chatText').val('');
	return false;
});

// Received message from server. Display on page
socket.on('chat message', function(msg){
	// We want to build a table row <tr> which contains: 
	// - bold section <b>
	// - paragraph text <p>
	// As we wish them to be side by side we use the css property display: inline-block;

	// Generate and populate bold block
	var txt = $('<b>');
	txt.text(msg.user + ': ');

	var user = $('<p>');
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