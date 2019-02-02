const router = require('express').Router();
const User = require('../../models/User');

router.post('/signin', (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }, (error, user) => {
    if (req.body === null) {
      return res.status(400).send({
        message: 'User not found'
      });
    } else {
      if (user.checkPassword(password)) {
        return res.status(201).send(user);
      } else {
        return res.status(400).send({ 
          message: 'Invalid password'
        });
      }
    }
  });
});

router.post('/signup', (req, res, next) => {
  let newUser = new User();

  // Sets new user properties
  newUser.firstName = req.body.firstName;
  newUser.lastName = req.body.lastName;
  newUser.email = req.body.email;
  newUser.username = req.body.username;
  newUser.avatar = req.body.avatar;
  newUser.birthday = req.body.birthday;
  newUser.genre = req.body.genre;
  newUser.country = req.body.country;

  // Sets user password
  newUser.setPassword(req.body.password);

  // Save changes
  newUser.save((error, user) => {
    if (error) {
      return res.status(400).send({
        message: 'Failed to create user',
        error
      });
    } else {
      return res.status(201).send(user);
    }
  });
});

module.exports = router;
