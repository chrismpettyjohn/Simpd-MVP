import { sessionContext } from './SessionContext';
import React, { useEffect, useState } from 'react';
import { setGraphqlAccessToken } from '../../app/graphql.client';
import { SessionContextProviderProps } from './SessionContext.types';
import { localStorageService } from '../../service/local-storage.service';

export function SessionContextProvider({ children }: SessionContextProviderProps) {
  const existingJwt = localStorageService.get('SESSION', true);
  const [loading, setIsLoading] = useState(true);
  const [session, setSessionState] = useState<any>();

  useEffect(() => {
    const checkForPreviousSession = async () => {
      if (!existingJwt) {
        setIsLoading(false);
        return;
      }

      setGraphqlAccessToken(existingJwt);
    };

    checkForPreviousSession();
  }, []);

  const setSession = (newSession?: any) => {
    setSessionState(newSession);
  };

  return <sessionContext.Provider value={{ session, setSession }}>{loading ? '' : children}</sessionContext.Provider>;
}
