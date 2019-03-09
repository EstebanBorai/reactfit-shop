const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorhandler = require('errorhandler');

// middlewares
app.use(cors({ origin: ['http://localhost:8080']}));
app.use(morgan('combined'));
app.use(errorhandler());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use(require('./routes'));

app.listen(9090, function() {
  console.log('Listening Port: 9090');
});
