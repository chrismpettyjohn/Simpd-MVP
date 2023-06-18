import { Redirect } from 'wouter';
import React, { useContext } from 'react';
import { sessionContext } from '../../context/session/SessionContext';
import { VerifiedUserGuardProps } from './VerifiedUserGuard.types';

export function VerifiedUserGuard({ children, redirect = false }: VerifiedUserGuardProps) {
  const { session } = useContext(sessionContext);

  const isVerified = session?.user?.isVerified ?? false;

  if (!isVerified) {
    return redirect ? <Redirect to="/dashboard" /> : null;
  }

  return <>{children}</>;
}
