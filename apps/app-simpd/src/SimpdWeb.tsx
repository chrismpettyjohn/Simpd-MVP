import React from 'react';
import { Router } from 'screens/Router';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { SimpdContextProviders } from '@simpd/lib-web';
import { SiteLayout } from 'components/site-layout/SiteLayout';

export function SimpdWeb() {
  return (
    <SimpdContextProviders>
      <SiteLayout>
        <ToastContainer />
        <Router />
      </SiteLayout>
    </SimpdContextProviders>
  )
}
