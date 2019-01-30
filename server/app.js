const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorhandler = require('errorhandler');
const mongoose = require('mongoose');
const io = require('socket.io');
const startSockets = require('./startSockets');

const isProduction = process.env.NODE_ENV === 'production';
const app = express();
const HTTPServer = http.Server(app);
const sockets = io(HTTPServer);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

if (!isProduction) {
  app.use(errorhandler());
}

if(isProduction) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect('mongodb://localhost/lobby_app_data');
  mongoose.set('debug', true);
}

require('./models/User');
require('./config/passport');

app.use(require('./routes'));

app.use((req, res, next) => {
  let err = new Error('Page Not Found');
  err.status = 404;
  next(err);
});

if (!isProduction) {
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(err.status || 500);
    res.json({'error stacks': {
      message: err.message,
      error: err
    }});
  });
}

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({'errors': {
    message: err.message,
    error: {}
  }});
});

startSockets(sockets);

const server = app.listen( process.env.PORT || 3000, function() {
  HTTPServer.listen(3001);
  console.log('Listening on port ' + server.address().port);
});
