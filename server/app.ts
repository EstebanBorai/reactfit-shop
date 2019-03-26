import '@babel/polyfill';
import * as express from 'express';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import * as errorhandler from 'errorhandler';
import * as mongoose from 'mongoose';
import routes from './routes';
import passportConfig from './config/passport';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';
import * as passport from 'passport';

const app = express();

const mongoConnectionURI = 'mongodb://localhost/chatter_app';
mongoose.connect(mongoConnectionURI, { useNewUrlParser: true });

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
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(session({
  name: 'session-id',
  secret: '21wdw154e4w3e',
  // TODO: Add store 
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 360000,
    sameSite: false,
    secure: false
  }
}));

// routes
app.use(routes);

app.listen(9090, function() {
  console.log('Listening 9090');
});
