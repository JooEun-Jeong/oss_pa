export interface Message {
  chat: string;
  user: User;
  time: string;
  _id: string;
}

export type Messages = Array<Message>;

export interface User {
  id: string;
  name: string;
}
