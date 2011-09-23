var express =  require('express');
var datetime =  require('datetime');

var app = express.createServer(express.logger());
var io = require('socket.io').listen(app)

var gas=0;

app.get('/',function(req,resp){
  resp.sendfile(__dirname + '/index.html');

  //resp.send("Webbel says what's up @ "+datetime.format(new Date(),"%r"));
});

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.emit('gas:changed',{gas:gas});
  socket.on('my other event', function (data) {
    console.log(data);
  });
  socket.on('gas:change',function(data){
    gas+=data['inc'];
    io.sockets.emit('gas:changed',{gas:gas}); //this will be received by everyone
  });
});


var port = process.env.PORT || 3000;
app.listen(port,function(){
  console.log("listening on "+port);
});
