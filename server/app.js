const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorhandler = require('errorhandler');
const mongoose = require('mongoose');
const morgan = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const io = require('socket.io');
const startSockets = require('./startSockets');

const isProduction = process.env.NODE_ENV === 'production';
const app = express();
const HTTPServer = http.Server(app);
const sockets = io(HTTPServer);
const mongoConnection = 'mongodb://localhost/lobby_app_data';

if(isProduction) {
  mongoose.connect(mongoConnection);
} else {
  mongoose.connect(mongoConnection, { useNewUrlParser: true });
  mongoose.set('debug', true);
}

app.use(cors());
app.use(session({
  name: 'session',
  secret: 'session-secret',
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 24 * 360000
  }
}));
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

if (!isProduction) {
  app.use(errorhandler());
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
