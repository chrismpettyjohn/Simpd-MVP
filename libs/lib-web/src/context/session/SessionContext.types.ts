import { ReactNode } from 'react';
import { SessionFragment } from 'fragments/session.fragment';
import { ProfileFragment } from 'fragments/profile.fragment';

export interface SessionContext {
  session?: SessionFragment;
  setSession(newSession?: SessionFragment): void;
  profile?: ProfileFragment;
  setProfile(newProfile?: ProfileFragment): void;
}

export const defaultSessionContext: SessionContext = {
  session: undefined,
  setSession(newSession?: SessionFragment) { },
  profile: undefined,
  setProfile(newProfile?: ProfileFragment) { },
};

export interface SessionContextProviderProps {
  children: ReactNode;
}
