const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  username: String,
  avatar: String,
  birthday: Date
});

UserSchema.methods.checkPassword = password => {
  // check password for this user
};

UserSchema.methods.setPassword = password => {
  // do some password encryption
};

module.exports = mongoose.model('User', UserSchema);
