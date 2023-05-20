export interface MessageWire {
  id: number;
  sendingProfileID: number;
  receivingProfileID: number;
  content: string;
  readAt?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface MessageFindOneInput {
  id?: number;
}
