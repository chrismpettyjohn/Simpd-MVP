import { sessionContext } from './SessionContext';
import React, { useEffect, useState } from 'react';
import { ProfileFragment } from 'graphql/fragments/profile.fragment';
import { SessionFragment } from 'graphql/fragments/session.fragment';
import { SessionContextProviderProps } from './SessionContext.types';
import { useSessionAuthenticated } from 'graphql/hooks/use-session-authenticated.hook';
import { FullPageLoadingScreen } from 'components/full-page-loading-screen/FullPageLoadingScreen';

export function SessionContextProvider({ children }: SessionContextProviderProps) {
  const getSession = useSessionAuthenticated();
  const [loading, setLoading] = useState(true);
  const [session, setSessionState] = useState<SessionFragment>();
  const [profile, setProfileState] = useState<ProfileFragment>();

  const useExistingSession = async () => {
    try {
      const checkSession = await getSession.fetch();
      setSessionState(checkSession ?? undefined)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    useExistingSession();
  }, []);


  const setSession = (newSession?: SessionFragment) => {
    setSessionState(newSession);
    if (!newSession) {
      setProfileState(undefined);
    }
  };

  const setProfile = (newProfile: ProfileFragment) => {
    setProfileState(newProfile);
  }

  const isLoading = loading || getSession.loading

  return (
    <sessionContext.Provider value={{ session: session, setSession, profile, setProfile }}>
      {isLoading ? <FullPageLoadingScreen /> : children}
    </sessionContext.Provider>
  );
}
