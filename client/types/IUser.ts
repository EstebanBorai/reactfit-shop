interface IUser {
  id: String;
  firstName: String;
  lastName: String;
  username: String;
  avatar: Array<String>;
  country: String;
  genre: number;
  active: Boolean;
}

export default IUser;
