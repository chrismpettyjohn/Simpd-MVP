import { Redirect } from 'wouter';
import React, { useContext, useEffect } from 'react';
import { FullPageLoadingScreen, LOCAL_STORAGE_SESSION_TOKEN, sessionContext } from '@simpd/lib-web';

export function SignOutScreen() {
  const { session, setSession } = useContext(sessionContext);

  useEffect(() => {
    localStorage.removeItem(LOCAL_STORAGE_SESSION_TOKEN);
    setSession(null);
  }, []);

  if (session) {
    return <FullPageLoadingScreen />
  }

  return <Redirect to="/sign-in" />
}