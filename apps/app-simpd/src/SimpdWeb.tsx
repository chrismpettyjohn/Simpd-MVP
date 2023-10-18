import React from 'react';
import { Router } from 'screens/Router';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { SimpdContextProviders } from '@simpd/lib-web';
import { SiteBody } from './components/site-body/SiteBody';

export function SimpdWeb() {
  return (
    <SimpdContextProviders>
      <SiteBody>
        <ToastContainer />
        <Router />
      </SiteBody>
    </SimpdContextProviders>
  )
}
