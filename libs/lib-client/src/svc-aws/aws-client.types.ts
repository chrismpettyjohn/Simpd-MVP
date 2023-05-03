export interface AWSWire {
  id: number;
  userID: number;
  username: string;
}

export interface AWSFindOneInput {
  id?: number;
  username?: string;
}
