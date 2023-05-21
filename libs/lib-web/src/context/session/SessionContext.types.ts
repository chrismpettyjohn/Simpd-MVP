import { ReactNode } from 'react';
import { SessionFragment } from '../../graphql/fragments/session.fragment';

export interface SessionContext {
  session?: SessionFragment;
  setSession(newSession?: SessionFragment): void;
}

export const defaultSessionContext: SessionContext = {
  session: undefined,
  setSession(newSession?: SessionFragment) { },
};

export interface SessionContextProviderProps {
  children: ReactNode;
}
