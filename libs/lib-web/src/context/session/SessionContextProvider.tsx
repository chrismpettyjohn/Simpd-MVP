import { sessionContext } from './SessionContext';
import React, { useEffect, useState } from 'react';
import { SessionContextProviderProps } from './SessionContext.types';
import { useSessionAuthenticated } from 'hooks/use-session-authenticated.hook';
import { SessionAuthenticatedQueryResponse } from 'queries/session-authenticated.query';

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
      {getSession.loading ? <span style={{ color: 'red' }}>'Loading...</span> : children}
    </sessionContext.Provider>
  );
}
