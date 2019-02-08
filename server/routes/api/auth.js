const router = require('express').Router();
const User = require('../../models/User');
const basicAuth = require('../../tools/functions').basicAuth;

router.post('/signin', (req, res) => {
  const authorizationHeader = req.headers.authorization;
  const { username, password } = basicAuth(authorizationHeader);
  User.findOne({ username }, (error, user) => {
    if (authorizationHeader === null) {
      return res.status(400).send({
        message: 'Credentials are required'
      });
    } else {
      if (user.checkPassword(password)) {
        req.session.user = user; 
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

router.get('/me', (req, res, next) => {
  if (req.session.user) {
    return res.status(201).send(req.session.user);
  }

  return res.status(401).send();
});

module.exports = router;
