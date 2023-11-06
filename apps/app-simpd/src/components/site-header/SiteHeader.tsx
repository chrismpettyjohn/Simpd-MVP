import { Input } from '../input/Input';
import React, { useContext } from 'react'
import { sessionContext } from '@simpd/lib-web';
import { SiteHeaderContainer, SiteHeaderContent } from './SiteHeader.sty';

export function SiteHeader() {
  const { session } = useContext(sessionContext);

  if (!session) {
    return null;
  }

  return (
    <SiteHeaderContainer>
      <SiteHeaderContent>
        <Input placeholder="Search for some hoes.." />
      </SiteHeaderContent>
    </SiteHeaderContainer>
  )
}
