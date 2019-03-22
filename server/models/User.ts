import { Document, Schema, model } from 'mongoose';
import IUser from '../../types/IUser';
import * as crypto from 'crypto';

export interface IUserModel extends IUser, Document {
  fullName(): string;
  checkPassword(password: string): boolean;
  setPassword(password: string): void;
}

const UserSchema: Schema = new Schema({
  username: String,
  email: String,
  firstName: String,
  lastName: String,
  country: String,
  avatar: String,
  status: String,
  dateJoined: Date,
  hash: String,
  salt: String
});

UserSchema.methods.fullName = function(): string {
  return `${this.firstName.trim()} ${this.lastName.trim()}`;
};

UserSchema.methods.checkPassword = function(password): boolean {
  const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.hash === hash;
};

UserSchema.methods.setPassword = function(password): void {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

UserSchema.methods.toJSON = function() {
  let user = this.toObject();
  delete user.hash;
  delete user.salt;
  return user;
}

export default model<IUserModel>('User', UserSchema);
