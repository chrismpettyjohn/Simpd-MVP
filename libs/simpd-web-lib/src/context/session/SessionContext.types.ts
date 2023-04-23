import { ReactNode } from 'react';
import { UserWire } from '@simpd/types';

export interface SessionContext {
  session?: UserWire;
  setSession(newSession?: UserWire): void;
}

export const defaultSessionContext: SessionContext = {
  session: undefined,
  setSession(newSession?: UserWire) { },
};

export interface SessionContextProviderProps {
  children: ReactNode;
}
