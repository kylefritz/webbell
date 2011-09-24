//TODO: client's dependencies not reflected in package.json (because heroku hates them)
var io = require('socket.io-client');
var SerialPort = require('serialport').SerialPort;


require('child_process').exec('ls /dev/tty.usbserial*',function(err,stdout,stderr){

  //look up serial port dynamically
  var port=stdout.trim();
  console.log('connecting to',port);
  var serialport=new SerialPort(port);

  //var socket = io.connect('http://localhost:5000');
  var socket = io.connect('http://webbell.herokuapp.com');
  socket.on('gas:changed', function (data) {
    console.log('gas is '+data['gas']);
  });

});

console.log('client is listening!')

