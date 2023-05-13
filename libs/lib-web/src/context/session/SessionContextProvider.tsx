import { sessionContext } from './SessionContext';
import React, { useEffect, useState } from 'react';
import { SessionContextProviderProps } from './SessionContext.types';
import { useSessionAuthenticated } from 'hooks/use-session-authenticated.hook';
import { SessionAuthenticatedQueryResponse } from 'queries/session-authenticated.query';
import { FullPageLoadingScreen } from 'components/full-page-loading-screen/FullPageLoadingScreen';

export function SessionContextProvider({ children }: SessionContextProviderProps) {
  const getSession = useSessionAuthenticated();
  const [session, setSessionState] = useState<SessionAuthenticatedQueryResponse>(null);

  const checkAuthenticatedSession = async () => {
    const checkSession = await getSession.fetch();
    setSessionState(checkSession)
  }

  useEffect(() => {
    checkAuthenticatedSession();
  }, []);

  const setSession = (newSession?: any) => {
    setSessionState(newSession);
  };

  return (
    <sessionContext.Provider value={{ session, setSession }}>
      {getSession.loading ? <FullPageLoadingScreen /> : children}
    </sessionContext.Provider>
  );
}
