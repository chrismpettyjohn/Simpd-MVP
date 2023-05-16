import { sessionContext } from './SessionContext';
import React, { useEffect, useState } from 'react';
import { SessionFragment } from 'graphql/fragments/session.fragment';
import { SessionContextProviderProps } from './SessionContext.types';
import { useSessionAuthenticated } from 'graphql/hooks/use-session-authenticated.hook';
import { FullPageLoadingScreen } from 'components/full-page-loading-screen/FullPageLoadingScreen';

export function SessionContextProvider({ children }: SessionContextProviderProps) {
  const getSession = useSessionAuthenticated();
  const [session, setSessionState] = useState<SessionFragment | null>();

  const useExistingSession = async () => {
    const checkSession = await getSession.fetch();
    setSessionState(checkSession);
  }

  useEffect(() => {
    useExistingSession();
  }, []);


  const setSession = (newSession?: SessionFragment) => {
    setSessionState(newSession);
  };

  const isLoading = session === undefined || getSession.loading

  return (
    <sessionContext.Provider value={{ session: session ?? undefined, setSession }}>
      {isLoading ? <FullPageLoadingScreen /> : children}
    </sessionContext.Provider>
  );
}
