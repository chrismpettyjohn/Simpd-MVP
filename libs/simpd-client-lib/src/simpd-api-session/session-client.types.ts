export interface SessionWire {
  id: number;
  userID: number;
  expiresAt: number;
}

export interface SessionFindOneInput {
  id: number;
}
