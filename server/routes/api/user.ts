import { Router } from 'express';
import User from '../../models/User';
import { BAD_REQUEST, CREATED } from 'http-status-codes';

const router = Router();

router.post('/signup/', async (req, res, next) => {
  try {
    const user = req.body;

    if (!user) {
      return res.status(BAD_REQUEST).send('User is required.');
    }
    
    const isUsernameTaken = await User.findOne({ username: user.username });

    if (isUsernameTaken) {
      return res.status(BAD_REQUEST).send(`${user.username} is taken.`);
    }
    
    User.create(user, function (error, created) {
      if (error) {
        throw error;
      }

      return res.status(CREATED).send(created);
    });
  } catch (ex) {
    next(ex);
  }
});

export default router;
