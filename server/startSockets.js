function startSockets(sockets) {
  sockets.on('connection', function(socket){
    console.log('a user connected');
    socket.on('register', () => {
      socket.emit('registered', 'USER')
    });
  });
}

module.exports = startSockets;
