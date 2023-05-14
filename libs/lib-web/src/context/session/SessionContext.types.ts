import { ReactNode } from 'react';
import { SessionFragment } from 'fragments/session.fragment';

export interface SessionContext {
  // TODO: Add web specific types from gql
  session?: SessionFragment;
  setSession(newSession?: any): void;
}

export const defaultSessionContext: SessionContext = {
  session: undefined,
  setSession(newSession?: any) { },
};

export interface SessionContextProviderProps {
  children: ReactNode;
}
