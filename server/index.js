const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.send('Hola');
});

io.on('connect', socket => {
  console.log(new Date().getSeconds().toString());
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
