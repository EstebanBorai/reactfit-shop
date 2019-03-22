interface IUser {
  username: string,
  email: string,
  firstName: string,
  lastName: string,
  country: string,
  avatar: string,
  status: string,
  dateJoined: Date,
  hash: string,
  salt: string
}

export default IUser;
