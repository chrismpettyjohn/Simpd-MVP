import React, { useState } from 'react';
import { sessionContext } from './SessionContext';
import { SessionContextProviderProps } from './SessionContext.types';

export function SessionContextProvider({ children }: SessionContextProviderProps) {
  const [loading, setIsLoading] = useState(false);
  const [session, setSessionState] = useState<any>();

  const setSession = (newSession?: any) => {
    setSessionState(newSession);
  };

  return <sessionContext.Provider value={{ session, setSession }}>{children}</sessionContext.Provider>;
}
