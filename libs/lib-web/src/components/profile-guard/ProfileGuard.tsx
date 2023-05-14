import { Redirect } from 'wouter';
import React, { useContext } from 'react';
import { ProfileGuardProps } from './ProfileGuard.types';
import { sessionContext } from 'context/session/SessionContext';

export function ProfileGuard({ children, redirect = false }: ProfileGuardProps) {
  const { session, profile } = useContext(sessionContext);

  if (!session && redirect) {
    return <Redirect to="/sign-in" />
  }

  if (!profile && redirect) {
    return <Redirect to="/switch-profile" />
  }

  return !profile ? null : <>{children}</>;
}