import '@babel/polyfill';
import * as express from 'express';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import * as errorhandler from 'errorhandler';
import * as mongoose from 'mongoose';

const app = express();

mongoose.connect('mongodb://localhost/chatter_app', { useNewUrlParser: true });

mongoose.set('debug', true);

mongoose.connection.once('open', function() {
  app.emit('ready');
});


// middlewares
app.use(cors({ origin: ['http://localhost:8080']}));
app.use(morgan('combined'));
app.use(errorhandler());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// // models
// require('./models/User');

// // routes
// app.use(require('./routes'));

app.listen(9090, function() {
  console.log('Listening 9090');
});
