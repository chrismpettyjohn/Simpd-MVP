import React from 'react';
import { Router } from 'screens/Router';
import { SimpdContextProviders } from '@simpd/lib-web';
import { SiteLayout } from 'components/site-layout/SiteLayout';

export function SimpdWeb() {
  return (
    <SimpdContextProviders>
      <SiteLayout>
        <Router />
      </SiteLayout>
    </SimpdContextProviders>
  )
}
