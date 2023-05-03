export interface Message {
  id: number;
  email: string;
}

export interface MessageFindOneInput {
  id: number;
}

export interface MessageService {
  findOneByID(input: MessageFindOneInput): Message | null;
}
