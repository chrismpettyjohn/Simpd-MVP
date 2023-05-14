import { Redirect } from 'wouter';
import React, { useContext, useEffect } from 'react';
import { FullPageLoadingScreen, sessionContext } from '@simpd/lib-web';

export function SignOutScreen() {
  const { session, setSession } = useContext(sessionContext);

  useEffect(() => {
    setSession(undefined);
  }, []);

  if (session) {
    return <FullPageLoadingScreen />
  }

  return <Redirect to="/sign-in" />
}