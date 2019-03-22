import passport from 'passport';
import passportLocal from 'passport-local';
import User from '../models/User';

const LocalStrategy = passportLocal.Strategy;

export default passport.use(new LocalStrategy({
  usernameField: 'user[username]',
  passwordField: 'user[password]',
}, (username, password, done) => {
  User.findOne({ username }, (error, user) => {
    if (error) {
      return done(error);
    }

    if (!user) {
      return done(null, false);
    }

    if (!user.checkPassword(password)) {
      return done(null, false);
    }
  });
}));
