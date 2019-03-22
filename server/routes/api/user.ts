import { Router } from 'express';
import User from '../../models/User';
import { BAD_REQUEST, CREATED, INTERNAL_SERVER_ERROR, OK, FORBIDDEN } from 'http-status-codes';

const router = Router();

router.post('/signup/', async (req, res, next) => {
  try {
    const { 
      username, 
      email,
      firstName, 
      lastName, 
      country, 
      avatar, 
      status,
      password 
    } = req.body;

    if (!req.body) {
      return res.status(BAD_REQUEST).send('User is required.');
    }
    
    const isUsernameTaken = await User.findOne({ username });

    if (isUsernameTaken) {
      return res.status(BAD_REQUEST).send(`${username} is taken.`);
    }

    let newUser = new User();
    newUser.username = username;
    newUser.email = email;
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.country = country;
    newUser.avatar = avatar;
    newUser.status = status;
    newUser.dateJoined = new Date();

    newUser.setPassword(password);

    newUser.save((error, user) => {
      if (error) {
        return res.status(INTERNAL_SERVER_ERROR).send(error);
      } else {
        return res.status(CREATED).send(user);
      }
    });
  } catch (ex) {
    next(ex);
  }
});

router.post('/login/', async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });

    if (user) {
      if (user.checkPassword(password)) {
        return res.status(OK).send(user);
      } else {
        return res.status(FORBIDDEN).send();
      }
    }

    return res.status(BAD_REQUEST).send();

  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).send(error);
  }
});

export default router;
