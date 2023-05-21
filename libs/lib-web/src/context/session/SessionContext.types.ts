import { ReactNode } from 'react';
import { SessionFragment } from '../../graphql/fragments/session.fragment';

export interface SessionContext {
  session?: SessionFragment;
  setSession(newSession: Partial<SessionFragment> | null): void;
}

export const defaultSessionContext: SessionContext = {
  session: undefined,
  setSession(newSession: SessionFragment | null) { },
};

export interface SessionContextProviderProps {
  children: ReactNode;
}
