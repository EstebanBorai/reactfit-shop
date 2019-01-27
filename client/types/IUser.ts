interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  avatar: Array<string>;
  country: string;
  genre: number;
  active: Boolean;
}

export default IUser;
