import { sessionContext } from './SessionContext';
import React, { useEffect, useState } from 'react';
import { SessionContextProviderProps } from './SessionContext.types';
import { useSessionAuthenticated } from 'hooks/use-session-authenticated.hook';
import { SessionAuthenticatedQueryResponse } from 'queries/session-authenticated.query';
import { FullPageLoadingScreen } from 'components/full-page-loading-screen/FullPageLoadingScreen';

export function SessionContextProvider({ children }: SessionContextProviderProps) {
  const getSession = useSessionAuthenticated();
  const [loading, setLoading] = useState(true);
  const [session, setSessionState] = useState<SessionAuthenticatedQueryResponse>(null);

  const useExistingSession = async () => {
    try {
      const checkSession = await getSession.fetch();
      console.log(checkSession)
      setSessionState(checkSession)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    useExistingSession();
  }, []);


  const setSession = (newSession?: any) => {
    setSessionState(newSession);
  };

  const isLoading = loading || getSession.loading

  return (
    <sessionContext.Provider value={{ session: session ?? undefined, setSession }}>
      {isLoading ? <FullPageLoadingScreen /> : children}
    </sessionContext.Provider>
  );
}
