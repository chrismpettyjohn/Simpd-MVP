export interface SessionWire {
  id: number;
  userID: number;
  profileID: number;
  expiresAt: number;
}

export interface SessionFindOneInput {
  id: number;
}
