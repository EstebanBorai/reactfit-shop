import { Document, Schema, model } from 'mongoose';
import IUser from '../../types/IUser';

export interface IUserModel extends IUser, Document {
  fullName(): string;
}

const UserSchema: Schema = new Schema({
  username: String,
  firstName: String,
  lastName: String,
  country: String,
  avatar: String,
  status: String,
  dateJoined: Date
});

UserSchema.methods.fullName = function(): string {
  return `${this.firstName.trim()} ${this.lastName.trim()}`;
};

export default model<IUserModel>('User', UserSchema);
