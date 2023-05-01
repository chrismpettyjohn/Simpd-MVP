import {Request} from 'express';
import {RoleScopesWire} from '@simpd/client-lib';

export interface SessionContents {
  userID: number;
  profileID: number;
  sessionID: number;
  expiresAt: number;
  scopes: RoleScopesWire;
}

export interface RequestWithSession extends Request {
  session: SessionContents;
}
