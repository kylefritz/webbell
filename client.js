var io = require('socket.io-client')

var socket = io.connect('http://webbell.herokuapp.com');
socket.on('gas:changed', function (data) {
  console.log('gas is '+data['gas']);
});
console.log('client is listening!')

