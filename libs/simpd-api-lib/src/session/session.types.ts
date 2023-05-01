import {Request} from 'express';

export interface SessionContents {
  userID: number;
  profileID: number;
  sessionID: number;
  expiresAt: number;
}

export interface RequestWithSession extends Request {
  session: SessionContents;
}
