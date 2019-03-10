const router = require('express').Router();
const User = require('../../models/User');
const { BAD_REQUEST, CREATED } = require('http-status-codes');

router.post('/signin/:username', (req, res) => {
  const username = req.params.username;

  User.findOne({ username }, (err, user) => { 
    if (err) {
      throw err;
    }

    if (user) {
      res.status(BAD_REQUEST).send('Username taken');
    }

    User.create({ username }, function(error, created) {
      if (error) {
        throw error;
      }

      res.status(CREATED).send(created);
    });
  })
});

module.exports = router;
