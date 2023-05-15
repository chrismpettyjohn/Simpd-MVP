import { sessionContext } from './SessionContext';
import React, { useEffect, useState } from 'react';
import { SessionFragment } from 'graphql/fragments/session.fragment';
import { SessionContextProviderProps } from './SessionContext.types';
import { useSessionAuthenticated } from 'graphql/hooks/use-session-authenticated.hook';
import { FullPageLoadingScreen } from 'components/full-page-loading-screen/FullPageLoadingScreen';

export function SessionContextProvider({ children }: SessionContextProviderProps) {
  const getSession = useSessionAuthenticated();
  const [loading, setLoading] = useState(true);
  const [session, setSessionState] = useState<SessionFragment>();

  const useExistingSession = async () => {
    try {
      const checkSession = await getSession.fetch();
      console.log(checkSession)
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
  };

  const isLoading = loading || getSession.loading

  return (
    <sessionContext.Provider value={{ session: session, setSession }}>
      {isLoading ? <FullPageLoadingScreen /> : children}
    </sessionContext.Provider>
  );
}
