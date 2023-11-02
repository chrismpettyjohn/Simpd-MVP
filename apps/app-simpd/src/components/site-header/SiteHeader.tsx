import { Link } from 'wouter';
import React, { useContext } from 'react'
import { UserGuard, sessionContext } from '@simpd/lib-web';
import { SiteHeaderContainer } from './SiteHeader.sty';

export function SiteHeader() {
  const { session } = useContext(sessionContext);

  if (!session) {
    return null;
  }

  return (
    <SiteHeaderContainer>
      hi
    </SiteHeaderContainer>
  )
}
