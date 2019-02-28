import IChatItem from './IChatItem';

interface IChat {
  name: string;
  avatar: string;
  dateCreated: Date;
  participants: Array<string>;
  history: Array<IChatItem>;
  storage: string;
}

export default IChat;
